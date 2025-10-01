(ns features.app.homepage.backend.newsletter
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as str]))

(def newsletter-file
  "Newsletter subscriptions file path - uses Railway volume in production, local data dir in dev"
  (let [railway-path "/data/newsletter_subscriptions.edn"
        local-path "data/newsletter_subscriptions.edn"]
    (if (.exists (io/file "/data"))
      railway-path
      local-path)))

(defn valid-email?
  "Check if email has basic valid format"
  [email]
  (and email
       (string? email)
       (re-matches #"^[^\s@]+@[^\s@]+\.[^\s@]+$" email)))

(defn read-subscriptions
  "Read subscriptions from EDN file, return empty vector if file doesn't exist"
  []
  (try
    (if (.exists (io/file newsletter-file))
      (edn/read-string (slurp newsletter-file))
      [])
    (catch Exception e
      (println "Error reading newsletter subscriptions:" (.getMessage e))
      [])))

(defn ensure-parent-directory
  "Ensure parent directory exists for the file"
  [file-path]
  (let [parent-dir (.getParentFile (io/file file-path))]
    (when parent-dir
      (when-not (.exists parent-dir)
        (println "Creating directory:" (.getPath parent-dir))
        (.mkdirs parent-dir)))))

(defn write-subscriptions
  "Write subscriptions to EDN file atomically, creating file/directory if needed"
  [subscriptions]
  (try
    ;; Ensure directory exists
    (ensure-parent-directory newsletter-file)

    (let [temp-file (str newsletter-file ".tmp")]
      ;; Write to temp file first
      (spit temp-file (pr-str subscriptions))
      ;; Atomic rename
      (.renameTo (io/file temp-file) (io/file newsletter-file))
      (println "Successfully wrote newsletter subscriptions to:" newsletter-file)
      true)
    (catch Exception e
      (println "Error writing newsletter subscriptions:" (.getMessage e))
      (println "  File path:" newsletter-file)
      false)))

(defn email-exists?
  "Check if email already exists in subscriptions"
  [subscriptions email]
  (some #(= (first %) email) subscriptions))

(defn subscribe-newsletter
  "Add newsletter subscription - stores [email name] pairs in EDN file"
  [{:parquery/keys [context request] :as params}]
  (let [email (str/trim (or (:email params) ""))
        name (str/trim (or (:name params) ""))]

    (println "Newsletter subscription attempt - Email:" email "Name:" name)

    (cond
      (str/blank? email)
      {:success false :error "Az email cím megadása kötelező"}

      (str/blank? name)
      {:success false :error "A név megadása kötelező"}

      (not (valid-email? email))
      {:success false :error "Érvénytelen email formátum"}

      :else
      (let [subscriptions (read-subscriptions)]
        (if (email-exists? subscriptions email)
          {:success false :error "Ez az email cím már feliratkozott"}
          (let [new-subscriptions (conj subscriptions [email name])]
            (if (write-subscriptions new-subscriptions)
              (do
                (println "Newsletter subscription successful:" email)
                {:success true :message "Sikeres feliratkozás!"})
              {:success false :error "Nem sikerült menteni a feliratkozást. Kérlek próbáld újra!"})))))))
