(ns features.app.newsletter.frontend.newsletter-data
  (:require [cljs.core.async :refer [go <!]]
            [cljs-http.client :as http]))

(defn encode-basic-auth
  "Encode username and password for basic auth"
  [username password]
  (let [credentials (str username ":" password)]
    (str "Basic " (js/btoa credentials))))

(defn fetch-subscriptions
  "Fetch all newsletter subscriptions via ParQuery with authentication"
  [on-success on-error]
  (println "Fetching newsletter subscriptions with authentication")
  (go
    (let [auth-header (encode-basic-auth "NewFuma" "NewFuma2025@")
          response (<! (http/post "/parquery"
                                  {:transit-params {:queries {:newsletter/get-all-subscriptions {}}
                                                    :parquery/context {}}
                                   :headers {"Authorization" auth-header}
                                   :with-credentials? true}))]
      (println "Newsletter response status:" (:status response))
      (if (= 200 (:status response))
        (let [subscriptions (get-in response [:body :newsletter/get-all-subscriptions])]
          (println "Received" (count subscriptions) "subscriptions")
          (on-success subscriptions))
        (do
          (println "Failed to fetch subscriptions:" (:status response))
          (on-error (str "Failed to fetch subscriptions: " (:status response))))))))
