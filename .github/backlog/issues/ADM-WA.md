> **ADM-WA** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Sécuriser l'entrée du back-office : connexion, blocage anti force brute, second facteur TOTP, activation par invitation, configuration du 2FA, expiration de session sur inactivité et pages d'erreur (403, 404, 500) cohérentes avec les maquettes.

## 📦 Périmètre

- Gabarit AuthLayout split hero/formulaire
- Connexion, erreur, blocage 15 min, TOTP avec codes de secours, première connexion, configuration 2FA
- Expiration de session 8 h + restauration des brouillons
- Garde RequireRole, pages 403/404/500 avec traceId
- Intercepteur d'erreurs/Toast, CSRF/CSP, tests

## 🚫 Hors périmètre

- Gestion des comptes admin et sessions actives (module Comptes)
- Journal d'audit (module Supervision)
- Endpoints API manquants eux-mêmes (accept-invite, codes de secours, forgot-password, csrf) : spécifiés ici comme contrat, implémentés dans le dépôt API

## 📚 Références

- CDC Admin §3
- CDC Admin §6
- CDC Admin §2.5-2.6
- CDC Backend §3.11
- CDC Global §2.14

## 🧩 Issues de l'épopée (19)

{{CHILDREN}}
