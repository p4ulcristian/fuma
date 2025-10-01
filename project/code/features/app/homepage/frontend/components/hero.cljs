(ns features.app.homepage.frontend.components.hero
  (:require
   [features.app.homepage.frontend.components.button :as button]))

(defn hero-section
  "Main hero section with headline and CTA"
  []
  [:div {:style {:background "#7B75E8"
                 :min-height "100vh"
                 :display "flex"
                 :flex-direction "column"
                 :position "relative"
                 :overflow "hidden"
                 :padding "0"}}
   [:div {:class "hero-wrapper"}

    ;; Header with logo - relative positioned
    [:header {:style {:position "relative"
                      :width "100%"
                      :z-index "100"
                      :padding "0"}}
     [:div {:style {:max-width "1200px"
                    :margin "0 auto"
                    :display "flex"
                    :align-items "center"
                    :justify-content "space-between"
                    :padding "0 20px"}}
      [:img {:src "/images/fuma_logo_landing_page_fejlecbe.png"
             :alt "FUMA"
             :class "hero-logo"}]]]

    ;; Background illustration
    [:img {:src "/images/fejleckep.png"
           :alt "FUMA meditation illustration"
           :class "hero-background"}]

    ;; Content container
    [:div {:class "hero-content"}

     ;; Headline
     [:h1 {:class "hero-headline"}
      "A világ első személyre
szabható, többszáz
megerősítést tartalmazó
applikációja"]

     ;; Subheadline
     [:p {:class "hero-subheadline"}
      "Programozd hatékonyan a tudatalattidat az olimpikonok módszerével és érj el érezhető eredményeket a lehető leggyorsabban!"]

     ;; CTA Button
     [button/primary-button {:text "Feliratkozom"
                             :href "#contact"}]]]])
