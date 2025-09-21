(ns features.app.zero.backend.zero
  (:require [features.app.homepage.routes :as homepage-routes]
            [features.app.pricing.routes :as pricing-routes]
            [features.app.the-team.routes :as the-team-routes]))

(def routes
  (concat homepage-routes/routes
          pricing-routes/routes
          the-team-routes/routes))
