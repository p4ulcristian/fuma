(ns router.backend.middleware
  (:require
   [ring.middleware.defaults             :refer [site-defaults wrap-defaults]]
  ;;  [ring.middleware.json                 :refer [wrap-json-body]]
   [ring.middleware.params               :refer [wrap-params]]
   [ring.middleware.transit              :refer [wrap-transit-params]]
   [ring.middleware.gzip                 :refer [wrap-gzip]]
   [zero.backend.state.env :as env])
  (:import [java.util Base64]))

(defn wrap-require-authentication
  "Middleware that redirects to /login if user is not authenticated"
  [handler]
  (fn [request]
    (let [user-id (get-in request [:session :user-id])
          session (get request :session)]
      (println "DEBUG: Authentication middleware - user-id:" user-id)
      (println "DEBUG: Authentication middleware - session keys:" (keys session))
      (println "DEBUG: Authentication middleware - full session:" session)
      (if user-id
        (do
          (println "DEBUG: User authenticated, proceeding with request")
          (handler request))
        (do
          (println "DEBUG: User not authenticated, redirecting to /login")
          {:status 302
           :headers {"Location" "/login"}
           :body ""})))))

(defn decode-basic-auth
  "Decode basic authentication header"
  [auth-header]
  (when auth-header
    (when-let [[_ encoded] (re-matches #"Basic\s+(.+)" auth-header)]
      (try
        (let [decoded (String. (.decode (Base64/getDecoder) encoded))]
          (when-let [[_ username password] (re-matches #"([^:]+):(.+)" decoded)]
            [username password]))
        (catch Exception _
          nil)))))

(defn wrap-newsletter-basic-auth
  "Wrap handler with basic authentication for newsletter access"
  [handler]
  (fn [request]
    (let [auth-header (get-in request [:headers "authorization"])
          [username password] (decode-basic-auth auth-header)]
      (if (and (= username "NewFuma")
               (= password "NewFuma2025@"))
        (handler request)
        {:status 401
         :headers {"WWW-Authenticate" "Basic realm=\"Newsletter Access\""}
         :body "Unauthorized"}))))

(defn middleware []
  {:middleware [;#(wrap-reload           % {:dirs ["/source-code"]});watched-dirs})  
                #(wrap-gzip             %)
                #(wrap-transit-params   % {:opts {}})
                #(wrap-params           %)
                #(wrap-defaults         % (->
                                           site-defaults
                                           (assoc-in [:session :cookie-attrs :same-site] :lax)
                                           (assoc-in [:security :anti-forgery] (not @env/dev?))))]})




