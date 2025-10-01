(ns features.app.homepage.routes
  #?(:cljs (:require [features.app.homepage.frontend.view :as homepage]))
  #?(:clj  (:require [features.app.zero.backend.view :as backend-view]
                     [features.app.homepage.backend.newsletter :as newsletter])))

(def homepage-path "/")
(def export-path "/api/newsletter/export")

(def routes
  #?(:cljs [{:path homepage-path
             :view #'homepage/view
             :title "Home"}]
     :clj  [{:path homepage-path
             :get #'backend-view/response}
            {:path export-path
             :get #'newsletter/export-csv-handler}])) 