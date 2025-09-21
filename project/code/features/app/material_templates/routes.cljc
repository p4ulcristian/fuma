(ns features.app.material-templates.routes
  #?(:cljs (:require [features.app.material-templates.frontend.view :as material-templates]))
  #?(:clj  (:require [features.app.zero.backend.view :as backend-view]
                     [router.backend.middleware :refer [wrap-require-authentication]])))

(def material-templates-path "/app/:workspace-id/material-templates")
(def material-template-path "/app/:workspace-id/material-templates/:material-template-id")

(def routes
  #?(:cljs [{:path material-templates-path
             :view #'material-templates/view
             :title "Material Templates"}
            {:path material-template-path
             :view #'material-templates/individual-view
             :title "Edit Material Template"}]
     :clj  [{:path material-templates-path
             :get #'backend-view/response
             :middleware [wrap-require-authentication]}
            {:path material-template-path
             :get #'backend-view/response
             :middleware [wrap-require-authentication]}]))