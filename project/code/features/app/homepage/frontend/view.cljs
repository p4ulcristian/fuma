(ns features.app.homepage.frontend.view
  (:require
   [ui.link :as link]
   [ui.enhanced-button :as enhanced-button]
   [ui.theme :as theme]
   [router.frontend.zero :as router]
   [translations.core :as tr]
   [zero.frontend.re-frame :as rf]))



(defn pricing-preview-card [title price description theme-colors]
  "Simple pricing preview card"
  [:div {:style {:background (get-in theme-colors [:background :secondary])
                 :border-radius "12px" :padding "1.5rem" :text-align "center"
                 :box-shadow (get-in theme-colors [:shadow :light])
                 :transition "transform 0.3s ease"
                 :min-width "250px"}
         :on-mouse-enter #(set! (.-transform (.-style (.-target %))) "translateY(-3px)")
         :on-mouse-leave #(set! (.-transform (.-style (.-target %))) "translateY(0px)")}
   [:h4 {:style {:font-size "1.125rem" :font-weight "600" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 0.5rem 0"}} title]
   [:p {:style {:font-size "1.5rem" :font-weight "700" :color (get-in theme-colors [:accent :primary])
                :margin "0 0 0.5rem 0"}} price]
   [:p {:style {:font-size "0.875rem" :color (get-in theme-colors [:text :secondary])
                :margin "0"}} description]])

(defn- pricing-header [theme-colors]
  [:<>
   [:h2 {:style {:font-size "2.5rem" :font-weight "700" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 1rem 0" :font-family "'Dancing Script', cursive"}}
    (tr/tr :pricing/title)]
   [:p {:style {:font-size "1.125rem" :color (get-in theme-colors [:text :secondary])
                :margin "0 0 3rem 0" :max-width "600px" :margin-left "auto" :margin-right "auto"}}
    (tr/tr :pricing/homepage-description)]])

(defn- pricing-cards [theme-colors]
  [:div {:style {:display "flex" :justify-content "center" :flex-wrap "wrap"
                 :gap "1.5rem" :margin-bottom "3rem"}}
   [pricing-preview-card "Women's Haircut" "6,500 - 14,500 Ft" "Starting prices, varies by length" theme-colors]
   [pricing-preview-card "Men's Haircut" "3,500 - 7,500 Ft" "Includes wash and styling" theme-colors]
   [pricing-preview-card "Hair Coloring" "2,500 - 6,000 Ft" "Professional color services" theme-colors]])

(defn- pricing-button [theme-colors]
  [:div {:style {:margin-top "2rem"}}
   [:a {:href "/pricing"
        :style {:display "inline-block" :padding "1rem 2rem"
                :background (get-in theme-colors [:accent :gradient])
                :color (get-in theme-colors [:text :primary]) :text-decoration "none"
                :border-radius "8px" :font-weight "600" :font-size "1.125rem"
                :transition "transform 0.2s" :box-shadow (get-in theme-colors [:shadow :medium])}}
    (tr/tr :pricing/view-full-pricing)]])

(defn pricing-section [theme-colors]
  [:section {:style {:width "100%" :padding "4rem 2rem" :text-align "center"
                     :background (get-in theme-colors [:background :primary])}}
   [:div {:style {:max-width "1200px" :margin "0 auto"}}
    [pricing-header theme-colors]
    [pricing-cards theme-colors]
    [pricing-button theme-colors]]])


(defn hero-logo [theme-colors]
  [:div {:style {:width "200px" :height "200px" :border-radius "50%"
                 :background (get-in theme-colors [:background :secondary])
                 :display "flex" :align-items "center" :justify-content "center"
                 :margin-bottom "2rem" :box-shadow (get-in theme-colors [:shadow :heavy])
                 :border (str "4px solid " (get-in theme-colors [:accent :primary])) :overflow "hidden"}}
   [:img {:src "/logo/logo-256.webp" :alt "Color Me Crazy Logo"
          :style {:width "180px" :height "180px" :object-fit "cover" :border-radius "50%"}}]])

(defn hero-title [theme-colors]
  [:h1 {:style {:font-size "3.5rem" :font-weight "700" :color (get-in theme-colors [:text :primary])
                :margin "0 0 1rem 0" :font-family "'Dancing Script', cursive" :letter-spacing "0px"}}
   (tr/tr :homepage/title)])

(defn hero-subtitle [theme-colors]
  [:h2 {:style {:font-size "1.25rem" :color (get-in theme-colors [:text :tertiary])
                :font-weight "400" :margin "0"}}
   (tr/tr :homepage/subtitle)])

(defn hero-description [theme-colors]
  [:p {:style {:font-size "1.125rem" :color (get-in theme-colors [:text :secondary])
               :line-height "1.6" :max-width "500px" :margin "0 auto 2rem auto"}}
   (tr/tr :homepage/description)])

(defn hero-button [theme-colors]
  [:button {:on-click #(.scrollIntoView (.getElementById js/document "contact-section") #js {:behavior "smooth"})
            :style {:display "inline-block" :padding "12px 24px"
                    :background (get-in theme-colors [:accent :gradient])
                    :color (get-in theme-colors [:text :primary]) :text-decoration "none"
                    :border-radius "8px" :font-weight "600" :font-size "1.125rem"
                    :transition "transform 0.2s" :box-shadow (get-in theme-colors [:shadow :medium])
                    :border "none" :cursor "pointer"}}
   (tr/tr :homepage/contact-button)])

(defn team-preview-card [member theme-colors]
  "Preview card for team member on homepage"
  [:div {:style {:background (get-in theme-colors [:background :secondary])
                 :border-radius "12px" :padding "1.5rem" :text-align "center"
                 :box-shadow (get-in theme-colors [:shadow :light])
                 :transition "transform 0.3s ease"
                 :min-width "250px"}
         :on-mouse-enter #(set! (.-transform (.-style (.-target %))) "translateY(-3px)")
         :on-mouse-leave #(set! (.-transform (.-style (.-target %))) "translateY(0px)")}
   [:div {:style {:width "80px" :height "80px" :border-radius "50%"
                  :background (get-in theme-colors [:accent :gradient])
                  :display "flex" :align-items "center" :justify-content "center"
                  :margin "0 auto 1rem auto" :overflow "hidden"
                  :border (str "3px solid " (get-in theme-colors [:accent :primary]))}}
    [:div {:style {:font-size "2rem" :color (get-in theme-colors [:text :primary])}}
     (:emoji member "👨‍🦲")]]
   [:h4 {:style {:font-size "1.125rem" :font-weight "600" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 0.25rem 0"}} (:name member)]
   [:p {:style {:color (get-in theme-colors [:accent :primary]) :font-weight "500"
                :font-size "0.875rem" :margin "0"}} (:role member)]])

(defn- team-header [theme-colors]
  [:<>
   [:h2 {:style {:font-size "2.5rem" :font-weight "700" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 1rem 0" :text-align "center"}}
    (tr/tr :team/meet-our-team)]
   [:p {:style {:font-size "1.125rem" :color (get-in theme-colors [:text :secondary])
                :margin "0 0 3rem 0" :max-width "600px" :margin-left "auto" :margin-right "auto"}}
    (tr/tr :team/homepage-description)]])

(defn- team-cards [theme-colors]
  [:div {:style {:display "flex" :justify-content "center" :flex-wrap "wrap"
                 :gap "1.5rem" :margin-bottom "3rem"}}
   [team-preview-card {:name "Balog Antal (AnTi)" :role "Master Stylist" :emoji "👨‍🦲"} theme-colors]
   [team-preview-card {:name "Pintér Felicia" :role "Senior Stylist" :emoji "👩‍🦰"} theme-colors]
   [team-preview-card {:name "Lilo" :role "Fablehair Stylist" :emoji "💇‍♀️"} theme-colors]
   [team-preview-card {:name "Gitta" :role "HairCraft Specialist" :emoji "✂️"} theme-colors]])

(defn- team-button [theme-colors]
  [:div {:style {:margin-top "2rem"}}
   [:a {:href "/the_team"
        :style {:display "inline-block" :padding "1rem 2rem"
                :background (get-in theme-colors [:accent :gradient])
                :color (get-in theme-colors [:text :primary]) :text-decoration "none"
                :border-radius "8px" :font-weight "600" :font-size "1.125rem"
                :transition "transform 0.2s" :box-shadow (get-in theme-colors [:shadow :medium])}}
    (tr/tr :team/meet-full-team)]])

(defn team-section [theme-colors]
  [:section {:style {:width "100%" :padding "4rem 2rem" :text-align "center"
                     :background (get-in theme-colors [:background :primary])}}
   [:div {:style {:max-width "1200px" :margin "0 auto"}}
    [team-header theme-colors]
    [team-cards theme-colors]
    [team-button theme-colors]]])

(defn hero-section [theme-colors]
  [:div {:style {:max-width "600px" :margin "0 auto" :padding "2rem" :text-align "center"}}
   [:div {:style {:display "flex" :flex-direction "column" :align-items "center"
                  :justify-content "center" :margin-bottom "3rem"}}
    [hero-logo theme-colors]
    [hero-title theme-colors]
    [hero-subtitle theme-colors]]
   [hero-description theme-colors]
   [:div {:style {:margin-top "2rem" :display "flex" :justify-content "center"}}
    [hero-button theme-colors]]])

(defn service-badge [text theme-colors]
  [:div {:style {:padding "0.5rem 1rem" :background (get-in theme-colors [:background :tertiary])
                 :border-radius "20px" :font-size "0.875rem"
                 :color (get-in theme-colors [:text :secondary])}}
   text])

(defn service-badges [theme-colors]
  [:div {:style {:display "flex" :gap "1rem" :flex-wrap "wrap"}}
   [service-badge (tr/tr :homepage/service-hair-styling) theme-colors]
   [service-badge (tr/tr :homepage/service-wedding-hair) theme-colors]
   [service-badge (tr/tr :homepage/service-special-events) theme-colors]])

(defn salon-text-content [theme-colors]
  [:div {:style {:order "1"}}
   [:h2 {:style {:font-size "2.5rem" :font-weight "700" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 1.5rem 0" :font-family "'Dancing Script', cursive"}}
    (tr/tr :homepage/section-title)]
   [:p {:style {:font-size "1.125rem" :color (get-in theme-colors [:text :secondary])
                :line-height "1.6" :margin "0 0 2rem 0"}}
    (tr/tr :homepage/section-description)]
   [service-badges theme-colors]])

(defn salon-image [theme-colors]
  [:div {:style {:order "2"}}
   [:img {:src "/images/section.png" :alt "Professional hair styling at Color Me Crazy salon"
          :style {:width "100%" :height "400px" :object-fit "cover" :border-radius "12px"
                  :box-shadow "0 10px 25px rgba(0, 0, 0, 0.15)"}}]])

(defn salon-section [theme-colors]
  [:section {:style {:width "100%" :padding "4rem 2rem"
                     :background (get-in theme-colors [:background :secondary])}}
   [:div {:style {:max-width "1200px" :margin "0 auto" :display "grid"
                  :grid-template-columns "1fr 1fr" :gap "3rem" :align-items "center"}}
    [salon-text-content theme-colors]
    [salon-image theme-colors]]])

(defn company-info-section [theme-colors]
  [:div
   [:h3 {:style {:font-size "1.5rem" :font-weight "700" :margin "0 0 1rem 0"
                 :color (get-in theme-colors [:footer :text-primary])
                 :font-family "'Dancing Script', cursive"}}
    "Color Me Crazy"]
   [:p {:style {:font-size "1rem" :color (get-in theme-colors [:footer :text-secondary])
                :line-height "1.6" :margin "0 0 1rem 0"}}
    (tr/tr :footer/company-description)]
   [:div {:style {:display "flex" :flex-direction "column" :gap "0.5rem" :margin-top "1rem"}}
    [:a {:href "tel:+36209237975" :style {:color (get-in theme-colors [:footer :accent])
                                         :text-decoration "none" :font-size "0.875rem" :transition "color 0.2s"}}
     "📞 +36 20 923 7975 (AnTi)"]
    [:a {:href "tel:+36300894587" :style {:color (get-in theme-colors [:footer :accent])
                                         :text-decoration "none" :font-size "0.875rem" :transition "color 0.2s"}}
     "📞 +36 30 089 4587 (Felícia)"]
    [:a {:href "https://www.instagram.com/colorme_c_hair/" :target "_blank" :style {:color (get-in theme-colors [:footer :accent])
                                                      :text-decoration "none" :font-size "0.875rem" :transition "color 0.2s"}}
     "📱 @colorme_c_hair"]
    [:p {:style {:color (get-in theme-colors [:footer :text-secondary]) :font-size "0.875rem" :margin "0.5rem 0 0 0"}}
     "📍 Szeged, Hungary"]]])

(defn service-link [text theme-colors]
  [:li {:style {:margin "0.5rem 0"}}
   [:a {:href "#" :style {:color "#d1d5db" :text-decoration "none"
                          :font-size "0.875rem" :transition "color 0.2s"}}
    text]])

(defn services-section [theme-colors]
  [:div
   [:h3 {:style {:font-size "1.25rem" :font-weight "600" :margin "0 0 1rem 0"
                 :color (get-in theme-colors [:footer :text-primary])}}
    (tr/tr :footer/services-title)]
   [:ul {:style {:list-style "none" :padding "0" :margin "0"}}
    [service-link (tr/tr :footer/service-cutting) theme-colors]
    [service-link (tr/tr :footer/service-coloring) theme-colors]
    [service-link (tr/tr :footer/service-wedding) theme-colors]
    [service-link (tr/tr :footer/service-events) theme-colors]
    [service-link (tr/tr :footer/service-treatments) theme-colors]]])

(defn hours-location-section [theme-colors]
  [:div
   [:h3 {:style {:font-size "1.25rem" :font-weight "600" :margin "0 0 1rem 0" :color "#f9fafb"}}
    (tr/tr :footer/hours-location-title)]
   [:div {:style {:font-size "0.875rem" :color "#d1d5db" :line-height "1.6"}}
    [:p {:style {:margin "0 0 0.5rem 0"}} (str "📍 " (tr/tr :footer/address))]
    [:p {:style {:margin "0.5rem 0"}} (str "🕒 " (tr/tr :footer/hours-weekday))]
    [:p {:style {:margin "0.5rem 0"}} (str "🕒 " (tr/tr :footer/hours-saturday))]
    [:p {:style {:margin "0.5rem 0"}} (str "🕒 " (tr/tr :footer/hours-sunday))]]])

(defn footer-bottom-bar [theme-colors]
  [:div {:style {:border-top "1px solid #374151" :padding-top "2rem" :display "flex"
                 :justify-content "space-between" :align-items "center" :flex-wrap "wrap" :gap "1rem"}}
   [:p {:style {:font-size "0.875rem" :color "#9ca3af" :margin "0"}}
    (tr/tr :footer/copyright)]
   [:div {:style {:display "flex" :gap "1.5rem"}}
    [:a {:href "#" :style {:color "#9ca3af" :text-decoration "none"
                           :font-size "0.875rem" :transition "color 0.2s"}}
     (tr/tr :footer/privacy-policy)]
    [:a {:href "#" :style {:color "#9ca3af" :text-decoration "none"
                           :font-size "0.875rem" :transition "color 0.2s"}}
     (tr/tr :footer/terms-service)]
    [:a {:href "/login" :style {:color "#60a5fa" :text-decoration "none"
                                :font-size "0.875rem" :font-weight "500" :transition "color 0.2s"}}
     (tr/tr :footer/staff-login)]]])

(defn footer-section [theme-colors]
  [:footer {:style {:background (get-in theme-colors [:footer :background])
                    :color (get-in theme-colors [:footer :text-primary])
                    :padding "3rem 2rem 2rem 2rem" :margin-top "4rem" :width "100%"}}
   [:div {:style {:width "100%"}}
    [:div {:style {:display "grid" :grid-template-columns "repeat(auto-fit, minmax(250px, 1fr))"
                   :gap "2rem" :margin-bottom "2rem"}}
     [company-info-section theme-colors]
     [services-section theme-colors]
     [hours-location-section theme-colors]]
    [footer-bottom-bar theme-colors]]])

(defn- contact-info-card [theme-colors]
  [:div {:style {:background (get-in theme-colors [:background :secondary])
                 :border-radius "20px" :padding "2.5rem" :text-align "center"
                 :box-shadow (get-in theme-colors [:shadow :medium])
                 :min-height "280px" :display "flex" :flex-direction "column"
                 :justify-content "center" :align-items "center"
                 :transition "transform 0.3s ease, box-shadow 0.3s ease"}
         :on-mouse-enter #(do (set! (.-transform (.-style (.-target %))) "translateY(-5px)")
                              (set! (.-boxShadow (.-style (.-target %))) (get-in theme-colors [:shadow :heavy])))
         :on-mouse-leave #(do (set! (.-transform (.-style (.-target %))) "translateY(0px)")
                              (set! (.-boxShadow (.-style (.-target %))) (get-in theme-colors [:shadow :medium])))}
   [:div {:style {:font-size "3.5rem" :margin-bottom "1.5rem"}} "📞"]
   [:h3 {:style {:font-size "1.5rem" :font-weight "600" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 1.5rem 0"}} (tr/tr :homepage/contact-info-title)]
   [:div {:style {:display "flex" :flex-direction "column" :gap "0.75rem" :width "100%"}}
    [:a {:href "tel:+36209237975"
         :style {:color (get-in theme-colors [:accent :primary]) :text-decoration "none"
                 :font-size "1.125rem" :font-weight "500" :padding "0.5rem"
                 :border-radius "8px" :transition "background-color 0.2s"}}
     "+36 20 923 7975 (AnTi)"]
    [:a {:href "tel:+36300894587"
         :style {:color (get-in theme-colors [:accent :primary]) :text-decoration "none"
                 :font-size "1.125rem" :font-weight "500" :padding "0.5rem"
                 :border-radius "8px" :transition "background-color 0.2s"}}
     "+36 30 089 4587 (Felícia)"]]])

(defn- social-media-card [theme-colors]
  [:div {:style {:background (get-in theme-colors [:background :secondary])
                 :border-radius "20px" :padding "2.5rem" :text-align "center"
                 :box-shadow (get-in theme-colors [:shadow :medium])
                 :min-height "280px" :display "flex" :flex-direction "column"
                 :justify-content "center" :align-items "center"
                 :transition "transform 0.3s ease, box-shadow 0.3s ease"}
         :on-mouse-enter #(do (set! (.-transform (.-style (.-target %))) "translateY(-5px)")
                              (set! (.-boxShadow (.-style (.-target %))) (get-in theme-colors [:shadow :heavy])))
         :on-mouse-leave #(do (set! (.-transform (.-style (.-target %))) "translateY(0px)")
                              (set! (.-boxShadow (.-style (.-target %))) (get-in theme-colors [:shadow :medium])))}
   [:div {:style {:font-size "3.5rem" :margin-bottom "1.5rem"}} "📱"]
   [:h3 {:style {:font-size "1.5rem" :font-weight "600" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 1rem 0"}} (tr/tr :homepage/contact-social-title)]
   [:p {:style {:color (get-in theme-colors [:text :secondary]) :font-size "0.875rem"
                :margin "0 0 1.5rem 0"}} (tr/tr :homepage/contact-social-description)]
   [:div {:style {:display "flex" :flex-direction "column" :gap "0.75rem" :width "100%"}}
    [:a {:href "https://www.instagram.com/colorme_c_hair/" :target "_blank"
         :style {:color (get-in theme-colors [:accent :primary]) :text-decoration "none"
                 :font-size "1.125rem" :font-weight "500" :padding "0.5rem"
                 :border-radius "8px" :transition "background-color 0.2s"}}
     "📱 @colorme_c_hair"]
    [:a {:href "https://www.instagram.com/haircraftbygitta/" :target "_blank"
         :style {:color (get-in theme-colors [:accent :primary]) :text-decoration "none"
                 :font-size "1.125rem" :font-weight "500" :padding "0.5rem"
                 :border-radius "8px" :transition "background-color 0.2s"}}
     "📱 @haircraftbygitta"]]])

(defn- location-card [theme-colors]
  [:div {:style {:background (get-in theme-colors [:background :secondary])
                 :border-radius "20px" :padding "2.5rem" :text-align "center"
                 :box-shadow (get-in theme-colors [:shadow :medium])
                 :min-height "280px" :display "flex" :flex-direction "column"
                 :justify-content "center" :align-items "center"
                 :transition "transform 0.3s ease, box-shadow 0.3s ease"}
         :on-mouse-enter #(do (set! (.-transform (.-style (.-target %))) "translateY(-5px)")
                              (set! (.-boxShadow (.-style (.-target %))) (get-in theme-colors [:shadow :heavy])))
         :on-mouse-leave #(do (set! (.-transform (.-style (.-target %))) "translateY(0px)")
                              (set! (.-boxShadow (.-style (.-target %))) (get-in theme-colors [:shadow :medium])))}
   [:div {:style {:font-size "3.5rem" :margin-bottom "1.5rem"}} "📍"]
   [:h3 {:style {:font-size "1.5rem" :font-weight "600" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 1.5rem 0"}} (tr/tr :homepage/contact-location-title)]
   [:p {:style {:color (get-in theme-colors [:text :secondary]) :font-size "1.125rem"
                :margin "0 0 1rem 0" :font-weight "500"}} (tr/tr :homepage/contact-location-address)]
   [:p {:style {:color (get-in theme-colors [:text :secondary]) :font-size "1rem"
                :margin "0"}} (tr/tr :homepage/contact-location-hours)]])

(defn contact-section [theme-colors]
  [:section {:id "contact-section"
             :style {:width "100%" :padding "4rem 2rem" :text-align "center"
                     :background (get-in theme-colors [:background :primary])}}
   [:div {:style {:max-width "1200px" :margin "0 auto"}}
    [:h2 {:style {:font-size "3rem" :font-weight "700" :color (get-in theme-colors [:text :primary])
                  :margin "0 0 1rem 0" :font-family "'Dancing Script', cursive"}}
     (tr/tr :homepage/contact-title)]
    [:p {:style {:font-size "1.25rem" :color (get-in theme-colors [:text :secondary])
                 :margin "0 0 4rem 0" :max-width "600px" :margin-left "auto" :margin-right "auto"}}
     (tr/tr :homepage/contact-description)]
    [:div {:style {:display "grid"
                   :grid-template-columns "repeat(auto-fit, minmax(350px, 1fr))"
                   :gap "2.5rem" :justify-items "center" :align-items "stretch"
                   :padding "0 1rem"}}
     [contact-info-card theme-colors]
     [social-media-card theme-colors]
     [location-card theme-colors]]]])

(defn view []
  (let [current-theme @(rf/subscribe [:header/current-theme])
        theme-colors (theme/get-theme-colors current-theme)]
    (set! (.-title js/document) (tr/tr :homepage/page-title))
    [:div {:style {:min-height "100vh" :background (get-in theme-colors [:background :primary])
                   :display "flex" :flex-direction "column" :align-items "center"
                   :justify-content "center" :position "relative"}}
     [hero-section theme-colors]
     [team-section theme-colors]
     [salon-section theme-colors]
     [pricing-section theme-colors]
     [contact-section theme-colors]
     [footer-section theme-colors]]))