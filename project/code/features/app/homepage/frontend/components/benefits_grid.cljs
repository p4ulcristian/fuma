(ns features.app.homepage.frontend.components.benefits-grid
  (:require
   [features.app.homepage.frontend.components.card :as card]
   [features.app.homepage.frontend.components.section-wrapper :as section]))

(def benefits-data
  [{:image "/images/tudomanyos_alapokon_nyugvo_grafika.png"
    :title "Tudományos alapokon nyugvó erőteljes szuggesziók"
    :description "Profi sportolók, csúcsteljesítményre képes vezetők szakpszichológusok által kidolgozott hatékony
                  mondatait használhatod!"}
   
   {:image "/images/modosult_tudatallapotban_torteno_grafika.png"
    :title "Naponta végezhető könnyed pihentető gyakorlatok"
    :description "a rendszeresség és a rövid időtartam támogatja a szokásformálást."}
   {:image "/images/napi_15_20_perc_grafika.png"
    :title "Napi 15-20 perc"
    :description "és automatikusan megteremtők, érkeznek az eredmények"} 
   {:image "/images/szemelyre_szabhatosag_grafika.png"
    :title "A világon egyedülálló személyre szabhatóság"
    :description "Többszáz professzionálisan kidolgozott megerősítésből állíthatod össze a saját meditációdat!"}
   {:image "/images/konnyed_pihenteto_gyakorlatok.png"
    :title "Márhető, érezhető eredmények"
    :description "céges és egyéni felhasználóknál is kimutatható változás koncentrációban, stresszkezelésben,
                        motivációban."}
   
   {:image "/images/merheto_eredmenyek_grafika.png"
    :title "Módusult tudatállapotban történő programozása a tudatalattinak"
    :description "relaxált állapotban fokozott a befogadás, ìgy mélyebben rögzülnek az üzenetek."}
   ])

(defn benefits-grid-section
  "Section showing benefits and features"
  []
  [section/section {:background-color "#F8F7FF"}
   [section/section-title 
    "Szerezd meg ezt az egyedülálló fejlesztést, és érj el érezhető eredménzeket rekord idő alatt!"]
   [section/section-subtitle "Ha céljaid vannak, érd el gyorsabban!"]

   [:div {:style {:display "grid"
                  :grid-template-columns "repeat(auto-fit, minmax(320px, 1fr))"
                  :gap "30px"
                  :margin-top "120px"}}
    (for [benefit benefits-data]
      ^{:key (:title benefit)}
      [card/feature-card {:image-src (:image benefit)
                          :title (:title benefit)
                          :description (:description benefit)}])]])
