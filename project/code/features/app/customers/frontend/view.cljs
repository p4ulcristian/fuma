(ns features.app.customers.frontend.view
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [parquery.frontend.request :as parquery]
            [router.frontend.zero :as router]
            [zero.frontend.re-frame :as rf]
            [zero.frontend.react :as zero-react]
            [ui.modal :as modal]
            [ui.form-field :as form-field]
            [ui.data-table :as data-table]
            [ui.enhanced-button :as enhanced-button]
            [ui.page-header :as page-header]
            [translations.core :as tr]))

;; Re-frame subscriptions
(rf/reg-sub
  :customers/data
  (fn [db _]
    (get-in db [:customers :data] {:customers [] :pagination {}})))

(rf/reg-sub
  :customers/loading?
  (fn [db _]
    (get-in db [:customers :loading?] false)))

(rf/reg-sub
  :customers/modal-customer
  (fn [db _]
    (get-in db [:customers :modal-customer] nil)))

(rf/reg-sub
  :customers/modal-is-new?
  (fn [db _]
    (get-in db [:customers :modal-is-new?] false)))

(rf/reg-sub
  :customers/modal-form
  (fn [db _]
    (get-in db [:customers :modal-form] {})))

(rf/reg-sub
  :customers/modal-errors
  (fn [db _]
    (get-in db [:customers :modal-errors] {})))

(rf/reg-sub
  :customers/modal-loading?
  (fn [db _]
    (get-in db [:customers :modal-loading?] false)))

;; Re-frame events
(rf/reg-event-db
  :customers/set-loading
  (fn [db [_ loading?]]
    (assoc-in db [:customers :loading?] loading?)))

(rf/reg-event-db
  :customers/load-success
  (fn [db [_ data]]
    (-> db
        (assoc-in [:customers :data] data)
        (assoc-in [:customers :loading?] false))))

(rf/reg-event-db
  :customers/open-modal
  (fn [db [_ customer is-new?]]
    (-> db
        (assoc-in [:customers :modal-customer] customer)
        (assoc-in [:customers :modal-is-new?] is-new?))))

(rf/reg-event-db
  :customers/close-modal
  (fn [db _]
    (-> db
        (assoc-in [:customers :modal-customer] nil)
        (assoc-in [:customers :modal-is-new?] false)
        (assoc-in [:customers :modal-form] {})
        (assoc-in [:customers :modal-errors] {}))))

(rf/reg-event-db
  :customers/update-form-field
  (fn [db [_ field-key value]]
    (assoc-in db [:customers :modal-form field-key] value)))

(rf/reg-event-db
  :customers/set-form-errors
  (fn [db [_ errors]]
    (assoc-in db [:customers :modal-errors] errors)))

(rf/reg-event-db
  :customers/init-form
  (fn [db [_ customer-data]]
    (assoc-in db [:customers :modal-form] (or customer-data {}))))

(rf/reg-event-db
  :customers/set-modal-loading
  (fn [db [_ loading?]]
    (assoc-in db [:customers :modal-loading?] loading?)))

(defn- get-workspace-id
  "Get workspace ID from router parameters"
  []
  (let [router-state @router/state
        workspace-id (get-in router-state [:parameters :path :workspace-id])]
    (println "DEBUG: get-workspace-id called")
    (println "  Router state:" router-state)
    (println "  Extracted workspace-id:" workspace-id)
    workspace-id))

(defn- load-customers-query
  "Execute ParQuery to load customers with pagination"
  [workspace-id params]
  (println "DEBUG load-customers-query called with params:" params)
  (rf/dispatch [:customers/set-loading true])
  (parquery/send-queries
   {:queries {:workspace-customers/get-paginated params}
    :parquery/context {:workspace-id workspace-id}
    :callback (fn [response]
               (println "DEBUG load-customers-query response:" response)
               (let [result (:workspace-customers/get-paginated response)]
                 (rf/dispatch [:customers/load-success result])))}))


(defn- save-customer-query
  "Execute ParQuery to save customer"
  [customer workspace-id is-new? callback load-customers]
  (let [query-type (if is-new? :workspace-customers/create :workspace-customers/update)
        customer-data (if is-new? (dissoc customer :customer/id) customer)
        context {:workspace-id workspace-id}]
    (println "DEBUG: save-customer-query called")
    (println "  Workspace ID:" workspace-id)
    (println "  Query type:" query-type)
    (println "  Customer data:" customer-data)
    (println "  Context being sent:" context)
    (parquery/send-queries
     {:queries {query-type customer-data}
      :parquery/context context
      :callback (fn [response]
                 (println "DEBUG: save-customer-query response:" response)
                 (callback)
                 (if (:success (get response query-type))
                   (do (rf/dispatch [:customers/close-modal])
                       (load-customers))
                   (js/alert (str "Error: " (:error (get response query-type))))))})))

(defn- delete-customer-query
  "Execute ParQuery to delete customer"
  [customer-id workspace-id load-customers]
  (parquery/send-queries
   {:queries {:workspace-customers/delete {:customer/id customer-id}}
    :parquery/context {:workspace-id workspace-id}
    :callback (fn [response]
               (if (:success (:workspace-customers/delete response))
                 (load-customers)
                 (js/alert "Error deleting customer")))}))

(defn- validate-name
  "Validate customer name"
  [name]
  (< (count (str/trim (str name))) 2))

(defn- validate-email
  "Validate email format"
  [email]
  (when (and email (seq (str/trim (str email))))
    (let [email-regex #"^[^\s@]+@[^\s@]+\.[^\s@]+$"]
      (not (re-matches email-regex (str/trim (str email)))))))

(defn validate-customer
  "Validates customer data and returns map of field errors"
  [customer]
  (let [errors {}
        name (:customer/name customer)
        email (:customer/email customer)]
    (cond-> errors
      (validate-name name) (assoc :customer/name (tr/tr :customers/error-name))
      (validate-email email) (assoc :customer/email (tr/tr :customers/error-email)))))

(defn- field-label [label field-key has-error?]
  [:label {:style {:display "block" :margin-bottom "0.5rem" :font-weight "600"
                   :font-size "0.875rem" :letter-spacing "0.025em"
                   :color (if has-error? "#dc3545" "#374151")}}
   label 
   (when (#{:customer/name} field-key) 
     [:span {:style {:color "#ef4444" :margin-left "0.25rem"}} "*"])])

(defn- input-base-props
  "Base properties for input fields"
  [field-key form-data has-error? attrs]
  {:value (str (get form-data field-key ""))
   :on-change #(rf/dispatch [:customers/update-form-field field-key (.. % -target -value)])
   :style (merge {:width "100%"
                  :padding "0.75rem 1rem"
                  :border (if has-error? "2px solid #dc3545" "1px solid #d1d5db")
                  :border-radius "8px"
                  :font-size "1rem"
                  :line-height "1.5"
                  :transition "border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                  :box-shadow (if has-error? 
                                "0 0 0 3px rgba(220, 53, 69, 0.1)" 
                                "0 1px 2px 0 rgba(0, 0, 0, 0.05)")
                  :outline "none"}
                 (:style attrs)
                 {:focus {:border-color (if has-error? "#dc3545" "#3b82f6")
                         :box-shadow (if has-error? 
                                       "0 0 0 3px rgba(220, 53, 69, 0.1)"
                                       "0 0 0 3px rgba(59, 130, 246, 0.1)")}})})

(defn- render-textarea
  "Render textarea input"
  [field-key form-data has-error? attrs]
  [:textarea (merge (dissoc attrs :type) (input-base-props field-key form-data has-error? attrs))])

(defn- render-text-input
  "Render text input"
  [field-key form-data has-error? attrs]
  [:input (merge attrs (input-base-props field-key form-data has-error? attrs))])

(defn- field-input
  "Render appropriate input type"
  [field-key form-data has-error? attrs]
  (if (= (:type attrs) "textarea")
    (render-textarea field-key form-data has-error? attrs)
    (render-text-input field-key form-data has-error? attrs)))

(defn- field-error [error-msg]
  (when error-msg
    [:div {:style {:color "#dc3545" :font-size "0.875rem" :margin-top "0.25rem"}}
     error-msg]))

(defn- form-field
  "Complete form field with label, input and error"
  [label field-key form-data errors attrs]
  (let [has-error? (contains? errors field-key)]
    [:div {:style {:margin-bottom "1.5rem"}}
     [field-label label field-key has-error?]
     [field-input field-key form-data has-error? attrs]
     [field-error (get errors field-key)]]))

(defn- form-fields
  "All form input fields"
  [form-data errors]
  [:div
   [form-field (tr/tr :customers/name) :customer/name form-data errors
    {:type "text" :placeholder (tr/tr :customers/name-placeholder)}]
   [form-field (tr/tr :customers/email) :customer/email form-data errors
    {:type "email" :placeholder (tr/tr :customers/email-placeholder)}]
   [form-field (tr/tr :customers/phone) :customer/phone form-data errors
    {:type "text" :placeholder (tr/tr :customers/phone-placeholder)}]
   [form-field (tr/tr :customers/contact-person) :customer/contact-person form-data errors
    {:type "text" :placeholder (tr/tr :customers/contact-person-placeholder)}]
   [form-field (tr/tr :customers/notes) :customer/notes form-data errors
    {:type "textarea" :placeholder (tr/tr :customers/notes-placeholder)}]])

(defn- handle-save-click
  "Handle save button click with validation"
  [form-data is-new? on-save]
  (let [validation-errors (validate-customer form-data)]
    (if (empty? validation-errors)
      (do (rf/dispatch [:customers/set-form-errors {}])
          (rf/dispatch [:customers/set-modal-loading true])
          (on-save form-data (fn [] (rf/dispatch [:customers/set-modal-loading false]))))
      (rf/dispatch [:customers/set-form-errors validation-errors]))))

(defn customer-modal
  "Modal for creating/editing customers using new UI components"
  [customer-data is-new? on-save on-cancel]
  (let [form-data (rf/subscribe [:customers/modal-form])
        errors (rf/subscribe [:customers/modal-errors])
        loading? (rf/subscribe [:customers/modal-loading?])]
    ;; Initialize form when modal opens
    (rf/dispatch [:customers/init-form customer-data])
    (fn [customer-data is-new? on-save on-cancel]
      [modal/modal {:on-close on-cancel :close-on-backdrop? true}
       ^{:key "header"} [modal/modal-header
        {:title (if is-new? (tr/tr :customers/modal-add-title) (tr/tr :customers/modal-edit-title))
         :subtitle (if is-new? 
                     (tr/tr :customers/modal-add-subtitle)
                     (tr/tr :customers/modal-edit-subtitle))}]
       ^{:key "form"} [form-fields @form-data @errors]
       ^{:key "footer"} [modal/modal-footer
        ^{:key "cancel"} [enhanced-button/enhanced-button
         {:variant :secondary
          :on-click on-cancel
          :text (tr/tr :customers/cancel)}]
        ^{:key "save"} [enhanced-button/enhanced-button
         {:variant :primary
          :loading? @loading?
          :on-click #(handle-save-click @form-data is-new? on-save)
          :text (if @loading? (tr/tr :customers/saving) (tr/tr :customers/save-customer))}]]])))

(defn- customer-name-render
  "Custom render function for customer name column"
  [name row]
  [:div 
   [:div {:style {:font-weight "600" :color "#111827" :font-size "0.875rem"}}
    name]
   (when (:customer/email row)
     [:div {:style {:color "#6b7280" :font-size "0.75rem" :margin-top "0.25rem" :line-height "1.4"}}
      (:customer/email row)])])

(defn- contact-render
  "Custom render function for contact info"
  [contact-person row]
  [:div
   (when contact-person
     [:div {:style {:color "#374151" :font-size "0.875rem" :font-weight "500"}}
      contact-person])
   (when (:customer/phone row)
     [:div {:style {:color "#6b7280" :font-size "0.75rem"}}
      (:customer/phone row)])])

(defn- status-render
  "Custom render function for active status"
  [active row]
  [:span {:style {:display "inline-block"
                  :padding "0.25rem 0.75rem"
                  :border-radius "12px"
                  :font-size "0.75rem"
                  :font-weight "500"
                  :background (if active "#dcfce7" "#fef2f2")
                  :color (if active "#15803d" "#dc2626")}}
   (if active (tr/tr :customers/status-active) (tr/tr :customers/status-inactive))])

(defn customers-table
  "Customers table using server-side data-table component with search, sorting, and pagination"
  [customers loading? on-edit on-delete query-fn]
  (println "DEBUG: customers-table called with customers:" @customers)
  (println "DEBUG: customers-table loading?:" @loading?)
  [:div
   (str (:customers @customers))
   [data-table/server-side-data-table
    {:headers [{:key :customer/name :label (tr/tr :customers/table-header-customer) :render customer-name-render :sortable? true}
               {:key :customer/contact-person :label (tr/tr :customers/table-header-contact) :render contact-render :sortable? true}
               {:key :customer/active :label (tr/tr :customers/table-header-status) :render status-render :sortable? false}]
     :data-source (or (:customers @customers) {})
     :loading? @loading?
     :empty-message (tr/tr :customers/no-customers-found)
     :id-key :customer/id
     :table-id :customers-table
     :show-search? true
     :show-pagination? true
     :query-fn query-fn
     :on-data-change (fn [result] (rf/dispatch [:customers/load-success result]))
     :actions [{:key :edit :label (tr/tr :customers/action-edit) :variant :primary :on-click on-edit}
               {:key :delete :label (tr/tr :customers/action-delete) :variant :danger 
                :on-click (fn [row] 
                            (when (js/confirm (tr/tr :customers/confirm-delete))
                              (on-delete (:customer/id row))))}]}]])

(defn- customers-page-header
  "Page header with title and add button using new UI component"
  []
  [page-header/page-header
   {:title (tr/tr :customers/page-title)
    :description (tr/tr :customers/page-description)
    :action-button [enhanced-button/enhanced-button
                    {:variant :success
                     :on-click (fn [] 
                                (rf/dispatch [:customers/open-modal {:customer/active true} true]))
                     :text (tr/tr :customers/add-new-customer)}]}])

(defn- customers-content
  "Main content area with server-side data table"
  [customers loading? delete-customer query-fn]
  [customers-table 
   customers 
   loading?
   (fn [customer]
     (rf/dispatch [:customers/open-modal customer false]))
   delete-customer
   query-fn])

(defn- modal-when-open
  "Render modal when customer is selected"
  [save-customer]
  (let [modal-customer (rf/subscribe [:customers/modal-customer])
        modal-is-new? (rf/subscribe [:customers/modal-is-new?])]
    (when @modal-customer
      [customer-modal @modal-customer @modal-is-new? save-customer
       (fn [] (rf/dispatch [:customers/close-modal]))])))

(defn view []
  (let [workspace-id (get-workspace-id)
        customers-data (rf/subscribe [:customers/data])
        loading? (rf/subscribe [:customers/loading?])
        modal-is-new? (rf/subscribe [:customers/modal-is-new?])
        
        load-customers (fn [params]
                         (load-customers-query workspace-id (or params {})))
        
        save-customer (fn [customer callback]
                        (save-customer-query customer workspace-id 
                                             @modal-is-new?
                                             callback (fn [] (load-customers {}))))
        
        delete-customer (fn [customer-id]
                          (delete-customer-query customer-id workspace-id (fn [] (load-customers {}))))]
    
    [:div {:style {:min-height "100vh" :background "#f9fafb"}}
     [:div {:style {:max-width "1200px" :margin "0 auto" :padding "2rem"}}
      [customers-page-header]
      [customers-content customers-data loading? delete-customer load-customers]
      [modal-when-open save-customer]]]))