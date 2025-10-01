(ns features.app.newsletter.backend.newsletter
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]))

(def newsletter-file
  "Newsletter subscriptions file path - uses Railway volume in production, local data dir in dev"
  (let [railway-path "/data/newsletter_subscriptions.edn"
        local-path "data/newsletter_subscriptions.edn"]
    (if (.exists (io/file "/data"))
      railway-path
      local-path)))

(defn read-subscriptions
  "Read subscriptions from EDN file, return empty vector if file doesn't exist"
  []
  (try
    (if (.exists (io/file newsletter-file))
      (edn/read-string (slurp newsletter-file))
      [])
    (catch Exception e
      (println "Error reading newsletter subscriptions:" (.getMessage e))
      [])))

(defn get-all-subscriptions
  "Get all newsletter subscriptions - ParQuery handler"
  [{:parquery/keys [context request] :as params}]
  (println "Fetching all newsletter subscriptions")
  (let [subscriptions (read-subscriptions)]
    (mapv (fn [[email name]]
            {:newsletter/email email
             :newsletter/name name})
          subscriptions)))
