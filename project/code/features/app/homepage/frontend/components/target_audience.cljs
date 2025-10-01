(ns features.app.homepage.frontend.components.target-audience
  (:require
   [features.app.homepage.frontend.components.card :as card]
   [features.app.homepage.frontend.components.section-wrapper :as section]))

(def audience-data
  [{:image "/images/sportolokent_jobban_teljesitenel.png"
    :title "Sportolóként jobban teljesítenél"
    :description "Használd akár koncentrációra, energetizálásra, vagy regenerációra nagyobb sportteljesítményekért!"}
   {:image "/images/super_power_diakoknak.png"
    :title "Super-POWER diákoknak!"
    :description "Sokszorozd meg tanulási képességeidet, tanulj gyorsabban és hatékonyabban, mint a társaid! A vizsgadrukk a múltté."}
   {:image "/images/szeretnel_olyan szulove_valni.png"
    :title "Szeretnél olyan szülővé válni, akinek jó a gyerekének lenni?"
    :description "Sokszorozd meg a tanulási képességeidet, tanulj gyorsabban és hatékonyabban, mint a társaid! A vizsgadrukk a múltté."}
   {:image "/images/tudatos_stabil_jelenlet.png"
    :title "Tudatos stabil jelenlét"
    :description "Ebben a mesterségesen túlpörgetett, figyelemzavaros világban egyetlen dolog hoz valódi eredményt: A FÓKUSZ."}
   {:image "/images/tudatos_vezetoi_technikak.png"
    :title "Tudatos vezetői technikák!"
    :description "Válj olyan vezetővé akit követnek!"}
   {:image "/images/tanarkent_edzokent_tarskent_segitenel.png"
    :title "Tanárként, Edzőként, Társként segítenél?"
    :description "Kutatások szerint az igazán nagy dolgok eléréséhez szükségünk van egy támogató személyre. Ha Te ilyen vagy, szuper!"}])

(defn target-audience-section
  "Section showing who FUMA is for"
  []
  [section/section {:background-color "#ffffff"}
   [section/section-title "Kinek szól a FUMA?"]
   [section/section-subtitle "Nap mint nap támogat, bárhol is tartasz az utadon. Vezetőként, szülőként, sportolóként vagy tanulóként - itt a helyed."]

   [:div {:style {:display "grid"
                  :grid-template-columns "repeat(auto-fit, minmax(320px, 1fr))"
                  :gap "30px"
                  :margin-top "40px"}}
    (for [audience audience-data]
      ^{:key (:title audience)}
      [card/audience-card {:image-src (:image audience)
                           :title (:title audience)
                           :description (:description audience)}])]])
