(ns features.app.pricing.routes
  #?(:cljs (:require [features.app.pricing.frontend.view :as pricing]))
  #?(:clj  (:require [features.app.zero.backend.view :as backend-view])))

(def pricing-path "/pricing")

(def routes
  #?(:cljs [{:path pricing-path
             :view #'pricing/view
             :title "Pricing"}]
     :clj  [{:path pricing-path
             :get #'backend-view/response}]))