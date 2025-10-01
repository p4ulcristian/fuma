(ns features.app.newsletter.routes
  #?(:cljs (:require [features.app.newsletter.frontend.view :as newsletter]))
  #?(:clj  (:require [features.app.newsletter.backend.view :as backend-view])))

(def newsletter-path "/newsletter")

(def routes
  #?(:cljs [{:path newsletter-path
             :view #'newsletter/view
             :title "Newsletter"}]
     :clj  [{:path newsletter-path
             :get #'backend-view/response}]))
