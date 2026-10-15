> **ADM-FND-20** · Infrastructure · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`.github/workflows/admin-ci.yml` exécute sur chaque PR (branches `dev` et `main`) : ESLint, Prettier, `tsc`, tests avec couverture, build, Playwright, commitlint, build Docker sans push, npm audit, TruffleHog et Trivy. Le CDC Admin §8.1 prévoit des seuils de couverture bloquants et l'exécution de la suite E2E sur merge contre un environnement éphémère ; l'état actuel exécute Playwright sur chaque PR avec un simple `preview` statique (sans API). Il reste à durcir et compléter.

## ✅ Objectif

Faire de la CI le garde-fou fiable des phases suivantes (couverture par couche, budget de bundle, types API, i18n, a11y, e2e avec API).

## 📐 Règles de gestion

- Jobs bloquants sur PR : `lint-and-build` (ESLint `--max-warnings 0`, Prettier, `tsc`, `i18n:check`, `api:types:check`, tests + seuils par couche, build, `check-bundle-size`), `commitlint`, `docker-build`, `security-scan` ; `npm audit` devient bloquant pour `high` en production (suppression de `continue-on-error`) avec liste d'exceptions `audit-exceptions.json` datée.
- E2E : sur PR, sous-ensemble « smoke + parcours critiques » (étiqueté `@critical`) contre l'API éphémère (`docker-compose.e2e.yml`) ; suite complète (4 projets thème/viewport + a11y) à chaque push sur `dev` et en planification nocturne ; conservation des traces 7 jours.
- Optimisations : `concurrency` par branche (déjà présent), cache npm et navigateurs Playwright (déjà présents), exécution parallèle lint/test, `paths-ignore` pour `docs/maquettes/**` et `.github/backlog/**` (déjà présent), sharding Playwright (2 shards) si la suite dépasse 8 min.
- Protection de branches (documentée, appliquée manuellement) : `dev` et `main` exigent les statuts `lint-and-build`, `e2e-critical`, `commitlint`, `docker-build`, `security-scan`, une revue approuvée, historique linéaire ; `CODEOWNERS` sur `src/lib/permissions.ts`, `docker/**`, `.github/workflows/**`.
- Retour développeur : commentaire de PR (action) avec couverture par couche, taille de bundle vs `main`, nombre de violations a11y ; durée totale cible ≤ 12 min pour les jobs bloquants.
- Dépendances : Dependabot hebdomadaire groupé (déjà présent) ; mises à jour majeures (React, Vite, Zod) marquées « manual-review ».

## 🛠️ Tâches

- [ ] Modifier `.github/workflows/admin-ci.yml` : ajouter les étapes `i18n:check`, `api:types:check`, `check-bundle-size`, `coverage-ratchet` ; rendre `npm audit` bloquant.
- [ ] Créer le job `e2e-critical` (démarrage `docker compose -f docker/docker-compose.e2e.yml`, attente de `/health`, `npx playwright test --grep @critical`).
- [ ] Créer le workflow `.github/workflows/admin-e2e-full.yml` (push `dev` + cron nocturne, 4 projets, shards).
- [ ] Créer l'action composite `.github/actions/setup-node-cached` pour factoriser installation et cache.
- [ ] Ajouter l'action de commentaire de PR (couverture, bundle, a11y) avec `GITHUB_STEP_SUMMARY`.
- [ ] Mettre à jour `.github/CODEOWNERS` et documenter la protection de branches dans `docs/DEPLOYMENT.md` et `CONTRIBUTING.md`.
- [ ] Ajouter `audit-exceptions.json` et le script de contrôle de péremption.
- [ ] Mesurer la durée des jobs et consigner la baseline dans `docs/TESTING.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné une PR dont la couverture des hooks passe sous 80 %, quand la CI s'exécute, alors le job `lint-and-build` échoue.
- [ ] Étant donné une PR qui ajoute 80 Ko gzip au bundle initial, quand `check-bundle-size` s'exécute, alors la CI échoue.
- [ ] Étant donné une PR sans changement des types API, quand `api:types:check` s'exécute, alors le job passe.
- [ ] Étant donné un push sur `dev`, quand la CI s'exécute, alors la suite E2E complète sur 4 projets est lancée.
- [ ] Étant donné une vulnérabilité `high` en dépendance de production, quand `npm audit` s'exécute, alors le job échoue sauf exception valide.

## 🧪 Tests à écrire

- [ ] Test du script `check-bundle-size` sur une sortie de build fictive.
- [ ] Test du script de péremption `audit-exceptions.json`.
- [ ] Test à blanc du workflow (`act` ou PR de test) documenté.
- [ ] Vérification manuelle des statuts requis dans la protection de branche.
- [ ] Mesure : durée ≤ 12 min sur 5 exécutions consécutives.

## 📚 Références

- CDC Admin §8.1, §7.2
- docs/DEPLOYMENT.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
