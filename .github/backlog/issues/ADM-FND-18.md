> **ADM-FND-18** · Tests · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`playwright.config.ts` ne définit qu'un projet Chromium desktop et `tests/e2e/smoke.spec.ts` deux scénarios anonymes. Le CDC Admin §7.1 et §7.5 exigent des parcours critiques par rôle (connexion modérateur, publication d'un joueur trilingue…) et §6.7 impose que l'environnement de recette ne manipule que des données de test ou anonymisées. Les comptes de démonstration visibles dans les maquettes : Camille Durand (super-admin), Léa Martin (content-manager), Karim Benali (modérateur).

## ✅ Objectif

Fournir l'infrastructure E2E : comptes de test, authentification rapide par rôle, jeu de données reproductible et projets thème/viewport.

## 📐 Règles de gestion

- Fixtures `tests/e2e/fixtures/auth.ts` : `test.extend<{ asSuperAdmin, asContentManager, asModerator }>` ; connexion par API (`POST /admin/auth/login`, TOTP généré avec `otplib` pour le super-admin) puis `storageState` mis en cache par worker (le jeton d'accès étant en mémoire, une fixture de page réinitialise l'état via le cookie de refresh) ; jamais de connexion par l'UI sauf dans les tests d'authentification.
- Données : l'API de test est démarrée dans un environnement éphémère (`docker/docker-compose.e2e.yml` : API + MongoDB + Redis) alimenté par un script `seed:e2e` de l'API (71 joueurs, 1 248 questions dont 12 en attente IA, 18 signalements dont 6 urgents, 212 groupes dont 4 en attente, 3 comptes) ; réinitialisation par `POST /test/reset` (activé uniquement si `NODE_ENV=test`).
- Projets : `desktop-light` (1440×900), `desktop-dark` (`colorScheme: 'dark'`), `tablet-landscape` (1024×768), `tablet-portrait` (768×1024) ; les scénarios de smoke tournent sur `desktop-light` seulement, la suite complète sur les 4 en `dev`.
- Configuration : `workers: 2` en CI, `fullyParallel`, `retries: 1`, `trace: 'on-first-retry'`, `video: 'retain-on-failure'`, `screenshot: 'only-on-failure'`, `baseURL` depuis `E2E_BASE_URL` (défaut `http://localhost:4173`), `reporter` HTML + JUnit.
- Séparation des environnements (CDC §6.7) : le runner refuse de démarrer si `E2E_BASE_URL` pointe vers un domaine de production (garde dans `global-setup.ts`).
- Helpers : `expectToast(page, texte)`, `tabThrough(page, n)`, `mockApi(page, handlers)` pour les cas d'erreur, `uniqueName()` pour éviter les collisions.

## 🛠️ Tâches

- [ ] Réécrire `playwright.config.ts` (projets, `globalSetup`, reporters, garde d'environnement).
- [ ] Créer `tests/e2e/fixtures/auth.ts`, `tests/e2e/fixtures/data.ts`, `tests/e2e/helpers/*.ts`.
- [ ] Créer `tests/e2e/global-setup.ts` (vérification d'environnement, seed/reset, création des `storageState`).
- [ ] Créer `docker/docker-compose.e2e.yml` (API image `ghcr.io/thegoatia/univers_barca_api:staging-latest` + Mongo + Redis) et le script `npm run e2e:env`.
- [ ] Ajouter `otplib` en devDependency pour le TOTP des comptes de test ; stocker les secrets de test dans `.env.e2e` (non committé, secrets CI).
- [ ] Migrer `smoke.spec.ts` vers les nouvelles fixtures et ajouter un test de connexion par rôle.
- [ ] Documenter dans `docs/TESTING.md` le lancement local et en CI.
- [ ] Documenter la liste des endpoints de test à créer côté API (`/test/reset`, `seed:e2e`).

## ✔️ Critères d'acceptation

- [ ] Étant donné `asModerator`, quand un test s'exécute, alors la sidebar ne contient ni « Joueurs » ni « Supervision ».
- [ ] Étant donné `E2E_BASE_URL=https://admin.univers-barca.app`, quand Playwright démarre, alors le run est refusé par la garde d'environnement.
- [ ] Étant donné le projet `desktop-dark`, quand un test s'exécute, alors `data-theme='dark'` est posé.
- [ ] Étant donné une réinitialisation avant la suite, quand elle s'exécute, alors la base contient exactement 71 joueurs et 18 signalements.
- [ ] Étant donné un échec de test, quand le rapport est généré, alors la trace et la vidéo sont disponibles.

## 🧪 Tests à écrire

- [ ] tests/e2e/auth-roles.spec.ts : 3 rôles et sidebar.
- [ ] tests/e2e/smoke.spec.ts migré.
- [ ] Test de la garde d'environnement (unitaire sur la fonction).
- [ ] Test de `mockApi` (erreur 500 simulée).
- [ ] Test de `tabThrough` sur la page de connexion.

## ♿ Accessibilité et i18n

- Les fixtures exposent `expectNoA11yViolations(page)` (voir `fnd-a11y-ci`).

## 📚 Références

- CDC Admin §7.1, §7.5, §6.7
- playwright.config.ts

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
