(ns features.app.homepage.frontend.components.button)

(defn primary-button
  "Primary CTA button with purple gradient"
  [{:keys [text on-click href]}]
  (let [base-style {:background "linear-gradient(135deg, #5B4EC4 0%, #8B7FD8 100%)"
                    :color "#ffffff"
                    :padding "16px 32px"
                    :border "none"
                    :border-radius "30px"
                    :font-size "18px"
                    :font-weight "600"
                    :cursor "pointer"
                    :text-decoration "none"
                    :display "inline-block"
                    :transition "all 0.3s ease"
                    :box-shadow "0 4px 15px rgba(91, 78, 196, 0.3)"}]
    (if href
      [:a {:href href
           :style base-style}
       text]
      [:button {:on-click on-click
                :style base-style}
       text])))
