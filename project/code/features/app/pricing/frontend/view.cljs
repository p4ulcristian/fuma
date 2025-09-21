(ns features.app.pricing.frontend.view
  (:require
   [ui.theme :as theme]
   [router.frontend.zero :as router]
   [translations.core :as tr]
   [zero.frontend.re-frame :as rf]))

(defn pricing-row [label price theme-colors]
  [:div {:style {:display "flex" :justify-content "space-between" :padding "0.5rem 0"}}
   [:span {:style {:color (get-in theme-colors [:text :secondary])}} label]
   [:span {:style {:font-weight "600" :color (get-in theme-colors [:text :primary])}} price]])

(defn pricing-category [title items theme-colors icon]
  [:div {:style {:margin-bottom "2rem"}}
   [:div {:style {:display "flex" :align-items "center" :gap "0.5rem" :margin-bottom "1rem"}}
    [:span {:style {:font-size "1.5rem"}} icon]
    [:h4 {:style {:font-size "1.125rem" :font-weight "600" :color (get-in theme-colors [:accent :primary]) :margin "0"}} title]]
   [:div {:style {:display "flex" :flex-direction "column" :gap "0.5rem"}}
    (for [[label price] items]
      ^{:key label} [pricing-row label price theme-colors])]])

(defn pricing-column [title note? items theme-colors master?]
  [:div {:style (merge {:background (get-in theme-colors [:background :secondary])
                        :border-radius "12px" :padding "2rem" :box-shadow (get-in theme-colors [:shadow :medium])
                        :transition "all 0.3s ease"
                        :cursor "default"
                        :position "relative"
                        :overflow "hidden"}
                       (when master? {:border (str "2px solid " (get-in theme-colors [:accent :primary]))
                                      :transform "scale(1.02)"
                                      :box-shadow (str "0 8px 25px " (get-in theme-colors [:shadow :medium]))}))
         :on-mouse-enter #(set! (.. % -target -style -transform) "translateY(-4px) scale(1.02)")
         :on-mouse-leave #(set! (.. % -target -style -transform) (if master? "scale(1.02)" "translateY(0px)"))}
   (when master?
     [:div {:style {:position "absolute" :top "10px" :right "15px" :background (get-in theme-colors [:accent :gradient])
                    :color (get-in theme-colors [:text :primary]) :padding "0.25rem 0.75rem"
                    :border-radius "20px" :font-size "0.75rem" :font-weight "600"}} "👑 MASTER"])
   [:h3 {:style {:font-size "1.5rem" :font-weight "600" :color (get-in theme-colors [:text :primary])
                 :margin "0 0 1.5rem 0" :text-align "center"}} title]
   (when note?
     [:p {:style {:font-size "0.875rem" :color (get-in theme-colors [:text :tertiary])
                  :text-align "center" :margin "0 0 1.5rem 0"}} (tr/tr :pricing/note)])
   items])

(defn employee-womens-haircuts []
  [[(tr/tr :pricing/short) "6,500 Ft"]
   [(tr/tr :pricing/medium) "8,000 Ft"]
   [(tr/tr :pricing/long) "9,000 Ft"]
   [(tr/tr :pricing/extra-long) "10,000 Ft"]
   [(tr/tr :pricing/dry-cut) "4,000 Ft"]])

(defn employee-mens-haircuts []
  [[(tr/tr :pricing/short-cut) "4,200 Ft"]
   [(tr/tr :pricing/medium-cut) "5,000 Ft"]
   [(tr/tr :pricing/long-cut) "5,500 Ft"]
   [(tr/tr :pricing/clipper-only) "3,500 Ft"]
   [(tr/tr :pricing/beard-trim) "2,800 Ft"]
   [(tr/tr :pricing/wash) "1,500 Ft"]])

(defn employee-coloring []
  [[(tr/tr :pricing/root-bleach) "2,500 Ft"]
   [(tr/tr :pricing/full-bleach) "3,500 Ft"]
   [(tr/tr :pricing/balayage) "3,000 Ft"]
   [(tr/tr :pricing/highlights) "3,000 Ft"]
   [(tr/tr :pricing/correction) "4,000 Ft"]])

(defn master-womens-haircuts []
  [[(tr/tr :pricing/short) "9,500 Ft"]
   [(tr/tr :pricing/medium) "11,000 Ft"]
   [(tr/tr :pricing/long) "13,000 Ft"]
   [(tr/tr :pricing/extra-long) "14,500 Ft"]
   [(tr/tr :pricing/dry-cut) "5,000 Ft"]])

(defn master-mens-haircuts []
  [[(tr/tr :pricing/short-cut) "5,200 Ft"]
   [(tr/tr :pricing/medium-cut) "6,000 Ft"]
   [(tr/tr :pricing/long-cut) "7,500 Ft"]
   [(tr/tr :pricing/clipper-only) "4,200 Ft"]
   [(tr/tr :pricing/beard-trim) "2,800 Ft"]
   [(tr/tr :pricing/wash) "1,500 Ft"]])

(defn master-coloring []
  [[(tr/tr :pricing/root-bleach) "3,500 Ft"]
   [(tr/tr :pricing/full-bleach) "4,500 Ft"]
   [(tr/tr :pricing/balayage) "4,500 Ft"]
   [(tr/tr :pricing/highlights) "4,500 Ft"]
   [(tr/tr :pricing/correction) "6,000 Ft"]])

(defn hero-section [theme-colors]
  [:section {:style {:width "100%" :padding "clamp(3rem, 8vw, 6rem) 1rem clamp(2rem, 4vw, 4rem) 1rem" :text-align "center"
                     :background (str "linear-gradient(135deg, "
                                     (get-in theme-colors [:background :primary]) " 0%, "
                                     (get-in theme-colors [:background :secondary]) " 100%)")
                     :position "relative"
                     :overflow "hidden"}}
   ;; Decorative background elements
   [:div {:style {:position "absolute" :top "20px" :right "20px" :font-size "6rem"
                  :opacity "0.1" :color (get-in theme-colors [:accent :primary])
                  :z-index "0"}} "💰"]
   [:div {:style {:position "absolute" :bottom "20px" :left "20px" :font-size "4rem"
                  :opacity "0.1" :color (get-in theme-colors [:accent :secondary])
                  :z-index "0"}} "✂️"]
   [:div {:style {:max-width "800px" :margin "0 auto" :position "relative" :z-index "1"}}
    [:div {:style {:display "inline-block" :padding "0.5rem 1.5rem" :margin-bottom "1.5rem"
                   :background (get-in theme-colors [:accent :gradient])
                   :border-radius "25px" :font-size "0.875rem" :font-weight "600"
                   :color (get-in theme-colors [:text :primary])}} "💎 Premium Hair Services"]
    [:h1 {:style {:font-size "clamp(2.5rem, 8vw, 4rem)" :font-weight "700" :color (get-in theme-colors [:text :primary])
                  :margin "0 0 1.5rem 0" :font-family "'Dancing Script', cursive"
                  :text-shadow (str "2px 2px 4px " (get-in theme-colors [:shadow :light]))}}
     (tr/tr :pricing/hero-title)]
    [:p {:style {:font-size "1.4rem" :color (get-in theme-colors [:text :secondary])
                 :margin "0 0 3rem 0" :line-height "1.7" :max-width "600px" :margin-left "auto" :margin-right "auto"}}
     (tr/tr :pricing/hero-subtitle)]]])

(defn pricing-tables [theme-colors]
  [:section {:style {:width "100%" :padding "2rem" :background (get-in theme-colors [:background :primary])}}
   [:div {:style {:max-width "1200px" :margin "0 auto"}}
    [:div {:style {:display "grid"
                   :grid-template-columns "repeat(auto-fit, minmax(350px, 1fr))"
                   :gap "2rem"}}
     [pricing-column (tr/tr :pricing/employee-prices) false
      [:<>
       [pricing-category (tr/tr :pricing/womens-haircut) (employee-womens-haircuts) theme-colors "💇‍♀️"]
       [pricing-category (tr/tr :pricing/mens-haircut) (employee-mens-haircuts) theme-colors "💈"]
       [pricing-category (tr/tr :pricing/coloring) (employee-coloring) theme-colors "🎨"]]
      theme-colors false]
     [pricing-column (tr/tr :pricing/master-prices) true
      [:<>
       [pricing-category (tr/tr :pricing/womens-haircut) (master-womens-haircuts) theme-colors "💇‍♀️"]
       [pricing-category (tr/tr :pricing/mens-haircut) (master-mens-haircuts) theme-colors "💈"]
       [pricing-category (tr/tr :pricing/coloring) (master-coloring) theme-colors "🎨"]]
      theme-colors true]]]])

(defn back-button [theme-colors]
  [:div {:style {:padding "3rem 2rem" :text-align "center" :background (get-in theme-colors [:background :primary])}}
   [:a {:href "/"
        :style {:display "inline-flex" :align-items "center" :gap "0.5rem" :padding "1rem 2rem"
                :background (get-in theme-colors [:accent :gradient])
                :color (get-in theme-colors [:text :primary]) :text-decoration "none"
                :border-radius "50px" :font-weight "600" :font-size "1.1rem"
                :border "none" :cursor "pointer"
                :transition "all 0.3s ease" :box-shadow (get-in theme-colors [:shadow :medium])
                :text-transform "uppercase" :letter-spacing "0.5px"}
        :on-mouse-enter #(set! (.. % -target -style -transform) "translateY(-2px) scale(1.05)")
        :on-mouse-leave #(set! (.. % -target -style -transform) "translateY(0px) scale(1)")}
    "🏠 " (tr/tr :pricing/back-to-home)]])

(defn view []
  (let [current-theme @(rf/subscribe [:header/current-theme])
        theme-colors (theme/get-theme-colors current-theme)]
    (set! (.-title js/document) (tr/tr :pricing/page-title))
    [:div {:style {:min-height "100vh" :background (get-in theme-colors [:background :primary])}}
     [hero-section theme-colors]
     [pricing-tables theme-colors]
     [back-button theme-colors]]))