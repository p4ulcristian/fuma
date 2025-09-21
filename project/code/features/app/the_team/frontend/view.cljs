(ns features.app.the-team.frontend.view
  (:require
   [ui.theme :as theme]
   [translations.core :as tr]
   [zero.frontend.re-frame :as rf]))

(defn team-member-card [member theme-colors]
  "Individual team member card component"
  [:div {:style {:background (get-in theme-colors [:background :secondary])
                 :border-radius "16px" :padding "2rem" :text-align "center"
                 :box-shadow (get-in theme-colors [:shadow :medium])
                 :transition "transform 0.3s ease, box-shadow 0.3s ease"
                 :cursor "pointer"}
         :on-mouse-enter #(set! (.-transform (.-style (.-target %))) "translateY(-5px)")
         :on-mouse-leave #(set! (.-transform (.-style (.-target %))) "translateY(0px)")}
   [:div {:style {:width "120px" :height "120px" :border-radius "50%"
                  :background (get-in theme-colors [:accent :gradient])
                  :display "flex" :align-items "center" :justify-content "center"
                  :margin "0 auto 1.5rem auto" :overflow "hidden"
                  :border (str "4px solid " (get-in theme-colors [:accent :primary]))}}
    (if (:photo member)
      [:img {:src (:photo member) :alt (:name member)
             :style {:width "100%" :height "100%" :object-fit "cover"}}]
      [:div {:style {:font-size "3rem" :color (get-in theme-colors [:text :primary])}}
       (:emoji member "👨‍🦲")])]
   [:h3 {:style {:font-size "1.5rem" :font-weight "600" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 0.5rem 0"}} (:name member)]
   [:p {:style {:color (get-in theme-colors [:accent :primary]) :font-weight "500"
                :font-size "1rem" :margin "0 0 1rem 0"}} (:role member)]
   [:p {:style {:color (get-in theme-colors [:text :secondary]) :font-size "0.9rem"
                :line-height "1.4" :margin "0 0 1.5rem 0"}} (:description member)]
   [:div {:style {:display "flex" :flex-direction "column" :gap "0.5rem"}}
    (for [specialty (:specialties member)]
      ^{:key specialty}
      [:span {:style {:padding "0.3rem 0.8rem" :background (get-in theme-colors [:background :tertiary])
                      :border-radius "20px" :font-size "0.8rem"
                      :color (get-in theme-colors [:text :secondary])}} specialty])]])

(defn team-section [theme-colors]
  "Main team section"
  (let [team-members [{:name "Pintér Felicia"
                       :role (tr/tr :team/master-hairdresser)
                       :description (tr/tr :team/felicia-desc)
                       :specialties [(tr/tr :team/balayage) (tr/tr :team/color-correction) (tr/tr :team/wedding-hair)]
                       :emoji "👩‍🦰"
                       :photo nil}
                      {:name "Anna Kovács"
                       :role (tr/tr :team/senior-stylist)
                       :description (tr/tr :team/anna-desc)
                       :specialties [(tr/tr :team/cutting) (tr/tr :team/styling) (tr/tr :team/highlights)]
                       :emoji "👩‍🦱"
                       :photo nil}
                      {:name "Péter Nagy"
                       :role (tr/tr :team/barber-specialist)
                       :description (tr/tr :team/peter-desc)
                       :specialties [(tr/tr :team/mens-cuts) (tr/tr :team/beard-styling) (tr/tr :team/classic-cuts)]
                       :emoji "👨‍🦲"
                       :photo nil}]]
    [:section {:style {:width "100%" :padding "4rem 2rem" :background (get-in theme-colors [:background :primary])}}
     [:div {:style {:max-width "1200px" :margin "0 auto" :text-align "center"}}
      [:h2 {:style {:font-size "3rem" :font-weight "700" :color (get-in theme-colors [:text :primary])
                    :margin "0 0 1rem 0" :font-family "'Dancing Script', cursive"}} (tr/tr :team/title)]
      [:p {:style {:font-size "1.25rem" :color (get-in theme-colors [:text :secondary])
                   :margin "0 0 3rem 0" :max-width "600px" :margin-left "auto" :margin-right "auto"}}
       (tr/tr :team/subtitle)]
      [:div {:style {:display "grid" :grid-template-columns "repeat(auto-fit, minmax(300px, 1fr))" :gap "2rem"}}
       (for [member team-members]
         ^{:key (:name member)} [team-member-card member theme-colors])]]]))

(defn hero-section [theme-colors]
  "Hero section for the team page"
  [:div {:style {:min-height "60vh" :background (get-in theme-colors [:background :secondary])
                 :display "flex" :align-items "center" :justify-content "center"
                 :padding "4rem 2rem"}}
   [:div {:style {:max-width "800px" :text-align "center"}}
    [:h1 {:style {:font-size "4rem" :font-weight "700" :color (get-in theme-colors [:text :primary])
                  :margin "0 0 1.5rem 0" :font-family "'Dancing Script', cursive"}}
     (tr/tr :team/hero-title)]
    [:p {:style {:font-size "1.5rem" :color (get-in theme-colors [:text :secondary])
                 :line-height "1.6" :margin "0"}}
     (tr/tr :team/hero-subtitle)]]])

(defn back-to-home-button [theme-colors]
  "Button to go back to homepage"
  [:div {:style {:text-align "center" :padding "2rem"}}
   [:a {:href "/"
        :style {:display "inline-block" :padding "12px 24px"
                :background (get-in theme-colors [:accent :gradient])
                :color (get-in theme-colors [:text :primary]) :text-decoration "none"
                :border-radius "8px" :font-weight "600" :font-size "1.125rem"
                :transition "transform 0.2s" :box-shadow (get-in theme-colors [:shadow :medium])}}
    (tr/tr :team/back-to-home)]])

(defn view []
  "Main team page view"
  (let [current-theme @(rf/subscribe [:header/current-theme])
        theme-colors (theme/get-theme-colors current-theme)]
    (set! (.-title js/document) (tr/tr :team/page-title))
    [:div {:style {:min-height "100vh" :background (get-in theme-colors [:background :primary])}}
     [hero-section theme-colors]
     [team-section theme-colors]
     [back-to-home-button theme-colors]]))