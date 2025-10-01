(ns features.app.homepage.frontend.newsletter-request
  (:require [parquery.frontend.request :as parquery]))

(defn subscribe-to-newsletter
  "Send newsletter subscription request via ParQuery"
  [email name on-success on-error]
  (println "Subscribing to newsletter:" email name)
  (parquery/send-queries
   {:queries {:newsletter/subscribe {:email email :name name}}
    :parquery/context {}
    :callback (fn [response]
                (println "Newsletter subscription response:" response)
                (let [result (:newsletter/subscribe response)]
                  (if (:success result)
                    (on-success (:message result))
                    (on-error (or (:error result) "Unknown error occurred")))))}))
