(ns app.backend.main
  (:gen-class)
  (:require
   [features.app.zero.backend.zero :as site]
   [zero.backend.state.env :as env]
   [zero.backend.zero :as zero]
   [parquery.routes :as parquery.routes]))

(def routes
  (concat
   parquery.routes/routes
   site/routes))

(defn -main [& _args]
  ;; Start server
  (zero/start-server
   {:routes     routes
    :port       @env/port}))
