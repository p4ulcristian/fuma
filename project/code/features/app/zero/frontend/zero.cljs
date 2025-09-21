(ns features.app.zero.frontend.zero
  (:require
   [features.app.homepage.routes :as homepage-routes]
   [features.app.the-team.routes :as the-team-routes]
   [features.app.pricing.routes :as pricing-routes]
   [features.app.login.routes :as login-routes]
   [router.frontend.zero :as router]
   [zero.frontend.re-frame-viewer.view :as re-frame-viewer]
   [ui.header :as header]))

(def routes (concat homepage-routes/routes
                    the-team-routes/routes
                    pricing-routes/routes
                    login-routes/routes))

(defn view []
  (let [router-data (:data @router/state)
        current-path (:path @router/state)
        show-header? (not= current-path "/login")]
    [:div
     (when show-header?
       [header/view])
     [(:view router-data)]
     [re-frame-viewer/re-frame-viewer]
     [re-frame-viewer/keyboard-listener]]))
