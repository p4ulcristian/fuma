(ns ui.theme
  "Theme system for light/dark mode support"
  (:require [zero.frontend.re-frame :as rf]))

;; Theme configurations
(def themes
  {:light {:background {:primary "#f9fafb"
                        :secondary "#ffffff"
                        :tertiary "#f3f4f6"}
           :text {:primary "#1f2937"
                  :secondary "#4b5563"
                  :tertiary "#6b7280"
                  :muted "#9ca3af"}
           :border {:primary "#e5e7eb"
                    :secondary "#d1d5db"}
           :accent {:primary "#14b8a6"
                    :secondary "#ec4899"
                    :gradient "linear-gradient(135deg, #14b8a6, #ec4899)"}
           :shadow {:light "0 2px 4px rgba(0, 0, 0, 0.1)"
                    :medium "0 4px 8px rgba(0, 0, 0, 0.15)"
                    :heavy "0 10px 25px rgba(0, 0, 0, 0.15)"}
           :footer {:background "#374151"
                    :text-primary "#f9fafb"
                    :text-secondary "#d1d5db"
                    :text-muted "#9ca3af"
                    :accent "#60a5fa"}}
   :dark {:background {:primary "#111827"
                       :secondary "#1f2937"
                       :tertiary "#374151"}
          :text {:primary "#f9fafb"
                 :secondary "#e5e7eb"
                 :tertiary "#d1d5db"
                 :muted "#9ca3af"}
          :border {:primary "#374151"
                   :secondary "#4b5563"}
          :accent {:primary "#14b8a6"
                   :secondary "#ec4899"
                   :gradient "linear-gradient(135deg, #14b8a6, #ec4899)"}
          :shadow {:light "0 2px 4px rgba(0, 0, 0, 0.3)"
                   :medium "0 4px 8px rgba(0, 0, 0, 0.4)"
                   :heavy "0 10px 25px rgba(0, 0, 0, 0.5)"}
          :footer {:background "#1f2937"
                   :text-primary "#f9fafb"
                   :text-secondary "#d1d5db"
                   :text-muted "#9ca3af"
                   :accent "#60a5fa"}}})

;; Helper functions
(defn get-theme-colors
  "Get colors for the current theme"
  [theme-key]
  (get themes theme-key (:light themes)))

(defn get-color
  "Get a specific color from the current theme"
  [theme-key color-path]
  (get-in themes [theme-key color-path]))

;; Theme-aware style helpers
(defn themed-style
  "Create a themed style map based on current theme"
  [current-theme base-style theme-overrides]
  (let [theme-colors (get-theme-colors current-theme)
        theme-style (get theme-overrides current-theme {})]
    (merge base-style theme-style)))

;; Common themed styles
(defn page-background-style
  "Get page background style for current theme"
  [current-theme]
  {:background (get-color current-theme [:background :primary])})

(defn card-style
  "Get card style for current theme"
  [current-theme]
  {:background (get-color current-theme [:background :secondary])
   :border (str "1px solid " (get-color current-theme [:border :primary]))
   :box-shadow (get-color current-theme [:shadow :light])})

(defn text-style
  "Get text style for current theme"
  [current-theme level]
  {:color (get-color current-theme [:text level])})

(defn button-style
  "Get button style for current theme"
  [current-theme type]
  (case type
    :primary {:background (get-color current-theme [:accent :gradient])
              :color (get-color current-theme [:text :primary])
              :border "none"}
    :secondary {:background (get-color current-theme [:background :tertiary])
                :color (get-color current-theme [:text :secondary])
                :border (str "1px solid " (get-color current-theme [:border :secondary]))}
    {}))

;; Subscription for themed styles
(rf/reg-sub
 :theme/colors
 :<- [:header/current-theme]
 (fn [current-theme _]
   (get-theme-colors current-theme)))

(rf/reg-sub
 :theme/page-style
 :<- [:header/current-theme]
 (fn [current-theme _]
   (page-background-style current-theme)))

(rf/reg-sub
 :theme/text-style
 :<- [:header/current-theme]
 (fn [current-theme [_ level]]
   (text-style current-theme level)))