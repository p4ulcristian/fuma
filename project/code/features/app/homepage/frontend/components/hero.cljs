(ns features.app.homepage.frontend.components.hero
  (:require
   [features.app.homepage.frontend.components.button :as button]))

(defn hero-section
  "Main hero section with headline and CTA"
  []
  [:div {:style {:background "#7B75E8"
                 :min-height "100vh"
                 :display "flex"
                 :align-items "center"
                 :justify-content "center"
                 :position "relative"
                 :overflow "hidden"
                 :padding "0 20px 40px 20px"}}

   ;; Background illustration
   [:img {:src "/images/fejleckep.png"
          :alt "FUMA meditation illustration"
          :style {:position "absolute"
                  :right "0"
                  :top "0"
                  :height "100%"
                  :width "auto"
                  :object-fit "cover"
                  :object-position "70% top"
                  :opacity "0.95"}}]

   ;; Content container
   [:div {:style {:max-width "1200px"
                  :width "100%"
                  :display "flex"
                  :flex-direction "column"
                  :align-items "flex-start"
                  :z-index "10"
                  :padding-left "5%"}}

    ;; Headline
    [:h1 {:style {:color "#ffffff"
                  :font-size "48px"
                  :font-weight "700"
                  :line-height "1.2"
                  :margin "0 0 20px 0"
                  :max-width "600px"}}
     "A világ elsö személyre
szabható, többszáz
megerösítést tartalmazó
applikációja"]

    ;; Subheadline
    [:p {:style {:color "#ffffff"
                 :font-size "20px"
                 :line-height "1.6"
                 :margin "0 0 40px 0"
                 :max-width "600px"
                 :opacity "0.95"}}
     "Programozd hatékonyan a tudatalattidat az olimpikonok módszerével és érj el érezhető eredményeket a lehető leggyorsabban!"]

    ;; CTA Button
    [button/primary-button {:text "Kezdjük el!"
                            :href "#contact"}]]])
