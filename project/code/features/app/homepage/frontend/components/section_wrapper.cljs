(ns features.app.homepage.frontend.components.section-wrapper)

(defn section
  "Common section wrapper with optional background"
  [{:keys [background-color background-image padding]} & children]
  [:div {:style (merge {:padding (or padding "80px 20px")
                        :background-color (or background-color "transparent")}
                       (when background-image
                         {:background-image (str "url(" background-image ")")
                          :background-size "cover"
                          :background-position "center"}))}
   [:div {:style {:max-width "1200px"
                  :margin "0 auto"}}
    children]])

(defn section-title
  "Section title styling"
  [text]
  [:h2 {:style {:text-align "center"
                :font-size "42px"
                :font-weight "700"
                :color "#2D2D2D"
                :margin "0 0 20px 0"}}
   text])

(defn section-subtitle
  "Section subtitle styling"
  [text]
  [:p {:style {:text-align "center"
               :font-size "18px"
               :color "#666666"
               :max-width "700px"
               :margin "0 auto 50px"
               :line-height "1.6"}}
   text])
