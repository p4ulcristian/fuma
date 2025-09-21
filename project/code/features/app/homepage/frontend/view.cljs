(ns features.app.homepage.frontend.view
  (:require
   [ui.link :as link]
   [ui.enhanced-button :as enhanced-button]
   [ui.theme :as theme]
   [router.frontend.zero :as router]
   [translations.core :as tr]
   [zero.frontend.re-frame :as rf]))

(defn handle-language-toggle [current-language]
  "Toggle language between en and hu"
  (let [new-language (if (= current-language :en) :hu :en)]
    (rf/dispatch [:header/set-language new-language])))

(defn handle-theme-toggle [current-theme]
  "Toggle theme between light and dark"
  (let [new-theme (if (= current-theme :light) :dark :light)]
    (rf/dispatch [:header/set-theme new-theme])))

(defn language-chooser
  "Language chooser component for homepage"
  []
  (let [current-language @(rf/subscribe [:header/current-language])
        current-theme @(rf/subscribe [:header/current-theme])
        theme-colors (theme/get-theme-colors current-theme)]
    [:div {:style {:position "absolute"
                   :top "20px"
                   :right "20px"
                   :display "flex"
                   :gap "10px"}}
     ;; Theme toggle
     [:button {:style {:padding "8px 16px"
                       :border "none"
                       :background (get-in theme-colors [:background :secondary])
                       :color (get-in theme-colors [:text :primary])
                       :border-radius "25px"
                       :font-weight "600"
                       :cursor "pointer"
                       :transition "all 0.2s"
                       :box-shadow (get-in theme-colors [:shadow :light])}
               :on-click #(handle-theme-toggle current-theme)}
      (if (= current-theme :light) "🌙" "☀️")]
     ;; Language buttons
     [:button {:style {:padding "8px 16px"
                       :border "none"
                       :background (if (= current-language :en)
                                    (get-in theme-colors [:accent :gradient])
                                    (get-in theme-colors [:background :secondary]))
                       :color (if (= current-language :en)
                               (get-in theme-colors [:text :primary])
                               (get-in theme-colors [:accent :primary]))
                       :border-radius "25px"
                       :font-weight "600"
                       :cursor "pointer"
                       :transition "all 0.2s"
                       :box-shadow (get-in theme-colors [:shadow :light])}
               :on-click #(when (not= current-language :en)
                           (handle-language-toggle current-language))}
      "EN"]
     [:button {:style {:padding "8px 16px"
                       :border "none"
                       :background (if (= current-language :hu)
                                    (get-in theme-colors [:accent :gradient])
                                    (get-in theme-colors [:background :secondary]))
                       :color (if (= current-language :hu)
                               (get-in theme-colors [:text :primary])
                               (get-in theme-colors [:accent :primary]))
                       :border-radius "25px"
                       :font-weight "600"
                       :cursor "pointer"
                       :transition "all 0.2s"
                       :box-shadow (get-in theme-colors [:shadow :light])}
               :on-click #(when (not= current-language :hu)
                           (handle-language-toggle current-language))}
      "HU"]]))

(defn view []
  (let [current-theme @(rf/subscribe [:header/current-theme])
        theme-colors (theme/get-theme-colors current-theme)]
    [:div {:style {:min-height "100vh"
                   :background (get-in theme-colors [:background :primary])
                   :display "flex"
                   :flex-direction "column"
                   :align-items "center"
                   :justify-content "center"
                   :position "relative"}}
   [language-chooser]
   [:div {:style {:max-width "600px"
                  :margin "0 auto"
                  :padding "2rem"
                  :text-align "center"}}
    [:div {:style {:display "flex"
                   :flex-direction "column"
                   :align-items "center"
                   :justify-content "center"
                   :margin-bottom "3rem"}}
     [:div {:style {:width "200px"
                    :height "200px"
                    :border-radius "50%"
                    :background (get-in theme-colors [:background :secondary])
                    :display "flex"
                    :align-items "center"
                    :justify-content "center"
                    :margin-bottom "2rem"
                    :box-shadow (get-in theme-colors [:shadow :heavy])
                    :border (str "4px solid " (get-in theme-colors [:accent :primary]))
                    :overflow "hidden"}}
      [:img {:src "/logo/logo-256.webp"
             :alt "Color Me Crazy Logo"
             :style {:width "180px"
                     :height "180px"
                     :object-fit "cover"
                     :border-radius "50%"}}]]
     [:h1 {:style {:font-size "3.5rem"
                   :font-weight "700"
                   :color (get-in theme-colors [:text :primary])
                   :margin "0 0 1rem 0"
                   :font-family "'Dancing Script', cursive"
                   :letter-spacing "0px"}}
      (tr/tr :homepage/title)]
     [:h2 {:style {:font-size "1.25rem"
                   :color (get-in theme-colors [:text :tertiary])
                   :font-weight "400"
                   :margin "0"}}
      (tr/tr :homepage/subtitle)]]
    [:p {:style {:font-size "1.125rem"
                 :color (get-in theme-colors [:text :secondary])
                 :line-height "1.6"
                 :max-width "500px"
                 :margin "0 auto 2rem auto"}}
     (tr/tr :homepage/description)]
    [:div {:style {:margin-top "2rem"}}
     [:a {:href "/login"
          :style {:display "inline-block"
                  :padding "12px 24px"
                  :background (get-in theme-colors [:accent :gradient])
                  :color (get-in theme-colors [:text :primary])
                  :text-decoration "none"
                  :border-radius "8px"
                  :font-weight "600"
                  :font-size "1.125rem"
                  :transition "transform 0.2s"
                  :box-shadow (get-in theme-colors [:shadow :medium])}}
      (tr/tr :homepage/contact-button)]]]

   ;; New section with salon image
   [:section {:style {:width "100%"
                      :padding "4rem 2rem"
                      :background (get-in theme-colors [:background :secondary])}}
    [:div {:style {:max-width "1200px"
                   :margin "0 auto"
                   :display "grid"
                   :grid-template-columns "1fr 1fr"
                   :gap "3rem"
                   :align-items "center"}}
     [:div {:style {:order "1"}}
      [:h2 {:style {:font-size "2.5rem"
                    :font-weight "700"
                    :color (get-in theme-colors [:text :primary])
                    :margin "0 0 1.5rem 0"
                    :font-family "'Dancing Script', cursive"}}
       (tr/tr :homepage/section-title)]
      [:p {:style {:font-size "1.125rem"
                   :color (get-in theme-colors [:text :secondary])
                   :line-height "1.6"
                   :margin "0 0 2rem 0"}}
       (tr/tr :homepage/section-description)]
      [:div {:style {:display "flex"
                     :gap "1rem"
                     :flex-wrap "wrap"}}
       [:div {:style {:padding "0.5rem 1rem"
                      :background (get-in theme-colors [:background :tertiary])
                      :border-radius "20px"
                      :font-size "0.875rem"
                      :color (get-in theme-colors [:text :secondary])}}
        (tr/tr :homepage/service-hair-styling)]
       [:div {:style {:padding "0.5rem 1rem"
                      :background (get-in theme-colors [:background :tertiary])
                      :border-radius "20px"
                      :font-size "0.875rem"
                      :color (get-in theme-colors [:text :secondary])}}
        (tr/tr :homepage/service-wedding-hair)]
       [:div {:style {:padding "0.5rem 1rem"
                      :background (get-in theme-colors [:background :tertiary])
                      :border-radius "20px"
                      :font-size "0.875rem"
                      :color (get-in theme-colors [:text :secondary])}}
        (tr/tr :homepage/service-special-events)]]]
     [:div {:style {:order "2"}}
      [:img {:src "/images/section.png"
             :alt "Professional hair styling at Color Me Crazy salon"
             :style {:width "100%"
                     :height "400px"
                     :object-fit "cover"
                     :border-radius "12px"
                     :box-shadow "0 10px 25px rgba(0, 0, 0, 0.15)"}}]]]]

   ;; Footer
   [:footer {:style {:background (get-in theme-colors [:footer :background])
                     :color (get-in theme-colors [:footer :text-primary])
                     :padding "3rem 2rem 2rem 2rem"
                     :margin-top "4rem"
                     :width "100%"}}
    [:div {:style {:width "100%"}}
     [:div {:style {:display "grid"
                    :grid-template-columns "repeat(auto-fit, minmax(250px, 1fr))"
                    :gap "2rem"
                    :margin-bottom "2rem"}}

      ;; Company Info
      [:div
       [:h3 {:style {:font-size "1.5rem"
                     :font-weight "700"
                     :margin "0 0 1rem 0"
                     :color (get-in theme-colors [:footer :text-primary])
                     :font-family "'Dancing Script', cursive"}}
        "Color Me Crazy"]
       [:p {:style {:font-size "1rem"
                    :color (get-in theme-colors [:footer :text-secondary])
                    :line-height "1.6"
                    :margin "0 0 1rem 0"}}
        (tr/tr :footer/company-description)]
       [:div {:style {:display "flex"
                      :gap "1rem"
                      :margin-top "1rem"}}
        [:a {:href "tel:+1234567890"
             :style {:color (get-in theme-colors [:footer :accent])
                     :text-decoration "none"
                     :font-size "0.875rem"
                     :transition "color 0.2s"}}
         (str "📞 " (tr/tr :footer/phone))]
        [:a {:href "mailto:info@colormecrazy.com"
             :style {:color (get-in theme-colors [:footer :accent])
                     :text-decoration "none"
                     :font-size "0.875rem"
                     :transition "color 0.2s"}}
         (str "✉️ " (tr/tr :footer/email))]]]

      ;; Services
      [:div
       [:h3 {:style {:font-size "1.25rem"
                     :font-weight "600"
                     :margin "0 0 1rem 0"
                     :color (get-in theme-colors [:footer :text-primary])}}
        (tr/tr :footer/services-title)]
       [:ul {:style {:list-style "none"
                     :padding "0"
                     :margin "0"}}
        [:li {:style {:margin "0.5rem 0"}}
         [:a {:href "#"
              :style {:color "#d1d5db"
                      :text-decoration "none"
                      :font-size "0.875rem"
                      :transition "color 0.2s"}}
          (tr/tr :footer/service-cutting)]]
        [:li {:style {:margin "0.5rem 0"}}
         [:a {:href "#"
              :style {:color "#d1d5db"
                      :text-decoration "none"
                      :font-size "0.875rem"
                      :transition "color 0.2s"}}
          (tr/tr :footer/service-coloring)]]
        [:li {:style {:margin "0.5rem 0"}}
         [:a {:href "#"
              :style {:color "#d1d5db"
                      :text-decoration "none"
                      :font-size "0.875rem"
                      :transition "color 0.2s"}}
          (tr/tr :footer/service-wedding)]]
        [:li {:style {:margin "0.5rem 0"}}
         [:a {:href "#"
              :style {:color "#d1d5db"
                      :text-decoration "none"
                      :font-size "0.875rem"
                      :transition "color 0.2s"}}
          (tr/tr :footer/service-events)]]
        [:li {:style {:margin "0.5rem 0"}}
         [:a {:href "#"
              :style {:color "#d1d5db"
                      :text-decoration "none"
                      :font-size "0.875rem"
                      :transition "color 0.2s"}}
          (tr/tr :footer/service-treatments)]]]]

      ;; Hours & Location
      [:div
       [:h3 {:style {:font-size "1.25rem"
                     :font-weight "600"
                     :margin "0 0 1rem 0"
                     :color "#f9fafb"}}
        (tr/tr :footer/hours-location-title)]
       [:div {:style {:font-size "0.875rem"
                      :color "#d1d5db"
                      :line-height "1.6"}}
        [:p {:style {:margin "0 0 0.5rem 0"}}
         (str "📍 " (tr/tr :footer/address))]
        [:p {:style {:margin "0.5rem 0"}}
         (str "🕒 " (tr/tr :footer/hours-weekday))]
        [:p {:style {:margin "0.5rem 0"}}
         (str "🕒 " (tr/tr :footer/hours-saturday))]
        [:p {:style {:margin "0.5rem 0"}}
         (str "🕒 " (tr/tr :footer/hours-sunday))]]]]

     ;; Bottom Bar
     [:div {:style {:border-top "1px solid #374151"
                    :padding-top "2rem"
                    :display "flex"
                    :justify-content "space-between"
                    :align-items "center"
                    :flex-wrap "wrap"
                    :gap "1rem"}}
      [:p {:style {:font-size "0.875rem"
                   :color "#9ca3af"
                   :margin "0"}}
       (tr/tr :footer/copyright)]
      [:div {:style {:display "flex"
                     :gap "1.5rem"}}
       [:a {:href "#"
            :style {:color "#9ca3af"
                    :text-decoration "none"
                    :font-size "0.875rem"
                    :transition "color 0.2s"}}
        (tr/tr :footer/privacy-policy)]
       [:a {:href "#"
            :style {:color "#9ca3af"
                    :text-decoration "none"
                    :font-size "0.875rem"
                    :transition "color 0.2s"}}
        (tr/tr :footer/terms-service)]
       [:a {:href "/login"
            :style {:color "#60a5fa"
                    :text-decoration "none"
                    :font-size "0.875rem"
                    :font-weight "500"
                    :transition "color 0.2s"}}
        (tr/tr :footer/staff-login)]]]]]]))