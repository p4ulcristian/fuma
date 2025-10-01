(ns features.app.homepage.frontend.components.benefits-grid
  (:require
   [features.app.homepage.frontend.components.card :as card]
   [features.app.homepage.frontend.components.section-wrapper :as section]))

(def benefits-data
  [{:image "/images/tudomanyos_alapokon_nyugvo_grafika.png"
    :title "Tudományos alapokon nyugvó"
    :description "Bizonyítottan hatékony módszerek a neurotudományból"}
   {:image "/images/merheto_eredmenyek_grafika.png"
    :title "Mérhető eredmények"
    :description "Követheted a fejlődésedet és az eredményeidet"}
   {:image "/images/szemelyre_szabhatosag_grafika.png"
    :title "Személyre szabhatóság"
    :description "Minden gyakorlat a Te egyéni igényeidre szabott"}
   {:image "/images/modosult_tudatallapotban_torteno_grafika.png"
    :title "Módosult tudatállapot"
    :description "Elmélyült relaxáció és fokozott tudatosság"}
   {:image "/images/napi_15_20_perc_grafika.png"
    :title "Napi 15-20 perc"
    :description "Könnyen beilleszthető a napi rutinodba"}
   {:image "/images/konnyed_pihenteto_gyakorlatok.png"
    :title "Könnyed, pihentetó gyakorlatok"
    :description "Nem kell yogázni vagy extrém dolgokat csinálni"}])

(defn benefits-grid-section
  "Section showing benefits and features"
  []
  [section/section {:background-color "#F8F7FF"}
   [section/section-title "Szeretnél még ezt az egyedülálló fejlesztőt?"]
   [section/section-subtitle "A FÚMÁ minden aspektusa arra lett tervezve, hogy könnyedén beilleszthető legyen az életedbe"]

   [:div {:style {:display "grid"
                  :grid-template-columns "repeat(auto-fit, minmax(320px, 1fr))"
                  :gap "30px"
                  :margin-top "40px"}}
    (for [benefit benefits-data]
      ^{:key (:title benefit)}
      [card/feature-card {:image-src (:image benefit)
                          :title (:title benefit)
                          :description (:description benefit)}])]])
