> **ADM-FND-04** · Infrastructure · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`src/lib/axios.ts` configure déjà `baseURL`, `withCredentials`, le jeton Bearer en mémoire (ADR 0003) et un refresh unique sans course (file de requêtes concurrentes). Chaque module répète `.then((r) => r.data.data)` pour dépaqueter `{success,data}`, aucun identifiant de corrélation n'est envoyé et les requêtes ne sont pas annulées quand un composant se démonte. WA gère `ApiError`/toasts ; ici on fiabilise le client lui-même. CDC Admin §2.7 et Backend §11.6 (codes 400/401/403/404/409/422/429/500/503).

## ✅ Objectif

Fournir un client typé qui dépaquette l'enveloppe, corrèle chaque requête et gère annulation, délais et re-tentatives sûres.

## 📐 Règles de gestion

- Helper `unwrap<T>(promise)` et client `http.get/post/patch/put/delete<T>()` retournant directement `data` (`ApiSuccess<T>`) ; les pages `{items,total,…}` sont typées `Paginated<T>` ; une réponse sans `success:true` est une erreur de contrat (`ApiContractError`).
- En-têtes : `X-Request-Id` (UUID v4 par requête, repris du `traceId` de réponse pour les journaux) et `Accept-Language: fr` ; les cookies httpOnly sont conservés (`withCredentials`) ; aucun jeton dans l'URL ni dans `localStorage`.
- Annulation : le `signal` de TanStack Query (`queryFn({signal})`) est transmis à axios ; la navigation annule les requêtes de lecture obsolètes.
- Délais : 20 s par défaut (déjà configuré), 120 s pour les exports et imports (`timeout` par appel) ; re-tentative automatique uniquement pour les GET idempotents sur erreur réseau/502/503/504 (2 essais, délai 500 ms puis 1 500 ms avec gigue) ; jamais pour POST/PATCH/PUT/DELETE.
- Rate limit 429 : respect de `Retry-After` (secondes) — message « Trop de requêtes, réessayez dans 12 s » ; le client n'envoie plus de requêtes sur ce domaine pendant la durée indiquée (file d'attente simple).
- Refresh de session : un seul `POST /admin/auth/refresh` pour N requêtes en 401 (déjà implémenté) ; les routes `/admin/auth/*` sont exclues du rejeu ; un échec de refresh purge la session et redirige vers `/login` ou `/session-expiree`.

## 🛠️ Tâches

- [ ] Créer `src/lib/http.ts` (client typé, `unwrap`, `ApiContractError`) et migrer `src/api/*.api.ts` vers ce client.
- [ ] Ajouter l'intercepteur de requête `X-Request-Id` et exposer `getLastTraceId()` pour les toasts d'erreur (WA).
- [ ] Implémenter `src/lib/retry.ts` (`isIdempotent(config)`, `backoff(attempt)`) et l'intercepteur de re-tentative.
- [ ] Gérer `Retry-After` dans `src/lib/rateLimit.ts` (mise en pause par origine).
- [ ] Passer `signal` dans toutes les `queryFn` (modèle `useQuery({queryFn:({signal}) => api.list(params,{signal})})`).
- [ ] Définir les timeouts longs pour `/admin/exports/*` et `/admin/*/import`.
- [ ] Écrire les tests de refresh concurrent (N requêtes → 1 refresh) et de purge de session.
- [ ] Documenter le client dans `docs/ARCHITECTURE.md` (section « Données serveur »).

## ✔️ Critères d'acceptation

- [ ] Étant donné 5 requêtes simultanées en 401, quand le jeton est expiré, alors un seul appel de refresh est émis et les 5 requêtes sont rejouées.
- [ ] Étant donné un GET en 503, quand la re-tentative s'applique, alors 2 essais supplémentaires sont tentés puis l'erreur est remontée.
- [ ] Étant donné un POST en 503, quand l'erreur survient, alors aucune re-tentative n'est effectuée.
- [ ] Étant donné une réponse 429 avec `Retry-After: 12`, quand l'erreur est affichée, alors le message mentionne 12 secondes et les nouvelles requêtes sont suspendues.
- [ ] Étant donné une page quittée avant la réponse, quand la navigation a lieu, alors la requête est annulée.

## 🧪 Tests à écrire

- [ ] http.test.ts : `unwrap`, contrat invalide, `X-Request-Id`.
- [ ] retry.test.ts : idempotence et backoff (fake timers).
- [ ] axios refresh : 5 requêtes concurrentes → 1 refresh ; échec de refresh → purge.
- [ ] rateLimit.test.ts : `Retry-After`.
- [ ] Test d'annulation par `AbortSignal`.

## 📚 Références

- CDC Admin §2.5, §2.7
- CDC Backend §10.2, §11.6
- docs/adr/0003-jeton-en-memoire.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
