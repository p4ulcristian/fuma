(ns parquery.backend.config
  (:require
   [users.backend.resolvers :as users]
   [users.backend.db :as user-db]
   [features.app.homepage.backend.newsletter :as newsletter]
   [features.app.newsletter.backend.newsletter :as newsletter-backend]
   [cheshire.core]))

;; Error handling helpers
(defn parse-db-error
  "Convert database error messages to user-friendly messages"
  [error-message]
  (cond
    (and error-message (.contains error-message "users_username_idx"))
    "Username already exists"

    (and error-message (.contains error-message "users_email_idx"))
    "Email already exists"

    :else "An error occurred"))

;; Role checking helpers
(defn has-admin-role?
  "Check if user has admin role or higher"
  [request]
  (let [user-role (get-in request [:session :user-role])]
    (contains? #{"admin" "superadmin"} user-role)))

;; User handlers
(defn get-current-user
  "Get current user from session"
  [{:parquery/keys [context request] :as params}]
  (if-let [user-id (get-in request [:session :user-id])]
    (try
      (let [user (first (user-db/get-user-by-id user-id))]
        (when user
          {:user/id (str (:id user))
           :user/username (:username user)
           :user/full-name (:full_name user)
           :user/email (:email user)
           :user/phone (:phone user)
           :user/role (:role user)
           :user/active (:active user)
           :user/workspace-id (when (:workspace_id user) (str (:workspace_id user)))}))
      (catch Exception e
        (println "Error fetching current user:" (.getMessage e))
        nil))
    nil))

;; Query mappings to functions
(def read-queries
  "Read operations - mapped to handler functions"
  {:user/current #'get-current-user
   :newsletter/get-all-subscriptions #'newsletter-backend/get-all-subscriptions})

(def write-queries
  "Write operations - mapped to handler functions"
  {:newsletter/subscribe #'newsletter/subscribe-newsletter})

(defn get-query-type
  "Returns query type based on config"
  [query-key]
  (cond
    (contains? read-queries query-key) :read
    (contains? write-queries query-key) :write
    (= "parquery" (namespace query-key)) :parquery
    :else :unknown))

(defn get-query-handler
  "Returns the handler function for a query"
  [query-key]
  (or (get read-queries query-key)
      (get write-queries query-key)))