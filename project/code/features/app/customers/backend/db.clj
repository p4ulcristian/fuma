(ns features.app.customers.backend.db
  (:require [zero.backend.state.postgres :as postgres]
            [clojure.string :as str]))

(defn- normalize-hungarian
  "Normalize Hungarian characters for search - convert accented chars to base chars"
  [text]
  (when text
    (-> text
        (str/replace #"[áÁ]" "a")
        (str/replace #"[éÉ]" "e") 
        (str/replace #"[íÍ]" "i")
        (str/replace #"[óÓöÖőŐ]" "o")
        (str/replace #"[úÚüÜűŰ]" "u")
        (str/lower-case))))

(defn get-customers-by-workspace
  "Get all customers for a workspace"
  [workspace-id]
  (postgres/execute-sql 
   "SELECT * FROM expert_lift.customers 
    WHERE workspace_id = $1 
    ORDER BY name"
   {:params [workspace-id]}))

(defn get-customers-paginated
  "Get customers with server-side filtering, sorting, and pagination"
  [workspace-id {:keys [search sort-by sort-direction page page-size]
                 :or {sort-by "name" sort-direction "asc" page 0 page-size 10}}]
  (let [offset (* page page-size)
        has-search? (and search (not (str/blank? search)))
        search-condition (if has-search?
                          "AND (LOWER(name) LIKE $2 OR LOWER(email) LIKE $2 OR LOWER(contact_person) LIKE $2)"
                          "")
        search-param (when has-search? (str "%" (str/lower-case (str search)) "%"))
        order-direction (if (= sort-direction "desc") "DESC" "ASC")
        
        ;; Map frontend column names to database columns
        db-column (case sort-by
                    "customer/name" "name"
                    "customer/email" "email" 
                    "customer/contact-person" "contact_person"
                    "customer/phone" "phone"
                    "name")
        
        ;; Build the query parameters correctly
        params (if has-search? 
                [workspace-id search-param page-size offset]
                [workspace-id page-size offset])
        
        query (str "SELECT * FROM expert_lift.customers 
                   WHERE workspace_id = $1 " 
                   search-condition
                   " ORDER BY " db-column " " order-direction
                   " LIMIT $" (if has-search? "3" "2")
                   " OFFSET $" (if has-search? "4" "3"))
        
        count-query (str "SELECT COUNT(*) as total FROM expert_lift.customers 
                         WHERE workspace_id = $1 " 
                         search-condition)
        count-params (if has-search? [workspace-id search-param] [workspace-id])]
    
    (println "DEBUG get-customers-paginated:")
    (println "  Query:" query)
    (println "  Params:" params)
    (println "  Count query:" count-query)
    (println "  Count params:" count-params)
    
    (let [customers (postgres/execute-sql query {:params params})
          total-count (:total (first (postgres/execute-sql count-query {:params count-params})))]
      
      (println "DEBUG Results:")
      (println "  Found" (count customers) "customers")
      (println "  Total count:" total-count)
      
      {:customers customers
       :total-count total-count
       :page page
       :page-size page-size
       :total-pages (Math/ceil (/ total-count page-size))})))

(defn get-customer-by-id
  "Get customer by ID (within workspace)"
  [customer-id workspace-id]
  (postgres/execute-sql 
   "SELECT * FROM expert_lift.customers 
    WHERE id = $1 AND workspace_id = $2"
   {:params [customer-id workspace-id]}))

(defn create-customer
  "Create new customer in workspace"
  [workspace-id name email phone contact-person notes]
  (postgres/execute-sql 
   "INSERT INTO expert_lift.customers (workspace_id, name, email, phone, contact_person, notes) 
    VALUES ($1, $2, $3, $4, $5, $6) 
    RETURNING *"
   {:params [workspace-id name email phone contact-person notes]}))

(defn update-customer
  "Update existing customer (within workspace)"
  [customer-id workspace-id name email phone contact-person notes active]
  (postgres/execute-sql 
   "UPDATE expert_lift.customers 
    SET name = $1, email = $2, phone = $3, contact_person = $4, notes = $5, active = $6, updated_at = NOW()
    WHERE id = $7 AND workspace_id = $8
    RETURNING *"
   {:params [name email phone contact-person notes active customer-id workspace-id]}))

(defn delete-customer
  "Delete customer (within workspace)"
  [customer-id workspace-id]
  (postgres/execute-sql 
   "DELETE FROM expert_lift.customers 
    WHERE id = $1 AND workspace_id = $2
    RETURNING id"
   {:params [customer-id workspace-id]}))

(defn search-customers-for-dropdown
  "Search customers for dropdown - returns simplified data for UI"
  [workspace-id search-term limit]
  (let [has-search? (and search-term (not (str/blank? search-term)))
        search-condition (if has-search?
                          "AND (LOWER(name) LIKE $2 OR LOWER(email) LIKE $2 OR LOWER(contact_person) LIKE $2)"
                          "")
        search-param (when has-search? (str "%" (str/lower-case (str search-term)) "%"))
        params (if has-search? 
                [workspace-id search-param limit]
                [workspace-id limit])
        query (str "SELECT id, name, email, contact_person, phone 
                   FROM expert_lift.customers 
                   WHERE workspace_id = $1 AND active = true " 
                   search-condition
                   " ORDER BY name 
                   LIMIT $" (if has-search? "3" "2"))]
    (postgres/execute-sql query {:params params})))

(defn get-customer-addresses
  "Get all addresses for a customer via customer_addresses junction table"
  [customer-id workspace-id]
  (postgres/execute-sql 
   "SELECT a.*, ca.is_primary
    FROM expert_lift.addresses a
    INNER JOIN expert_lift.customer_addresses ca ON a.id = ca.address_id
    WHERE ca.customer_id = $1 AND a.workspace_id = $2
    ORDER BY ca.is_primary DESC, a.name"
   {:params [customer-id workspace-id]}))

(defn add-customer-address
  "Add address to customer via customer_addresses junction table"
  [customer-id address-id is-primary]
  (postgres/execute-sql 
   "INSERT INTO expert_lift.customer_addresses (customer_id, address_id, is_primary) 
    VALUES ($1, $2, $3) 
    RETURNING *"
   {:params [customer-id address-id is-primary]}))

(defn remove-customer-address
  "Remove address from customer via customer_addresses junction table"
  [customer-id address-id]
  (postgres/execute-sql 
   "DELETE FROM expert_lift.customer_addresses 
    WHERE customer_id = $1 AND address_id = $2
    RETURNING id"
   {:params [customer-id address-id]}))

(defn update-customer-address-primary
  "Update primary status of customer address relationship"
  [customer-id address-id is-primary]
  (postgres/execute-sql 
   "UPDATE expert_lift.customer_addresses 
    SET is_primary = $3, updated_at = NOW()
    WHERE customer_id = $1 AND address_id = $2
    RETURNING *"
   {:params [customer-id address-id is-primary]}))