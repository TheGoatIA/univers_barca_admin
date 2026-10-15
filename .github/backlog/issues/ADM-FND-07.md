> **ADM-FND-07** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`src/components/shared/ErrorBoundary.tsx` n'affiche qu'un écran « Une erreur est survenue » avec « Recharger » et journalise en console. Après un déploiement, un navigateur qui a l'ancien `index.html` en mémoire peut échouer à charger un chunk `assets/*.js` supprimé (`ChunkLoadError`/« Failed to fetch dynamically imported module »). WA `ui-404-erreur` fournit l'écran d'erreur serveur avec identifiant de corrélation ; il faut ici l'architecture des frontières.

## ✅ Objectif

Isoler les erreurs de rendu par route, récupérer automatiquement des chunks obsolètes et capter les erreurs hors React.

## 📐 Règles de gestion

- Trois niveaux : frontière globale (hors layout, écran plein page), frontière de layout (le menu reste utilisable) et frontière de route (`errorElement` React Router) affichant la page « Erreur » dans la zone de contenu avec « Réessayer » et « Retour au tableau de bord ».
- Chunk obsolète : détecter `ChunkLoadError`/`Failed to fetch dynamically imported module` ; recharger la page **une seule fois** (drapeau `sessionStorage.ub-chunk-reload`) avec conservation de l'URL ; si l'échec persiste, afficher « Une nouvelle version est disponible · Recharger ».
- Erreurs non capturées : `window.onerror` et `unhandledrejection` envoient un événement via le logger front (voir `fnd-journaux-front-analytics`) sans afficher d'écran bloquant ; seules les erreurs de rendu déclenchent un écran d'erreur.
- Chaque écran d'erreur affiche l'identifiant de corrélation (`traceId` de la dernière requête échouée ou un identifiant local `err-xxxx`) et un bouton « Copier l'identifiant » pour le support ; aucun détail technique (stack) n'est affiché hors développement.
- Les erreurs de rendu ne perdent pas les formulaires : le brouillon local (WA `useDraftAutosave`) reste disponible au retour.
- Version déployée : `GET /version.json` (généré au build : `{version, builtAt}`, `Cache-Control: no-store`) interrogé toutes les 10 min ; si la version diffère, bannière non bloquante « Nouvelle version disponible · Recharger ».

## 🛠️ Tâches

- [ ] Refondre `src/components/shared/ErrorBoundary.tsx` (props `level`, `fallback`, `onError`, bouton « Réessayer » qui réinitialise la frontière).
- [ ] Ajouter `errorElement` aux routes de `src/app/routes.tsx` et créer `RouteErrorPage.tsx`.
- [ ] Créer `src/lib/chunkReload.ts` (`isChunkError`, `reloadOnce`) et l'intégrer au routeur (`router.subscribe`/`lazy` wrapper `lazyWithRetry`).
- [ ] Créer `src/lib/globalErrors.ts` (listeners `onerror`/`unhandledrejection`) initialisé dans `main.tsx`.
- [ ] Créer `scripts/write-version.mjs` (génère `dist/version.json`) et `useVersionCheck()` + `NewVersionBanner.tsx`.
- [ ] Créer `CopyIdButton.tsx` et afficher `traceId`.
- [ ] Écrire les tests de reprise (simulation d'import dynamique en échec).
- [ ] Documenter le comportement dans `docs/ARCHITECTURE.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné une erreur de rendu dans la page Joueurs, quand elle survient, alors la sidebar reste affichée et un écran d'erreur apparaît dans la zone de contenu.
- [ ] Étant donné un chunk introuvable, quand la page est chargée, alors elle est rechargée une fois ; si l'erreur persiste, le message de nouvelle version s'affiche sans boucle.
- [ ] Étant donné `version.json` différent de la version embarquée, quand la vérification s'exécute, alors la bannière « Nouvelle version disponible » apparaît.
- [ ] Étant donné une promesse rejetée non capturée, quand elle survient, alors un événement est journalisé sans écran bloquant.
- [ ] Étant donné un écran d'erreur, quand je clique « Copier l'identifiant », alors l'identifiant est copié dans le presse-papiers.

## 🧪 Tests à écrire

- [ ] ErrorBoundary.test.tsx : niveaux, « Réessayer », reset.
- [ ] chunkReload.test.ts : une seule recharge.
- [ ] useVersionCheck.test.tsx : bannière sur changement de version.
- [ ] globalErrors.test.ts : listeners et journalisation.
- [ ] e2e : chunk 404 simulé (route interceptée).

## ♿ Accessibilité et i18n

- Écrans d'erreur en `role='alert'` avec focus sur le titre ; bannière de version `role='status'` non bloquante.

## 📚 Références

- CDC Admin §2.5, §9.1
- docs/adr/0004-versions-aaaammjj-n.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
