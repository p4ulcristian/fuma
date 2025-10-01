(ns features.app.newsletter.frontend.view
  (:require
   [features.app.newsletter.frontend.newsletter-data :as newsletter-data]
   [reagent.core :as r]))

(defn view
  "Newsletter subscriptions list page"
  []
  (let [state (r/atom {:loading? true
                       :error nil
                       :subscriptions []})]

    ;; Fetch subscriptions on mount
    (newsletter-data/fetch-subscriptions
     (fn [subscriptions]
       (println "Loaded" (count subscriptions) "subscriptions")
       (swap! state assoc
              :loading? false
              :subscriptions subscriptions))
     (fn [error]
       (println "Error loading subscriptions:" error)
       (swap! state assoc
              :loading? false
              :error error)))

    ;; Set page title
    (set! (.-title js/document) "Newsletter Subscriptions - FUMA")

    (fn []
      [:div {:style {:font-family "system-ui, -apple-system, sans-serif"
                     :max-width "1200px"
                     :margin "0 auto"
                     :padding "40px 20px"}}

       ;; Header
       [:div {:style {:display "flex"
                      :justify-content "space-between"
                      :align-items "center"
                      :margin-bottom "40px"}}
        [:div
         [:h1 {:style {:font-size "2.5rem"
                       :margin-bottom "10px"
                       :color "#14b8a6"}}
          "Newsletter Subscriptions"]
         [:p {:style {:font-size "1.1rem"
                      :color "#666"}}
          "List of all newsletter subscribers"]]

        ;; Download CSV button
        [:a {:href "/api/newsletter/export?key=fuma2025newsletter"
             :download "newsletter_subscriptions.csv"
             :style {:display "inline-block"
                     :padding "12px 24px"
                     :background-color "#14b8a6"
                     :color "white"
                     :text-decoration "none"
                     :border-radius "8px"
                     :font-weight "600"
                     :font-size "1rem"
                     :transition "background-color 0.2s ease"
                     :box-shadow "0 2px 4px rgba(0,0,0,0.1)"
                     :cursor "pointer"
                     :white-space "nowrap"}
             :on-mouse-enter #(set! (-> % .-target .-style .-backgroundColor) "#0d9488")
             :on-mouse-leave #(set! (-> % .-target .-style .-backgroundColor) "#14b8a6")}
         "📥 Download CSV"]]

       ;; Loading state
       (when (:loading? @state)
         [:div {:style {:text-align "center"
                        :padding "40px"}}
          [:p {:style {:font-size "1.2rem"
                       :color "#666"}}
           "Loading subscriptions..."]])

       ;; Error state
       (when (:error @state)
         [:div {:style {:background-color "#fee"
                        :border "1px solid #fcc"
                        :border-radius "8px"
                        :padding "20px"
                        :color "#c33"}}
          [:p [:strong "Error: "] (:error @state)]])

       ;; Subscriptions list
       (when (and (not (:loading? @state))
                  (not (:error @state)))
         (let [subscriptions (:subscriptions @state)]
           (if (empty? subscriptions)
             [:div {:style {:text-align "center"
                            :padding "40px"
                            :color "#666"}}
              [:p {:style {:font-size "1.2rem"}}
               "No subscriptions yet."]]

             [:div
              [:div {:style {:margin-bottom "20px"
                             :font-size "1.1rem"
                             :color "#555"}}
               [:strong (count subscriptions)] " total subscribers"]

              ;; Table
              [:table {:style {:width "100%"
                               :border-collapse "collapse"
                               :background-color "white"
                               :box-shadow "0 2px 8px rgba(0,0,0,0.1)"
                               :border-radius "8px"
                               :overflow "hidden"}}
               [:thead
                [:tr {:style {:background-color "#14b8a6"
                              :color "white"}}
                 [:th {:style {:padding "16px"
                               :text-align "left"
                               :font-weight "600"
                               :border-bottom "2px solid #0d9488"}}
                  "#"]
                 [:th {:style {:padding "16px"
                               :text-align "left"
                               :font-weight "600"
                               :border-bottom "2px solid #0d9488"}}
                  "Name"]
                 [:th {:style {:padding "16px"
                               :text-align "left"
                               :font-weight "600"
                               :border-bottom "2px solid #0d9488"}}
                  "Email"]]]
               [:tbody
                (map-indexed
                 (fn [idx subscription]
                   [:tr {:key idx
                         :style {:border-bottom "1px solid #e5e7eb"}}
                    [:td {:style {:padding "16px"
                                  :color "#666"}}
                     (inc idx)]
                    [:td {:style {:padding "16px"
                                  :font-weight "500"}}
                     (:newsletter/name subscription)]
                    [:td {:style {:padding "16px"
                                  :color "#555"}}
                     (:newsletter/email subscription)]])
                 subscriptions)]]])))])))
