(ns features.app.homepage.frontend.components.target-audience
  (:require
   [features.app.homepage.frontend.components.card :as card]
   [features.app.homepage.frontend.components.section-wrapper :as section]))

(def audience-data
  [{:image "/images/super_power_diakoknak.png"
    :title "Diákoknak"
    :description "Növeld a koncentrációdat és teljesítményedet a tanulásban"}
   {:image "/images/sportolokent_jobban_teljesitenel.png"
    :title "Sportolóknak"
    :description "Fejleszd a mentális fókuszodat és állóképességedet"}
   {:image "/images/szeretnel_olyan szulove_valni.png"
    :title "Szülőknek"
    :description "Találd meg az egyensúlyt és a nyugalmat a családi életben"}
   {:image "/images/tudatos_stabil_jelenlet.png"
    :title "Vezetőknek"
    :description "Erősítsd a döntéshozatali képességeidet és vezető készségeidet"}
   {:image "/images/tanarkent_edzokent_tarskent_segitenel.png"
    :title "Tanároknak"
    :description "Őrizd meg a nyugalmadat és energiádat a tanítás közben"}
   {:image "/images/tethelyzeteken_felulemelkedes.png"
    :title "Mindenkinek"
    :description "Aki szeretne boldogabb és kiegyensúlyozottabb lenni"}])

(defn target-audience-section
  "Section showing who FUMA is for"
  []
  [section/section {:background-color "#ffffff"}
   [section/section-title "Kinek szól a FÚMÁ?"]
   [section/section-subtitle "Bárhol tartasz is az életedben, a FÚMÁ segít elérni a céljaidat"]

   [:div {:style {:display "grid"
                  :grid-template-columns "repeat(auto-fit, minmax(320px, 1fr))"
                  :gap "30px"
                  :margin-top "40px"}}
    (for [audience audience-data]
      ^{:key (:title audience)}
      [card/photo-card {:image-src (:image audience)
                        :title (:title audience)
                        :description (:description audience)}])]])
