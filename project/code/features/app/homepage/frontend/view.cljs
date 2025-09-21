(ns features.app.homepage.frontend.view
  (:require
   [ui.link :as link]
   [ui.enhanced-button :as enhanced-button]
   [router.frontend.zero :as router]
   [translations.core :as tr]
   [zero.frontend.re-frame :as rf]))

(defn handle-language-toggle [current-language]
  "Toggle language between en and hu"
  (let [new-language (if (= current-language :en) :hu :en)]
    (rf/dispatch [:header/set-language new-language])))

(defn language-chooser
  "Language chooser component for homepage"
  []
  (let [current-language @(rf/subscribe [:header/current-language])]
    [:div {:style {:position "absolute"
                   :top "20px"
                   :right "20px"
                   :display "flex"
                   :gap "10px"}}
     [:button {:style {:padding "8px 16px"
                       :border "2px solid white"
                       :background (if (= current-language :en) "white" "transparent")
                       :color (if (= current-language :en) "#3b82f6" "white")
                       :border-radius "25px"
                       :font-weight "600"
                       :cursor "pointer"
                       :transition "all 0.2s"}
               :on-click #(when (not= current-language :en)
                           (handle-language-toggle current-language))}
      "EN"]
     [:button {:style {:padding "8px 16px"
                       :border "2px solid white"
                       :background (if (= current-language :hu) "white" "transparent")
                       :color (if (= current-language :hu) "#3b82f6" "white")
                       :border-radius "25px"
                       :font-weight "600"
                       :cursor "pointer"
                       :transition "all 0.2s"}
               :on-click #(when (not= current-language :hu)
                           (handle-language-toggle current-language))}
      "HU"]]))

(defn view []
  [:div {:style {:min-height "100vh"
                 :background "#f9fafb"
                 :display "flex"
                 :flex-direction "column"
                 :align-items "center"
                 :justify-content "center"
                 :position "relative"}}
   [language-chooser]
   [:div {:style {:max-width "600px"
                  :margin "0 auto"
                  :padding "2rem"
                  :text-align "center"}}
    [:div {:style {:display "flex"
                   :flex-direction "column"
                   :align-items "center"
                   :justify-content "center"
                   :margin-bottom "3rem"}}
     [:div {:style {:width "200px"
                    :height "200px"
                    :border-radius "50%"
                    :background "#fff"
                    :display "flex"
                    :align-items "center"
                    :justify-content "center"
                    :margin-bottom "2rem"
                    :box-shadow "0 10px 25px rgba(0, 0, 0, 0.1)"
                    :border "4px solid #3b82f6"
                    :overflow "hidden"}}
      [:img {:src "/logo/logo-256.webp"
             :alt "Color Me Crazy Logo"
             :style {:width "180px"
                     :height "180px"
                     :object-fit "cover"
                     :border-radius "50%"}}]]
     [:h1 {:style {:font-size "3.5rem"
                   :font-weight "700"
                   :color "#1f2937"
                   :margin "0 0 1rem 0"
                   :font-family "'Dancing Script', cursive"
                   :letter-spacing "0px"}}
      (tr/tr :homepage/title)]
     [:h2 {:style {:font-size "1.25rem"
                   :color "#6b7280"
                   :font-weight "400"
                   :margin "0"}}
      (tr/tr :homepage/subtitle)]]
    [:p {:style {:font-size "1.125rem"
                 :color "#4b5563"
                 :line-height "1.6"
                 :max-width "500px"
                 :margin "0 auto 2rem auto"}}
     (tr/tr :homepage/description)]
    [:div {:style {:margin-top "2rem"}}
     [:a {:href "/login"
          :style {:display "inline-block"
                  :padding "12px 24px"
                  :background "#3b82f6"
                  :color "white"
                  :text-decoration "none"
                  :border-radius "8px"
                  :font-weight "600"
                  :font-size "1.125rem"
                  :transition "background-color 0.2s"}}
      (tr/tr :homepage/contact-button)]]]])