(ns features.app.homepage.frontend.components.goals-grid
  (:require
   [features.app.homepage.frontend.components.card :as card]
   [features.app.homepage.frontend.components.section-wrapper :as section]))

(def goals-data
  [{:image "/images/kiegensulyozott_parkapcsolat.png"
    :title "Kiegyensúlyozott párkapcsolat"}
   {:image "/images/egeszseg_es_vitalitas.png"
    :title "Egészség és vitalitás"} 
   {:image "/images/tethelyzeteken_felulemelkedes.png"
    :title "Téthelyzeteken való felülemelkedés"}
   {:image "/images/penz_es_anyagi_biztonsag.png"
    :title "Pénz és anyagi biztonság"}
   {:image "/images/harmonikus_szulo_gyerek_kapcsolat.png"
    :title "Harmonikus szülő-gyerek kapcsolat"} 
   {:image "/images/onbizalom_es_kitartas.png"
    :title "Önbizalom és kitartás"}])

(defn goals-grid-section
  "Section showing life areas that can be improved"
  []
  [section/section {:background-color "#F8F7FF"}
   [section/section-title "Mit érhetsz a FUMA-val?"]
   [section/section-subtitle "az olimpikonok és profi sportolók és üzletemberek módszereivel"]

   [:div {:style {:display "grid"
                  :grid-template-columns "repeat(auto-fit, minmax(320px, 1fr))"
                  :gap "30px"
                  :margin-top "40px"}}
    (for [goal goals-data]
      ^{:key (:title goal)}
      [card/photo-card {:image-src (:image goal)
                        :title (:title goal)}])]])
