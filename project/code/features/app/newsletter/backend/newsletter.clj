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

(defn check-newsletter-auth
  "Check if request has valid newsletter authentication"
  [request]
  (let [auth-header (get-in request [:headers "authorization"])]
    (when auth-header
      (when-let [[_ encoded] (re-matches #"Basic\s+(.+)" auth-header)]
        (try
          (let [decoded (String. (.decode (java.util.Base64/getDecoder) encoded))]
            (when-let [[_ username password] (re-matches #"([^:]+):(.+)" decoded)]
              (and (= username "NewFuma")
                   (= password "NewFuma2025@"))))
          (catch Exception _
            false))))))

(defn get-all-subscriptions
  "Get all newsletter subscriptions - ParQuery handler with authentication"
  [{:parquery/keys [context request] :as params}]
  (println "Newsletter subscriptions request - checking authentication")
  (if (check-newsletter-auth request)
    (do
      (println "Authentication successful - fetching subscriptions")
      (let [subscriptions (read-subscriptions)]
        (mapv (fn [[email name]]
                {:newsletter/email email
                 :newsletter/name name})
              subscriptions)))
    (do
      (println "Authentication failed - access denied")
      {:error "Unauthorized - Newsletter access requires authentication"
       :status 401})))
