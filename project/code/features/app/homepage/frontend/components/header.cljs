(ns features.app.homepage.frontend.components.header)

(defn header
  "Fixed header with FUMA logo"
  []
  [:header {:style {:position "fixed"
                    :top "0"
                    :left "0"
                    :right "0"
                    :z-index "1000"
                    :padding "15px 40px"}}
   [:div {:style {:max-width "1200px"
                  :margin "0 auto"
                  :display "flex"
                  :align-items "center"
                  :justify-content "space-between"}}

    ;; Logo - smaller size
    [:img {:src "/images/fuma_logo_landing_page_fejlecbe.png"
           :alt "FUMA"
           :style {:height "30px"
                   :width "auto"}}]

    ;; Navigation placeholder (for future)
    [:nav {:style {:display "flex"
                   :gap "20px"}}]]])
