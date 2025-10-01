(ns features.app.homepage.frontend.components.card)

(defn photo-card
  "Card with image and text overlay"
  [{:keys [image-src title description]}]
  [:div {:style {:position "relative"
                 :border-radius "20px"
                 :overflow "hidden"
                 :box-shadow "0 8px 20px rgba(0, 0, 0, 0.1)"
                 :transition "transform 0.3s ease"
                 :cursor "pointer"
                 :min-height "450px"
                 :display "flex"
                 :flex-direction "column"}}
   [:img {:src image-src
          :alt title
          :style {:width "100%"
                  :height "auto"
                  :display "block"}}]
   [:div {:style {:position "absolute"
                  :bottom "0"
                  :left "0"
                  :right "0"
                  :background "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)"
                  :padding "20px"
                  :color "#ffffff"}}
    [:h3 {:style {:margin "0 0 8px 0"
                  :font-size "20px"
                  :font-weight "600"
                  :max-width "200px"
                  :line-height "1.3"}}
     title]
    (when description
      [:p {:style {:margin "0"
                   :font-size "14px"
                   :opacity "0.9"}}
       description])]])

(defn feature-card
  "Card for features with icon and text"
  [{:keys [image-src title description]}]
  [:div {:style {:padding "30px"
                 :text-align "center"}}
   [:img {:src image-src
          :alt title
          :style {:width "120px"
                  :margin-bottom "20px"}}]
   [:h3 {:style {:margin "0 0 12px 0"
                 :font-size "22px"
                 :font-weight "600"
                 :color "#2D2D2D"}}
    title]
   [:p {:style {:margin "0"
                :font-size "16px"
                :line-height "1.6"
                :color "#666666"}}
    description]])

(defn audience-card
  "Card with rounded image and title below"
  [{:keys [image-src title description]}]
  [:div {:style {:display "flex"
                 :flex-direction "column"
                 :cursor "pointer"
                 :transition "transform 0.3s ease"}}
   [:img {:src image-src
          :alt title
          :style {:width "100%"
                  :height "auto"
                  :border-radius "20px"
                  :display "block"}}]
   [:h3 {:style {:margin "20px 0 8px 0"
                 :font-size "20px"
                 :font-weight "600"
                 :color "#2D2D2D"}}
    title]
   (when description
     [:p {:style {:margin "0"
                  :font-size "16px"
                  :line-height "1.6"
                  :color "#666666"}}
      description])])
