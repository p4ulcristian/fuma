(ns features.app.the-team.routes
  #?(:cljs (:require [features.app.the-team.frontend.view :as the-team]))
  #?(:clj  (:require [features.app.zero.backend.view :as backend-view])))

(def the-team-path "/the_team")

(def routes
  #?(:cljs [{:path the-team-path
             :view #'the-team/view
             :title "The Team"}]
     :clj  [{:path the-team-path
             :get #'backend-view/response}]))