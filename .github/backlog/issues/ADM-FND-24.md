> **ADM-FND-24** · Infrastructure · Priorité **P1** · Taille **L** · Phase 0 — Socle technique

## 🎯 Contexte

Le front ne dispose que de `console.error` (règle ESLint `no-console` hors `warn`/`error`). Plusieurs groupes réfèrent à un « log front » interne : WH (`admin_job_retry`), WC (`players_bulk_publish`, `player_published`), WF (`quiz_ai_approved`), WG (masquage du `reporterId`). Le CDC Admin §6.3 impose la journalisation des actions côté backend (audit) ; l'observabilité côté navigateur (erreurs, performance) complète sans la remplacer, via l'écosystème d'observabilité existant (Graylog, CDC Backend §9).

## ✅ Objectif

Fournir un logger front typé, un transport par lots vers l'API et un catalogue d'événements d'usage sans donnée personnelle.

## 📐 Règles de gestion

- Logger `src/lib/logger.ts` : niveaux `debug|info|warn|error`, contexte automatique (`release=VITE_APP_VERSION`, `env`, `route` normalisée sans identifiants — `/joueurs/:id`, `role`, `sessionId` aléatoire par onglet, `traceId` de la dernière requête), sortie console en développement, transport réseau en staging/production.
- Transport : tampon mémoire (max 100 événements), envoi par lots toutes les 10 s ou à 20 événements via `navigator.sendBeacon`/`fetch keepalive` vers `POST /api/v1/admin/client-logs` (à créer, authentifié) ; plafond 20 événements/min/session, échantillonnage `info` à 10 %, `warn` et `error` à 100 % ; perte tolérée (pas de re-tentative infinie) ; aucune boucle (un échec d'envoi n'est jamais journalisé comme erreur réseau envoyée).
- Confidentialité : masquage récursif des clés `password`, `token`, `accessToken`, `authorization`, `cookie`, `email`, `reporterId`, `reporter`, `justification`, `text`, `content` et des motifs JWT/e-mail dans les messages ; aucune donnée de supporter, aucun contenu signalé, aucune URL avec paramètres de recherche (`q=`) ; pas de fingerprinting ni de tiers (aucun Google Analytics) ; données minimales (RGPD).
- Événements d'usage `trackAdminEvent(name, props)` typés par un catalogue fermé (`player_published`, `players_bulk_publish`, `quiz_ai_approved`, `quiz_ai_rejected`, `admin_job_retry`, `report_action_applied`, `export_started`, `import_csv_committed`…) ; propriétés limitées à des valeurs scalaires non identifiantes (compteurs, énumérations, durées) ; désactivables par `VITE_ANALYTICS=off`.
- Performance : `web-vitals` (LCP, INP, CLS, TTFB) rapportés avec la route et le profil réseau ; seuils d'alerte indicatifs LCP > 2,5 s, INP > 200 ms, CLS > 0,1 ; une alerte Graylog côté infrastructure (hors périmètre) peut s'appuyer dessus.
- Intégration : `ErrorBoundary`, `globalErrors` (voir `fnd-error-boundary-chunks`), intercepteur axios (erreurs 5xx avec `traceId`) et TanStack `QueryCache.onError` utilisent le logger ; plus aucun `console.*` direct (règle ESLint en erreur).

## 🛠️ Tâches

- [ ] Créer `src/lib/logger.ts`, `src/lib/logTransport.ts` (tampon, lots, `sendBeacon`), `src/lib/redact.ts` (masquage récursif) et `src/lib/analytics.ts` (`trackAdminEvent`, catalogue `ADMIN_EVENTS`).
- [ ] Créer `src/lib/webVitals.ts` (dépendance `web-vitals`, import dynamique après le premier rendu).
- [ ] Brancher le logger dans `ErrorBoundary`, `globalErrors`, `src/lib/axios.ts` (5xx) et `queryClient` (`onError`).
- [ ] Passer la règle ESLint `no-console` en `error` (exceptions : `logger.ts`, scripts).
- [ ] Ajouter `VITE_ANALYTICS` et `VITE_LOG_ENDPOINT` à `src/config/env.ts` et `.env.example`.
- [ ] Documenter dans l'issue API le contrat `POST /api/v1/admin/client-logs` (schéma, limites 50 Ko, 120 événements/min) et la corrélation `traceId`/`requestId` avec Graylog.
- [ ] Documenter dans `docs/ARCHITECTURE.md` le catalogue d'événements et les règles de confidentialité.
- [ ] Tests unitaires et d'intégration.

## ✔️ Critères d'acceptation

- [ ] Étant donné un événement contenant `{email:'a@b.fr', token:'xyz'}`, quand il est journalisé, alors les valeurs sont remplacées par `[masqué]`.
- [ ] Étant donné 30 erreurs en une minute, quand le transport s'exécute, alors 20 sont envoyées et le dépassement est compté.
- [ ] Étant donné `VITE_ANALYTICS=off`, quand `trackAdminEvent` est appelé, alors rien n'est envoyé.
- [ ] Étant donné une erreur de rendu React, quand elle survient, alors un événement `error` contenant la route normalisée `/joueurs/:id` et la `release` est envoyé.
- [ ] Étant donné l'API de logs indisponible, quand l'envoi échoue, alors l'application continue sans erreur visible ni boucle.

## 🧪 Tests à écrire

- [ ] redact.test.ts : clés sensibles, JWT, e-mails, récursivité.
- [ ] logTransport.test.ts : lots, plafond, échantillonnage (fake timers).
- [ ] analytics.test.ts : catalogue fermé, props scalaires.
- [ ] logger.test.ts : contexte et normalisation de la route.
- [ ] webVitals.test.ts : rapport après premier rendu.

## ♿ Accessibilité et i18n

- Aucun impact visuel ; le consentement n'est pas requis car aucun traceur tiers ni donnée personnelle n'est collecté (à confirmer avec la politique de confidentialité interne).

## 📚 Références

- CDC Admin §6.3, §6.4
- CDC Backend §9 (observabilité)
- CDC Global §11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
