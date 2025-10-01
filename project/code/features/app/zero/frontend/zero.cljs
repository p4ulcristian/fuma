(ns features.app.zero.frontend.zero
  (:require
   [features.app.homepage.routes :as homepage-routes]
   [router.frontend.zero :as router]
   [zero.frontend.re-frame-viewer.view :as re-frame-viewer]
   ))

(def routes (concat homepage-routes/routes
                    ))

(defn view []
  (let [router-data (:data @router/state)]
    [:div 
     [(:view router-data)]
     [re-frame-viewer/re-frame-viewer]
     [re-frame-viewer/keyboard-listener]]))
