(ns router.backend.transform)

; ╔════════════════════════╗
; ║  Route transformation  ║
; ╚════════════════════════╝

(defn route->reitit-route [route]
  (let [{:keys [path get post put delete middleware]}
        route]
    [path
     (cond-> {}
       get       (assoc :get    {:handler get})
       post      (assoc :post   {:handler post})
       put       (assoc :put    {:handler put})
       delete    (assoc :delete {:handler delete})
       middleware (assoc :middleware middleware))]))

(defn routes->reitit-routes [routes]
  (mapv route->reitit-route routes))
