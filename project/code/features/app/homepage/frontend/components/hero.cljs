(ns features.app.homepage.frontend.components.hero
  (:require
   [features.app.homepage.frontend.components.button :as button]))

(defn hero-section
  "Main hero section with logo, headline, and CTA"
  []
  [:div {:style {:background "linear-gradient(135deg, #6B5DD3 0%, #8B7FD8 100%)"
                 :min-height "100vh"
                 :display "flex"
                 :align-items "center"
                 :justify-content "center"
                 :position "relative"
                 :overflow "hidden"
                 :padding "40px 20px"}}

   ;; Background illustration
   [:img {:src "/images/fejleckep.png"
          :alt "FUMA meditation illustration"
          :style {:position "absolute"
                  :right "5%"
                  :top "50%"
                  :transform "translateY(-50%)"
                  :max-width "50%"
                  :height "auto"
                  :opacity "0.95"}}]

   ;; Content container
   [:div {:style {:max-width "1200px"
                  :width "100%"
                  :display "flex"
                  :flex-direction "column"
                  :align-items "flex-start"
                  :z-index "10"
                  :padding-left "5%"}}

    ;; Logo
    [:img {:src "/images/fuma_logo_landing_page_fejlecbe.png"
           :alt "FUMA Logo"
           :style {:width "200px"
                   :margin-bottom "40px"}}]

    ;; Headline
    [:h1 {:style {:color "#ffffff"
                  :font-size "48px"
                  :font-weight "700"
                  :line-height "1.2"
                  :margin "0 0 20px 0"
                  :max-width "600px"}}
     "A világ első személyre szabható, tudatosságot megjelenítő tartalmaz"]

    ;; Subheadline
    [:p {:style {:color "#ffffff"
                 :font-size "20px"
                 :line-height "1.6"
                 :margin "0 0 40px 0"
                 :max-width "600px"
                 :opacity "0.95"}}
     "Fedezd fel a tudatos jelenlét erejét mindennapi gyakorlatokkal, amelyek segítenek kiegyensúlyozottabb és boldogabb életet élni."]

    ;; CTA Button
    [button/primary-button {:text "Kezdjük el!"
                            :href "#contact"}]]])
