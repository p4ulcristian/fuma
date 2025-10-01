(ns features.app.homepage.frontend.components.header)

(defn header
  "Header with FUMA logo"
  []
  [:header {:style {:position "relative"
                    :padding "0"}}
   [:div {:style {:max-width "1200px"
                  :margin "0 auto"
                  :display "flex"
                  :align-items "center"
                  :justify-content "space-between"}}

    ;; Logo - smaller size
    [:img {:src "/images/fuma_logo_landing_page_fejlecbe.png"
           :alt "FUMA"
           :style {:height "150px"
                   :width "auto"}}]

    ;; Navigation placeholder (for future)
    [:nav {:style {:display "flex"
                   :gap "20px"}}]]])
