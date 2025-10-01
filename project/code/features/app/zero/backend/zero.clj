(ns features.app.zero.backend.zero
  (:require [features.app.homepage.routes :as homepage-routes]
            [features.app.newsletter.routes :as newsletter-routes]))

(def routes
  (concat homepage-routes/routes
          newsletter-routes/routes))
