> **ADM-WG** · Épopée · Phase 2 — Communautaire & compétitif

## 🎯 Objectif

Donner aux modérateurs et super-admins les outils pour garantir un espace communautaire sain : traiter une file de signalements priorisée par une gravité automatique indicative, examiner le contenu dans son contexte sans exposer le rapporteur, appliquer des actions journalisées de façon immuable (ignorer, masquer, avertir, suspendre, bannir) selon un barème indicatif, évaluer la récidive via l'historique d'un utilisateur et valider ou archiver les groupes locaux (RG-MAP-04).

## 📦 Périmètre

- File de signalements : onglets En attente/En cours/Traités/Ignorés, filtres, tri par gravité, polling, état vide
- Détail d'un signalement : contenu, contexte, masquage du contenu sensible, panneaux auteur et rapporteur masqué, navigation précédent/suivant
- Actions : ignorer, masquer, avertir, suspendre, bannir avec gravité retenue, rang de récidive et justification obligatoire pour suspendre/bannir
- Historique de modération d'un utilisateur et chronologie
- Gestion des groupes locaux : validation, refus, archivage, règle de validation
- Barème de sanctions, raccourcis clavier, RBAC, audit immuable, tests E2E

## 🚫 Hors périmètre

- Endpoints /admin/moderation et /admin/community-groups côté API et filtrage automatique de premier niveau (issues API)
- Notifications envoyées à l'utilisateur sanctionné (backend, module Notifications)
- Actions de sanction depuis la fiche utilisateur (groupe WJ)
- Modération des wallpapers IA a posteriori (groupe WJ)
- Carte communautaire côté mobile et règles de groupe côté app
- Journal d'audit global (groupe WH)

## 📚 Références

- CDC Admin §4.6, §4.6.1, §4.6.2, §4.6.2b, §4.6.3, §4.6.4, §4.8.2
- CDC Admin §6.2, §6.4, §7.5, §9.4, §9.7
- CDC Backend §3.6, §3.11
- CDC Global §2.15, §2.16, §11

## 🧩 Issues de l'épopée (27)

{{CHILDREN}}
