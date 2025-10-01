(ns features.app.homepage.frontend.components.contact-form
  (:require
   [features.app.homepage.frontend.components.button :as button]))

(defn contact-form-section
  "Contact form section with background image"
  []
  [:div {:id "contact"
         :style {:background-image "url(/images/form_hatterkep.png)"
                 :background-size "cover"
                 :background-position "center"
                 :padding "100px 20px"
                 :position "relative"}}

   ;; Overlay for better text readability
   [:div {:style {:position "absolute"
                  :top "0"
                  :left "0"
                  :right "0"
                  :bottom "0"
                  :background "linear-gradient(135deg, rgba(91, 78, 196, 0.9) 0%, rgba(139, 127, 216, 0.9) 100%)"}}]

   [:div {:style {:max-width "600px"
                  :margin "0 auto"
                  :position "relative"
                  :z-index "10"}}

    [:h2 {:style {:color "#ffffff"
                  :font-size "42px"
                  :font-weight "700"
                  :text-align "center"
                  :margin "0 0 20px 0"}}
     "Indítsd el még ma a fejlődést!"]

    [:p {:style {:color "#ffffff"
                 :font-size "18px"
                 :text-align "center"
                 :margin "0 0 40px 0"
                 :opacity "0.95"}}
     "Hagyd itt az email címedet, és értesítünk, amikor elérhető lesz a FÚMÁ!"]

    ;; Form
    [:form {:style {:display "flex"
                    :flex-direction "column"
                    :gap "20px"}}

     [:input {:type "text"
              :placeholder "Neved"
              :style {:padding "16px 20px"
                      :border "none"
                      :border-radius "10px"
                      :font-size "16px"
                      :background "#ffffff"}}]

     [:input {:type "email"
              :placeholder "Email címed"
              :style {:padding "16px 20px"
                      :border "none"
                      :border-radius "10px"
                      :font-size "16px"
                      :background "#ffffff"}}]

     [:textarea {:placeholder "Üzeneted (opcionális)"
                 :rows "4"
                 :style {:padding "16px 20px"
                         :border "none"
                         :border-radius "10px"
                         :font-size "16px"
                         :background "#ffffff"
                         :resize "vertical"}}]

     [:div {:style {:text-align "center"
                    :margin-top "10px"}}
      [button/primary-button {:text "Feliratkozom!"
                              :on-click #(println "Form submitted")}]]]]])
