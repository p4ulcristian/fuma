(ns ui.header
  (:require
   [ui.button :as button]
   [ui.theme :as theme]
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
  "Navigate to homepage when logo/title is clicked"
  (router/navigate! {:path "/"}))

;; Event handlers
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
  (let [current-language (rf/subscribe [:header/current-language])
        current-theme (rf/subscribe [:header/current-theme])
        theme-colors (theme/get-theme-colors @current-theme)]
    [:div.language-toggle
     [:button
      {:style {:background (get-in theme-colors [:background :tertiary])
               :color (get-in theme-colors [:text :primary])
               :border (str "1px solid " (get-in theme-colors [:border :secondary]))
               :border-radius "6px"
               :padding "0.5rem 0.75rem"
               :font-size "0.875rem"
               :font-weight "500"
               :cursor "pointer"
               :transition "all 0.2s ease"
               :box-shadow (get-in theme-colors [:shadow :light])}
       :on-click #(handle-language-toggle @current-language)
       :on-mouse-enter (fn [e]
                         (set! (.-background (.-style (.-target e)))
                               (get-in theme-colors [:accent :primary])))
       :on-mouse-leave (fn [e]
                         (set! (.-background (.-style (.-target e)))
                               (get-in theme-colors [:background :tertiary])))}
      (if (= @current-language :en) "EN" "HU")]]))

(defn theme-toggle
  "Theme toggle between light and dark mode"
  []
  (let [current-theme (rf/subscribe [:header/current-theme])
        theme-colors (theme/get-theme-colors @current-theme)]
    [:div.theme-toggle
     [:button
      {:style {:background (get-in theme-colors [:background :tertiary])
               :color (get-in theme-colors [:text :primary])
               :border (str "1px solid " (get-in theme-colors [:border :secondary]))
               :border-radius "6px"
               :padding "0.5rem 0.75rem"
               :font-size "0.875rem"
               :font-weight "500"
               :cursor "pointer"
               :transition "all 0.2s ease"
               :box-shadow (get-in theme-colors [:shadow :light])}
       :on-click #(handle-theme-toggle @current-theme)
       :on-mouse-enter (fn [e]
                         (set! (.-background (.-style (.-target e)))
                               (get-in theme-colors [:accent :primary])))
       :on-mouse-leave (fn [e]
                         (set! (.-background (.-style (.-target e)))
                               (get-in theme-colors [:background :tertiary])))}
      (if (= @current-theme :light) "🌙" "☀️")]]))

(defn header
  "Main application header with logo, language toggle, and logout button"
  []
  (let [current-theme @(rf/subscribe [:header/current-theme])
        theme-colors (theme/get-theme-colors current-theme)]
    [:header.app-header
     {:style {:background (get-in theme-colors [:background :secondary])
              :border-bottom (str "1px solid " (get-in theme-colors [:border :primary]))
              :box-shadow (get-in theme-colors [:shadow :light])
              :padding "1rem 2rem"
              :position "sticky"
              :top "0"
              :z-index "1000"}}
     [:div.header-content
      {:style {:display "flex"
               :justify-content "space-between"
               :align-items "center"
               :max-width "1200px"
               :margin "0 auto"}}
      [:div.header-left
       {:on-click handle-logo-click
        :style {:cursor "pointer" :display "flex" :align-items "center" :gap "0.5rem"}}
       [:img.logo {:src "/logo/logo-256.webp" :alt "Logo"
                   :style {:height "32px" :width "32px"}}]
       [:span.brand-name
        {:style {:font-size "1.25rem"
                 :font-weight "600"
                 :color (get-in theme-colors [:text :primary])}}
        (tr/tr :header/brand)]]
      [:div.header-right
       {:style {:display "flex" :align-items "center" :gap "0.75rem"}}
       [theme-toggle]
       [language-toggle]]]]))

(defn view
  "Header component view function"
  []
  [header])