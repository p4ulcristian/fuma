(ns features.app.newsletter.frontend.newsletter-data
  (:require [parquery.frontend.request :as parquery]))

(defn fetch-subscriptions
  "Fetch all newsletter subscriptions via ParQuery"
  [on-success on-error]
  (println "Fetching newsletter subscriptions from backend")
  (parquery/send-queries
   {:queries {:newsletter/get-all-subscriptions {}}
    :parquery/context {}
    :callback (fn [response]
                (println "Newsletter subscriptions response:" response)
                (let [subscriptions (:newsletter/get-all-subscriptions response)]
                  (if subscriptions
                    (on-success subscriptions)
                    (on-error "Failed to fetch subscriptions"))))}))
