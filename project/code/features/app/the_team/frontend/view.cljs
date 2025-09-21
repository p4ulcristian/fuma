(ns features.app.the-team.frontend.view
  (:require
   [clojure.string]
   [ui.theme :as theme]
   [translations.core :as tr]
   [zero.frontend.re-frame :as rf]))

(def team-members
  [{:name "Balog Antal (AnTi)"
    :role "Master Stylist"
    :description "Master stylist and salon owner with years of experience in modern hair techniques and creative styling."
    :specialties ["Modern Cuts" "Creative Styling" "Color Techniques" "Men's Grooming"]
    :emoji "👨‍🦲"
    :contact {:phone "+36 20 923 7975" :facebook "AnTi // Color Me Crazy" :instagram "cmc.anti"}}
   {:name "Pintér Felicia"
    :role "Senior Stylist"
    :description "Experienced senior stylist with expertise in color techniques and modern styling."
    :specialties ["Hair Coloring" "Modern Styling" "Color Correction" "Hair Treatments"]
    :emoji "👩‍🦰"
    :contact {:phone "+36 30 089 4587" :instagram "https://www.instagram.com/colorme_c_hair/"}}
   {:name "Lilo"
    :role "Fablehair Stylist"
    :description "Creative stylist specializing in wedding hair and special occasion styling."
    :specialties ["Wedding Hair" "Special Events" "Updos" "Hair Design"]
    :emoji "💇‍♀️"
    :contact {:location "Color Me Crazy Szeged" :facebook "https://www.facebook.com/people/Lilo-Fablehair-by-Color-Me-Crazy/61577565787905/"}}
   {:name "Gitta"
    :role "HairCraft Specialist"
    :description "Skilled HairCraft specialist with expertise in precision cuts and classic techniques."
    :specialties ["Precision Cutting" "Classic Styles" "Hair Treatments" "Styling"]
    :emoji "✂️"
    :contact {:location "Color Me Crazy Szeged"
              :facebook "https://www.facebook.com/people/Gitta-HairCraft-by-Color-Me-Crazy/61577343102077/"
              :instagram "https://www.instagram.com/haircraftbygitta/"}}])

(defn- member-avatar [member theme-colors]
  [:div {:style {:width "120px" :height "120px" :border-radius "50%"
                 :background (get-in theme-colors [:accent :gradient])
                 :display "flex" :align-items "center" :justify-content "center"
                 :margin "0 auto 1.5rem auto" :overflow "hidden"
                 :border (str "4px solid " (get-in theme-colors [:accent :primary]))}}
   (if (:photo member)
     [:img {:src (:photo member) :alt (:name member)
            :style {:width "100%" :height "100%" :object-fit "cover"}}]
     [:div {:style {:font-size "3rem" :color (get-in theme-colors [:text :primary])}}
      (:emoji member "👨‍🦲")])])

(defn- member-info [member theme-colors]
  [:<>
   [:h3 {:style {:font-size "1.5rem" :font-weight "600" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 0.5rem 0"}} (:name member)]
   [:p {:style {:color (get-in theme-colors [:accent :primary]) :font-weight "500"
                :font-size "1rem" :margin "0 0 1rem 0"}} (:role member)]
   [:p {:style {:color (get-in theme-colors [:text :secondary]) :font-size "0.9rem"
                :line-height "1.4" :margin "0 0 1.5rem 0"}} (:description member)]])

(defn- member-specialties [member theme-colors]
  [:div {:style {:display "flex" :flex-direction "column" :gap "0.5rem" :margin-bottom "1rem"}}
   (for [specialty (:specialties member)]
     ^{:key specialty}
     [:span {:style {:padding "0.3rem 0.8rem" :background (get-in theme-colors [:background :tertiary])
                     :border-radius "20px" :font-size "0.8rem"
                     :color (get-in theme-colors [:text :secondary])}} specialty])])

(defn- contact-phone [member theme-colors]
  (when (get-in member [:contact :phone])
    [:a {:href (str "tel:" (get-in member [:contact :phone]))
         :style {:color (get-in theme-colors [:accent :primary]) :text-decoration "none"}}
     (str "📞 " (get-in member [:contact :phone]))]))

(defn- contact-instagram [member theme-colors]
  (when (get-in member [:contact :instagram])
    (let [ig-link (get-in member [:contact :instagram])]
      (if (.startsWith ig-link "https://")
        (let [username (-> ig-link
                          (clojure.string/replace "https://www.instagram.com/" "")
                          (clojure.string/replace "/" "")
                          (clojure.string/replace "?igsh=" "")
                          (clojure.string/split #"\?")
                          first)]
          [:a {:href ig-link :target "_blank"
               :style {:color (get-in theme-colors [:accent :primary]) :text-decoration "none"}}
           (str "📱 @" username)])
        [:a {:href (str "https://www.instagram.com/" ig-link) :target "_blank"
             :style {:color (get-in theme-colors [:accent :primary]) :text-decoration "none"}}
         (str "📱 @" ig-link)]))))

(defn- contact-facebook [member theme-colors]
  (when (get-in member [:contact :facebook])
    (let [fb-link (get-in member [:contact :facebook])]
      (if (.startsWith fb-link "https://")
        [:a {:href fb-link :target "_blank"
             :style {:color (get-in theme-colors [:accent :primary]) :text-decoration "none"}}
         "📘 Facebook Page"]
        [:span {:style {:color (get-in theme-colors [:text :secondary])}}
         (str "📘 " fb-link)]))))

(defn- contact-location [member theme-colors]
  (when (get-in member [:contact :location])
    [:span {:style {:color (get-in theme-colors [:text :secondary])}}
     (str "📍 " (get-in member [:contact :location]))]))

(defn- member-contact [member theme-colors]
  (when (:contact member)
    [:div {:style {:border-top (str "1px solid " (get-in theme-colors [:border :secondary]))
                   :padding-top "1rem" :margin-top "1rem"}}
     [:h4 {:style {:font-size "0.9rem" :font-weight "600" :color (get-in theme-colors [:text :primary])
                   :margin "0 0 0.5rem 0"}} "Contact"]
     [:div {:style {:display "flex" :flex-direction "column" :gap "0.3rem" :font-size "0.8rem"}}
      [contact-phone member theme-colors]
      [contact-instagram member theme-colors]
      [contact-facebook member theme-colors]
      [contact-location member theme-colors]]]))

(defn team-member-card [member theme-colors]
  [:div {:style {:background (get-in theme-colors [:background :secondary])
                 :border-radius "16px" :padding "2rem" :text-align "center"
                 :box-shadow (get-in theme-colors [:shadow :medium])
                 :transition "transform 0.3s ease, box-shadow 0.3s ease"
                 :cursor "pointer"}
         :on-mouse-enter #(set! (.-transform (.-style (.-target %))) "translateY(-5px)")
         :on-mouse-leave #(set! (.-transform (.-style (.-target %))) "translateY(0px)")}
   [member-avatar member theme-colors]
   [member-info member theme-colors]
   [member-specialties member theme-colors]
   [member-contact member theme-colors]])

(defn- team-header [theme-colors]
  [:<>
   [:h2 {:style {:font-size "3rem" :font-weight "700" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 1rem 0" :font-family "'Dancing Script', cursive"}} (tr/tr :team/title)]
   [:p {:style {:font-size "1.25rem" :color (get-in theme-colors [:text :secondary])
                :margin "0 0 3rem 0" :max-width "600px" :margin-left "auto" :margin-right "auto"}}
    (tr/tr :team/subtitle)]])

(defn- team-grid [theme-colors]
  [:div {:style {:display "grid" :grid-template-columns "repeat(auto-fit, minmax(300px, 1fr))" :gap "2rem"}}
   (for [member team-members]
     ^{:key (:name member)} [team-member-card member theme-colors])])

(defn team-section [theme-colors]
  [:section {:style {:width "100%" :padding "4rem 2rem" :background (get-in theme-colors [:background :primary])}}
   [:div {:style {:max-width "1200px" :margin "0 auto" :text-align "center"}}
    [team-header theme-colors]
    [team-grid theme-colors]]])

(defn hero-section [theme-colors]
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
  [:div {:style {:text-align "center" :padding "2rem"}}
   [:a {:href "/"
        :style {:display "inline-block" :padding "12px 24px"
                :background (get-in theme-colors [:accent :gradient])
                :color (get-in theme-colors [:text :primary]) :text-decoration "none"
                :border-radius "8px" :font-weight "600" :font-size "1.125rem"
                :transition "transform 0.2s" :box-shadow (get-in theme-colors [:shadow :medium])}}
    (tr/tr :team/back-to-home)]])

(defn view []
  (let [current-theme @(rf/subscribe [:header/current-theme])
        theme-colors (theme/get-theme-colors current-theme)]
    (set! (.-title js/document) (tr/tr :team/page-title))
    [:div {:style {:min-height "100vh" :background (get-in theme-colors [:background :primary])}}
     [hero-section theme-colors]
     [team-section theme-colors]
     [back-to-home-button theme-colors]]))