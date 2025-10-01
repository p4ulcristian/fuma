(ns features.app.homepage.frontend.view
  (:require
   [features.app.homepage.frontend.components.hero :as hero]
   [features.app.homepage.frontend.components.goals-grid :as goals-grid]
   [features.app.homepage.frontend.components.target-audience :as target-audience]
   [features.app.homepage.frontend.components.benefits-grid :as benefits-grid]
   [features.app.homepage.frontend.components.contact-form :as contact-form]))

(defn view
  "FUMA landing page"
  []
  (set! (.-title js/document) "FUMA - Tudatos jelenlét mindennapi gyakorlatokkal")
  [:div {:style {:font-family "system-ui, -apple-system, sans-serif"
                 :margin "0"
                 :padding "0"}}
   [hero/hero-section]
   [goals-grid/goals-grid-section]
   [target-audience/target-audience-section]
   [benefits-grid/benefits-grid-section]
   [contact-form/contact-form-section]])
