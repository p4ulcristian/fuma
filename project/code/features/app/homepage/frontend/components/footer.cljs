(ns features.app.homepage.frontend.components.footer)

(defn footer-section
  "Footer with links and contact information"
  []
  [:footer {:style {:background "#2D2D2D"
                    :color "#ffffff"
                    :padding "60px 20px 30px"}}
   [:div {:style {:max-width "1200px"
                  :margin "0 auto"}}

    [:div {:style {:display "grid"
                   :grid-template-columns "repeat(auto-fit, minmax(250px, 1fr))"
                   :gap "40px"
                   :margin-bottom "40px"}}

     ;; Logo and description
     [:div
      [:img {:src "/images/logo_szimbolum_fejlec_alatt.png"
             :alt "FUMA"
             :style {:width "60px"
                     :margin-bottom "20px"}}]
      [:p {:style {:font-size "16px"
                   :line-height "1.6"
                   :opacity "0.8"}}
       "Személyre szabható tudatosság fejlesztő platform mindenkinek."]]

     ;; Kapcsolat
     [:div
      [:h3 {:style {:font-size "20px"
                    :font-weight "600"
                    :margin "0 0 20px 0"}}
       "Kapcsolat"]
      [:p {:style {:font-size "16px"
                   :opacity "0.8"
                   :margin "0 0 10px 0"}}
       "Email: info@fuma.hu"]
      [:p {:style {:font-size "16px"
                   :opacity "0.8"
                   :margin "0"}}
       "Tel: +36 XX XXX XXXX"]]

     ;; Linkek
     [:div
      [:h3 {:style {:font-size "20px"
                    :font-weight "600"
                    :margin "0 0 20px 0"}}
       "Hasznos linkek"]
      [:ul {:style {:list-style "none"
                    :padding "0"
                    :margin "0"}}
       [:li {:style {:margin-bottom "10px"}}
        [:a {:href "#"
             :style {:color "#ffffff"
                     :text-decoration "none"
                     :opacity "0.8"
                     :font-size "16px"}}
         "Rólunk"]]
       [:li {:style {:margin-bottom "10px"}}
        [:a {:href "#"
             :style {:color "#ffffff"
                     :text-decoration "none"
                     :opacity "0.8"
                     :font-size "16px"}}
         "Adatvédelem"]]
       [:li
        [:a {:href "#"
             :style {:color "#ffffff"
                     :text-decoration "none"
                     :opacity "0.8"
                     :font-size "16px"}}
         "Felhasználási feltételek"]]]]]

    ;; Copyright
    [:div {:style {:text-align "center"
                   :padding-top "30px"
                   :border-top "1px solid rgba(255, 255, 255, 0.1)"}}
     [:p {:style {:margin "0"
                  :font-size "14px"
                  :opacity "0.6"}}
      "© 2025 FUMA. Minden jog fenntartva."]]]])
