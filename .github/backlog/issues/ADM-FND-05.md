> **ADM-FND-05** · Infrastructure · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`src/lib/queryClient.ts` fixe un `staleTime` unique de 30 s et un retry sur erreurs 5xx. Le CDC Admin §2.4 demande des clés hiérarchiques, un `staleTime` court (30 s) pour la modération et long (5 min) pour le contenu éditorial, l'invalidation explicite après mutation et une gestion optimiste limitée aux actions sans risque. WA ajoute `QueryCache`/`MutationCache.onError` pour les toasts.

## ✅ Objectif

Formaliser les conventions de cache dans le code (fabrique de clés, profils de fraîcheur, helpers d'invalidation et d'optimistic update).

## 📐 Règles de gestion

- Fabrique `src/lib/queryKeys.ts` : `keys.players.list(params)`, `keys.players.detail(id)`, `keys.quiz.*`, `keys.moderation.*`, `keys.groups.*`, `keys.dashboard.*` ; forme `[ressource, 'list'|'detail'|…, paramètres]` ; aucun littéral de clé dans les composants.
- Profils : `FRESHNESS.moderation = 30_000`, `FRESHNESS.editorial = 300_000`, `FRESHNESS.dashboard = 60_000`, `FRESHNESS.static = 3_600_000` (listes de pays, enums) ; chaque hook déclare son profil ; `gcTime` 10 min par défaut.
- Helpers : `invalidateModule(qc, 'players')` (préfixe), `optimisticUpdate(qc, key, updater)` avec rollback automatique en cas d'erreur ; l'usage de l'optimistic est interdit pour publication, bannissement, suspension, archivage groupé (documenté et testé par revue).
- Défauts : `refetchOnWindowFocus: false` (conservé), `retry` : jamais sur 4xx, 2 essais sur réseau/5xx, délai exponentiel ; `placeholderData: keepPreviousData` recommandé pour les listes paginées ; `throwOnError` désactivé.
- `meta.silent` et `meta.errorMessage` consommés par le gestionnaire d'erreur global de WA ; devtools (`@tanstack/react-query-devtools`) chargées uniquement en développement.
- Persistance du cache sur disque : non (données d'administration sensibles) ; le cache est purgé à la déconnexion (`queryClient.clear()`).

## 🛠️ Tâches

- [ ] Créer `src/lib/queryKeys.ts` et `src/lib/freshness.ts` ; migrer `PlayersPage` et les futurs hooks vers ces fabriques.
- [ ] Compléter `src/lib/queryClient.ts` (profils, retry, `gcTime`) sans casser `QueryCache` de WA.
- [ ] Créer `src/lib/queryHelpers.ts` : `invalidateModule`, `optimisticUpdate`.
- [ ] Brancher `queryClient.clear()` dans `authStore.clear()` (déconnexion, expiration, échec de refresh).
- [ ] Charger `ReactQueryDevtools` via import dynamique conditionné par `import.meta.env.DEV`.
- [ ] Ajouter un test de lint/convention interdisant les clés littérales (`queryKey: ['players'`) hors `queryKeys.ts`.
- [ ] Documenter les conventions dans `docs/ARCHITECTURE.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un hook de modération, quand il est créé, alors son `staleTime` vaut 30 s ; pour une fiche joueur 5 min.
- [ ] Étant donné une mutation, quand elle réussit, alors `invalidateModule(qc,'players')` invalide `list`, `detail` et `counters`.
- [ ] Étant donné une erreur 404, quand la requête échoue, alors aucune re-tentative n'est effectuée.
- [ ] Étant donné une déconnexion, quand `authStore.clear()` est appelé, alors le cache TanStack est vide.
- [ ] Étant donné une mutation optimiste en échec, quand l'erreur survient, alors le cache est restauré.

## 🧪 Tests à écrire

- [ ] queryKeys.test.ts : stabilité et unicité des clés.
- [ ] queryHelpers.test.ts : `optimisticUpdate` avec rollback.
- [ ] queryClient.test.ts : politique de retry.
- [ ] authStore.test.ts : purge du cache à la déconnexion.
- [ ] Test de lint sur les clés littérales.

## 📚 Références

- CDC Admin §2.4, §9.1
- WA error-mapping-toasts

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
