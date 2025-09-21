(ns ui.header
  (:require
   [ui.button :as button]
   [zero.frontend.re-frame :as rf]
   [parquery.frontend.request :as parquery]
   [router.frontend.zero :as router]
   [translations.core :as tr]))

;; Re-frame events and subscriptions
(rf/reg-event-db
 :header/set-language
 (fn [db [_ language]]
   (println "DEBUG: re-frame event :header/set-language called with:" language)
   (let [updated-db (assoc-in db [:header :language] language)]
     (println "DEBUG: Updated db header section:" (get-in updated-db [:header]))
     updated-db)))

(rf/reg-sub
 :header/current-language
 (fn [db _]
   (let [current-lang (get-in db [:header :language] :hu)]
     (println "DEBUG: subscription :header/current-language returning:" current-lang)
     current-lang)))

;; Theme management
(rf/reg-event-db
 :header/set-theme
 (fn [db [_ theme]]
   (println "DEBUG: re-frame event :header/set-theme called with:" theme)
   (let [updated-db (assoc-in db [:header :theme] theme)]
     (println "DEBUG: Updated db header theme:" (get-in updated-db [:header :theme]))
     updated-db)))

(rf/reg-sub
 :header/current-theme
 (fn [db _]
   (let [current-theme (get-in db [:header :theme] :light)]
     (println "DEBUG: subscription :header/current-theme returning:" current-theme)
     current-theme)))

;; Initialize defaults
(rf/dispatch [:header/set-language :hu])
(rf/dispatch [:header/set-theme :light])

;; Navigation helpers
(defn- get-workspace-id []
  "Get workspace ID from router parameters"
  (get-in @router/state [:parameters :path :workspace-id]))

(defn handle-logo-click []
  "Navigate to workspace dashboard when logo/title is clicked"
  (when-let [workspace-id (get-workspace-id)]
    (router/navigate! {:path (str "/app/" workspace-id)})))

;; Event handlers
(defn handle-logout []
  "Handle user logout"
  (parquery/send-queries
    {:queries {:users/logout {}}
     :callback (fn [response]
                 (:success (:users/logout response)))}))

(defn handle-language-toggle [current-language]
  "Toggle language between en and hu"
  (let [new-language (if (= current-language :en) :hu :en)]
    (println "DEBUG: Toggling language from" current-language "to" new-language)
    (rf/dispatch [:header/set-language new-language])
    (println "DEBUG: Dispatched event")))

(defn handle-theme-toggle [current-theme]
  "Toggle theme between light and dark"
  (let [new-theme (if (= current-theme :light) :dark :light)]
    (println "DEBUG: Toggling theme from" current-theme "to" new-theme)
    (rf/dispatch [:header/set-theme new-theme])
    (println "DEBUG: Dispatched theme event")))

(defn language-toggle
  "Language toggle between English and Hungarian"
  []
  (let [current-language (rf/subscribe [:header/current-language])]
    [:div.language-toggle
     [button/view
      {:type :secondary
       :class "language-toggle-btn"
       :on-click #(handle-language-toggle @current-language)}
      (if (= @current-language :en) "EN" "HU")]]))

(defn theme-toggle
  "Theme toggle between light and dark mode"
  []
  (let [current-theme (rf/subscribe [:header/current-theme])]
    [:div.theme-toggle
     [button/view
      {:type :secondary
       :class "theme-toggle-btn"
       :on-click #(handle-theme-toggle @current-theme)}
      (if (= @current-theme :light) "🌙" "☀️")]]))

(defn header
  "Main application header with logo, language toggle, and logout button"
  []
  [:header.app-header
   [:div.header-content
    [:div.header-left
     {:on-click handle-logo-click
      :style {:cursor "pointer" :display "flex" :align-items "center"}}
     [:img.logo {:src "/logo/logo-256.webp" :alt "Logo"}]
     [:span.brand-name (tr/tr :header/brand)]]
    [:div.header-right
     [theme-toggle]
     [language-toggle]
     [button/view
      {:type :secondary
       :on-click handle-logout
       :class "logout-btn"}
      @(rf/subscribe [:translate :header/logout])]]]])

(defn view
  "Header component view function"
  []
  [header])