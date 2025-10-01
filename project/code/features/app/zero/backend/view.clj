(ns features.app.zero.backend.view
  (:require
   [hiccup.page :refer [html5 include-js include-css]]
   [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]))

(defn loading []
  [:div {:style "height: 100vh; width: 100vw; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #f8f9fa; gap: 20px;"}
   [:div {:class "loading-brand-container"}
    [:img {:class "loading-logo" :src "/images/fuma_logo_landing_page_fejlecbe.png" :alt "Fuma Logo"}]]
   [:div {:class "loading-spinner"}]])

(defn font-awesome-include []
  [:script {:type "text/javascript"
            :crossorigin "anonymous"
            :src "/external-js/fontawesome.js"}])

(defn app-html-page
  "Generates the HTML page for the app."
  []
  (html5
   [:head
    [:meta {:charset "UTF-8"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
    [:title "Fuma"]

    ;; Favicons
    [:link {:rel "icon" :type "image/x-icon" :href "/favicon.ico"}]
    [:link {:rel "icon" :type "image/png" :sizes "16x16" :href "/favicon/favicon-16x16.png"}]
    [:link {:rel "icon" :type "image/png" :sizes "32x32" :href "/favicon/favicon-32x32.png"}]
    [:link {:rel "icon" :type "image/png" :sizes "96x96" :href "/favicon/favicon-96x96.png"}]
    [:link {:rel "apple-touch-icon" :sizes "180x180" :href "/favicon/apple-icon-180x180.png"}]
    [:link {:rel "icon" :type "image/png" :sizes "192x192" :href "/favicon/android-icon-192x192.png"}]
    [:link {:rel "manifest" :href "/site.webmanifest"}]
    [:meta {:name "theme-color" :content "#14b8a6"}]

    ;; Fonts
    [:link {:rel "preconnect" :href "https://fonts.googleapis.com"}]
    [:link {:rel "preconnect" :href "https://fonts.gstatic.com" :crossorigin true}]
    [:link {:href "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700&display=swap" :rel "stylesheet"}]

    ;; Styles
    (include-css "/css/normalize.css")
    (include-css "/css/ui.css")
    (include-css "/css/app.css")]
   [:body
    (let [csrf-token (force *anti-forgery-token*)]
      [:div#csrf-token {:data-csrf-token csrf-token}])
    [:div#reagent-container (loading)]
    (font-awesome-include)
    (include-js "/js/libs/app.js")
    (include-js "/js/core/app.js")]))

(defn response [_req]
  {:status 200
   :body   (app-html-page)
   :headers {"Content-Type" "text/html"}})