> **ADM-FND** · Épopée · Phase 0 — Socle technique

## 🎯 Objectif

Livrer le socle technique du back-office (phase 0) sur lequel se branchent tous les modules métier : routage par rôle et chargement paresseux, client HTTP fiable (enveloppe, corrélation, refresh sans course), conventions TanStack Query, gestion d'erreurs, shell responsive tablette, thème clair/sombre sans flash, textes français centralisés et formats Intl, exports CSV/Excel/PDF, socle d'upload, qualité (Vitest, Playwright, accessibilité, couverture par couche), CI/CD, Docker/nginx, CSP, journaux front et budgets de performance.

## 📦 Périmètre

- Configuration par environnement validée, architecture en couches avec lint de frontières, table de routes unique
- Client axios typé, QueryClient et fabrique de clés, types générés depuis OpenAPI
- ErrorBoundary par route, reprise après chunk obsolète, détection de nouvelle version
- Shell responsive tablette, thème clair/sombre/système, préférences persistées par administrateur
- Catalogue i18n FR figé, formats français et messages Zod
- Socle d'export CSV/XLSX/PDF et socle d'upload (dropzone, validations binaires, file d'envoi)
- Couverture par couche, fixtures Playwright par rôle, accessibilité en CI, pipeline CI et CD, Docker/nginx, CSP avancée, journaux front, budgets de bundle

## 🚫 Hors périmètre

- Authentification, garde RequireRole, erreurs et toasts (groupe WA)
- Composants du design system et Storybook (groupe ADS)
- Écrans métier (WB à WJ)
- Endpoints API cités « à créer » (exports, client-logs, csp-report, endpoints de test E2E) : contrats décrits ici, implémentation dans les issues API
- Infrastructure VPS, reverse proxy TLS et Graylog (dépôt API / exploitation)

## 📚 Références

- CDC Admin §1, §2, §5.2, §6.2, §6.3, §6.5, §6.7
- CDC Admin §7, §8, §9.1 à §9.7
- CDC Backend §10.2, §11.6, §12
- CDC Global §2.14, §11

## 🧩 Issues de l'épopée (25)

{{CHILDREN}}
