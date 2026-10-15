> **ADM-FND-17** · Tests · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`vite.config.ts` fixe aujourd'hui des seuils globaux faibles (lignes 25 %, fonctions 30 %, branches 30 %, statements 25 %) et exclut `src/components/ui/**`. Le CDC Admin §7.2 exige des seuils par couche : hooks (logique métier) ≥ 80 %, composants partagés du design system ≥ 75 %, un scénario E2E par module. Le setup (`src/test/setup.ts`) ne simule que `matchMedia` ; WA prévoit MSW et des factories, ADS un `renderWithProviders`.

## ✅ Objectif

Mettre en place les seuils par dossier, un setup de test complet et des conventions homogènes, sans dupliquer ce que WA/ADS livrent.

## 📐 Règles de gestion

- Seuils par glob (Vitest `coverage.thresholds`) : `src/hooks/**` 80 % (lignes, fonctions, statements) et 70 % branches ; `src/components/shared/**` 75 % ; `src/lib/**` 80 % ; reste du code 50 % ; montée progressive : cible atteinte à la fin de la phase 1 via un cliquet `scripts/coverage-ratchet.mjs` qui interdit toute baisse par rapport à `coverage-baseline.json`.
- Setup : MSW (`setupServer`, `onUnhandledRequest: 'error'`), `ResizeObserver`, `IntersectionObserver`, `Element.scrollIntoView`, `URL.createObjectURL`, `crypto.subtle`, `createImageBitmap`, `matchMedia`, `BroadcastChannel` mockés ; `console.error`/`console.warn` inattendus font échouer le test (liste blanche).
- Utilitaires : `renderWithProviders(ui, {route, role, queryClient})` (QueryClient frais sans retry, MemoryRouter, ThemeProvider, `Toaster`), `renderHookWithProviders`, `createQueryWrapper()`, `withRole('moderator')` ; factories centralisées `src/test/factories.ts` ; handlers MSW par module `src/test/handlers/*.ts` (si WA/ADS les ont déjà créés, étendre sans dupliquer).
- Conventions : requêtes accessibles (`getByRole`, `getByLabelText`) avant `data-testid` ; pas de `setTimeout` réels (fake timers) ; une horloge injectable pour les formats relatifs ; noms de test en français « affiche … quand … » ; un fichier `*.test.tsx` à côté du composant.
- Rapports : `text`, `lcov`, `json-summary` ; résumé de couverture par couche ajouté au `GITHUB_STEP_SUMMARY` ; les exclusions (`main.tsx`, `types`, `components/ui`) sont justifiées dans `docs/TESTING.md`.
- Seuil de rapidité : suite unitaire < 90 s en CI (`--pool=threads`, sharding si besoin).

## 🛠️ Tâches

- [ ] Modifier `vite.config.ts` : `coverage.thresholds` par glob, `setupFiles`, `restoreMocks`, `unstubGlobals`.
- [ ] Compléter `src/test/setup.ts` (mocks navigateur) et créer `src/test/server.ts` (MSW) si absent.
- [ ] Créer/compléter `src/test/utils.tsx` (`renderWithProviders`, `renderHookWithProviders`, `createQueryWrapper`).
- [ ] Créer `scripts/coverage-ratchet.mjs` et `coverage-baseline.json` ; ajouter l'étape à la CI.
- [ ] Créer `docs/TESTING.md` (pyramide, conventions, commandes, exemple CDC §7.3/§7.4).
- [ ] Ajouter un test de fumée vérifiant que `console.error` inattendu échoue.
- [ ] Ajouter le script npm `test:ci` (`vitest run --coverage --reporter=default --reporter=junit`).
- [ ] Publier le rapport JUnit comme artefact de CI.

## ✔️ Critères d'acceptation

- [ ] Étant donné un hook de `src/hooks` à 70 % de lignes, quand `npm run test:coverage` s'exécute, alors la CI échoue (seuil 80 %).
- [ ] Étant donné une requête non gérée par MSW, quand un test la déclenche, alors le test échoue avec un message explicite.
- [ ] Étant donné un `console.error` non attendu, quand un test l'émet, alors il échoue.
- [ ] Étant donné une baisse de couverture par rapport à la baseline, quand le cliquet s'exécute, alors la CI échoue.
- [ ] Étant donné `renderWithProviders(ui, {role:'moderator'})`, quand le composant est rendu, alors `useAuth().role` vaut `moderator`.

## 🧪 Tests à écrire

- [ ] utils.test.tsx : `renderWithProviders` (routes, rôles, QueryClient).
- [ ] setup.test.ts : mocks navigateur présents.
- [ ] coverage-ratchet.test.mjs : baisse refusée, hausse acceptée.
- [ ] Test de fumée de la liste blanche de console.
- [ ] Mesure du temps de la suite en CI.

## 📚 Références

- CDC Admin §7.1, §7.2, §7.3, §7.4
- vite.config.ts

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
