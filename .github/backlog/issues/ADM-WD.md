> **ADM-WD** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Permettre aux content-managers de piloter le référentiel des matchs du Barça : suivre le calendrier et la synchronisation avec l'API football, corriger une fiche, arbitrer explicitement les conflits entre données API et corrections éditoriales et saisir les rencontres historiques non couvertes, avec une traçabilité complète.

## 📦 Périmètre

- Liste des matchs (À venir, En direct, Historiques, Conflits) avec filtres persistés dans l'URL
- Fiche match : informations, compositions, événements, historique des modifications
- Synchronisation API football : fraîcheur, déclenchement manuel, indicateurs
- Résolution de conflit avec journalisation avant/après
- Saisie d'un match historique trilingue avec publication bloquante
- RBAC, audit et tests e2e

## 🚫 Hors périmètre

- Exécution réelle du worker football-sync et du client FootballDataProvider (groupe API football-data)
- Export .ics côté mobile/API
- Journal d'audit global (module Supervision WH)
- Fiches joueurs (module WC)

## 📚 Références

- CDC Admin §4.3
- CDC Admin §4.3.1
- CDC Backend §3.2
- CDC Backend §11.1
- CDC Global §2.14

## 🧩 Issues de l'épopée (14)

{{CHILDREN}}
