> **ADM-WI** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Permettre au super-admin de gérer les comptes administrateurs (invitation, rôles, sessions, désactivation), la configuration système (feature flags, quotas IA, rapport hebdomadaire) et les notifications manuelles, avec des garde-fous forts et une journalisation complète.

## 📦 Périmètre

- AdminAccountsPage : liste, invitation par e-mail, édition de rôle, sessions actives et révocation, désactivation (WI-01 à WI-04)
- Configuration : onglets Feature flags, Quotas IA, Rapports (WI-05, WI-06, WI-09)
- Notifications manuelles : composition trilingue, audience, programmation, double confirmation « Tous » (WI-07, WI-08)
- Exports CSV/Excel (joueurs, utilisateurs, signalements traités, journal d'audit) et rapport hebdomadaire e-mail

## 🚫 Hors périmètre

- Création des endpoints /admin/accounts, /admin/config/*, /admin/notifications/manual (dépôt API)
- Envoi réel FCM et file BullMQ send-notifications (API)
- Consultation de la consommation IA (groupe WH)
- Barème Fantasy et autres configurations métier (groupe WJ)

## 📚 Références

- CDC Admin §3, §3.2, §3.3, §4.8, §4.8.1, §4.11, §6.1, §6.5, §6.6
- CDC Backend §3.10 Notifications, §3.11 Admin Auth, §11.2, §11.3, §11.4
- CDC Global §2.14, §3.2

## 🧩 Issues de l'épopée (21)

{{CHILDREN}}
