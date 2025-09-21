(ns features.app.customers.routes
  #?(:cljs (:require [features.app.customers.frontend.view :as customers]))
  #?(:clj  (:require [features.app.zero.backend.view :as backend-view]
                     [router.backend.middleware :refer [wrap-require-authentication]])))

(def customers-path "/app/:workspace-id/customers")

(def routes
  #?(:cljs [{:path customers-path
             :view #'customers/view
             :title "Customers"}]
     :clj  [{:path customers-path
             :get #'backend-view/response
             :middleware [wrap-require-authentication]}]))