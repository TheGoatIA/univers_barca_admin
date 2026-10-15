> **ADM-WF** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Permettre aux content-managers et super-admins de constituer et d'entretenir le pool de questions du quiz adaptatif : retrouver et filtrer les questions, les éditer en trois langues (énoncé, 4 réponses, explication), relire les questions générées par IA avant qu'elles n'intègrent le pool actif (aucune publication sans relecture humaine) et repérer les questions mal calibrées grâce aux statistiques de réussite.

## 📦 Périmètre

- Liste des questions : filtres niveau/catégorie/statut/plage de réussite persistés dans l'URL, tri, pagination serveur, compteurs
- Éditeur de question trilingue avec 4 réponses, bonne réponse, explication, paramètres et performance observée
- Workflow de statut et publication bloquante tant que les 3 langues ne sont pas complètes
- File de validation IA : approuver, corriger puis approuver, rejeter avec motif, approbation en lot, raccourcis clavier
- Page Performance : KPI, histogramme de répartition, liste « À corriger en priorité », export
- RBAC, audit et tests E2E

## 🚫 Hors périmètre

- Génération des questions par IA et workers BullMQ ai-generation (API)
- Routes /admin/quiz-questions côté API (contrats décrits ici, implémentation dans les issues API)
- Algorithme adaptatif et classements côté mobile (module Jeux)
- Composant TrilingualTextEditor et DataTable génériques (groupes WE et ADS)
- Tableau de bord global et recherche globale (WB)

## 📚 Références

- CDC Admin §4.5, §4.5.1, §4.10, §4.12, §6.4
- CDC Backend §3.4, §3.12.1
- CDC Global §2.5

## 🧩 Issues de l'épopée (23)

{{CHILDREN}}
