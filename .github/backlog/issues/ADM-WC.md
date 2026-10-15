> **ADM-WC** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Permettre aux content-managers et super-admins de gérer le référentiel des joueurs du Barça : retrouver une fiche, la compléter (identité, biographie trilingue FR/EN/ES, statistiques par saison, photo), la publier selon le workflow Brouillon → Traduction → Prêt → Publié → Archivé et traiter les fiches en masse, avec une traçabilité complète. Le module étend la liste basique déjà livrée (recherche + pagination) pour la rendre fidèle aux 12 maquettes WC.

## 📦 Périmètre

- Liste des joueurs : en-tête et compteurs, filtres persistés dans l'URL, tri serveur, pagination 50 lignes, mode dense, états vides différenciés
- Sélection multiple, publication et archivage groupés avec confirmation, exports CSV/Excel
- Fiche joueur : onglets Identité, Biographie trilingue, Statistiques par saison, Photo ; workflow et checklist
- Publication bloquante tant que la biographie n'est pas complète en FR, EN et ES, avec confirmation
- Imports CSV (statistiques et fiches) avec validation à blanc et rapport par ligne
- Garde des modifications, conflit d'édition concurrente, RBAC et audit, tests E2E

## 🚫 Hors périmètre

- Routes et endpoints /admin/players côté API (issues du groupe API correspondant ; ici seuls les contrats attendus sont décrits)
- Composants génériques du design system (DataTable, TrilingualTextEditor, MediaUploader, ConfirmDialog : groupe ADS et WE)
- Médiathèque centralisée (WE)
- Recherche globale (WB) et journal d'audit global (WH)
- Synchronisation des données joueurs depuis l'API football

## 📚 Références

- CDC Admin §4.2, §4.2.1, §4.2.2
- CDC Admin §4.10, §4.12, §6.4, §6.5, §9.4, §9.7
- CDC Backend §3.2
- CDC Global §2.14

## 🧩 Issues de l'épopée (28)

{{CHILDREN}}
