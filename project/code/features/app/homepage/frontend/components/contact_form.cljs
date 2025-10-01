(ns features.app.homepage.frontend.components.contact-form
  (:require
   [reagent.core :as r]
   [clojure.string :as str]
   [features.app.homepage.frontend.components.button :as button]
   [features.app.homepage.frontend.newsletter-request :as newsletter]))

(defn contact-form-section
  "Contact form section with background image"
  []
  (let [name-input (r/atom "")
        email-input (r/atom "")
        status (r/atom nil) ; nil, :loading, :success, :error
        error-message (r/atom "")

        handle-submit (fn [e]
                        (.preventDefault e)
                        (let [name-val @name-input
                              email-val @email-input]
                          (cond
                            (str/blank? name-val)
                            (do
                              (reset! status :error)
                              (reset! error-message "Kérlek add meg a neved!"))

                            (str/blank? email-val)
                            (do
                              (reset! status :error)
                              (reset! error-message "Kérlek add meg az email címedet!"))

                            :else
                            (do
                              (reset! status :loading)
                              (reset! error-message "")
                              (newsletter/subscribe-to-newsletter
                               email-val
                               name-val
                               (fn [_success-msg]
                                 (reset! status :success)
                                 (reset! name-input "")
                                 (reset! email-input ""))
                               (fn [error-msg]
                                 (reset! status :error)
                                 (reset! error-message error-msg)))))))]
    (fn []
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

   [:div {:style {:max-width "1200px"
                  :margin "0 auto"
                  :position "relative"
                  :z-index "10"
                  :padding "0 20px"}}

    [:div {:style {:max-width "600px"}}

     [:h2 {:style {:color "#ffffff"
                   :font-size "42px"
                   :font-weight "700"
                   :text-align "left"
                   :margin "0 0 20px 0"}}
      "Iratkozz fel ma!"]

     [:p {:style {:color "#ffffff"
                  :font-size "18px"
                  :text-align "left"
                  :margin "0 0 40px 0"
                  :opacity "0.95"}}
      "Hagyd itt az email címedet, és értesítünk, amikor elérhető lesz a FUMA!"]

     ;; Form
     [:form {:on-submit handle-submit
             :style {:display "flex"
                     :flex-direction "column"
                     :gap "20px"}}

      [:input {:type "text"
               :placeholder "Neved"
               :value @name-input
               :on-change #(reset! name-input (-> % .-target .-value))
               :disabled (= @status :loading)
               :style {:padding "16px 20px"
                       :border "none"
                       :border-radius "10px"
                       :font-size "16px"
                       :background "#ffffff"
                       :opacity (if (= @status :loading) "0.6" "1")}}]

      [:input {:type "email"
               :placeholder "Email címed"
               :value @email-input
               :on-change #(reset! email-input (-> % .-target .-value))
               :disabled (= @status :loading)
               :style {:padding "16px 20px"
                       :border "none"
                       :border-radius "10px"
                       :font-size "16px"
                       :background "#ffffff"
                       :opacity (if (= @status :loading) "0.6" "1")}}]

      ;; Status messages
      (when (= @status :success)
        [:p {:style {:color "#ffffff"
                     :background "rgba(76, 175, 80, 0.9)"
                     :padding "12px 20px"
                     :border-radius "8px"
                     :margin "0"
                     :font-weight "500"}}
         "✓ Sikeres feliratkozás! Hamarosan jelentkezünk!"])

      (when (= @status :error)
        [:p {:style {:color "#ffffff"
                     :background "rgba(244, 67, 54, 0.9)"
                     :padding "12px 20px"
                     :border-radius "8px"
                     :margin "0"
                     :font-weight "500"}}
         (str "✗ " @error-message)])

      [:div {:style {:text-align "left"
                     :margin-top "10px"}}
       [button/primary-button {:text (if (= @status :loading)
                                       "Küldés..."
                                       "Feliratkozom!")
                               :on-click handle-submit}]]]]]])))
