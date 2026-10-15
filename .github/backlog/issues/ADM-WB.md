> **ADM-WB** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Offrir à chaque rôle (super-admin, content-manager, modérateur) un tableau de bord adapté, résilient aux pannes partielles, et une recherche globale instantanée (Ctrl K) pour atteindre n'importe quelle fiche en quelques secondes.

## 📦 Périmètre

- Client API des widgets par rôle et schémas Zod
- Refonte de la barre supérieure et de la sidebar groupée avec compteurs
- Tableaux de bord super-admin, content-manager, modérateur, états chargement et erreur partielle
- Export CSV et période 7/30 jours
- Palette de recherche globale, page de résultats, raccourcis clavier
- Tests et budget de performance

## 🚫 Hors périmètre

- Contenu détaillé des modules cibles (Modération, Supervision, Quiz, Contenu historique) : liens seulement
- NotificationCenter (cloche)
- Journal d'audit complet (seul le flux résumé est affiché)

## 📚 Références

- CDC Admin §4.1
- CDC Admin §4.9
- CDC Admin §9.7
- CDC Global §2.14
- CDC Backend §12.4

## 🧩 Issues de l'épopée (16)

{{CHILDREN}}
