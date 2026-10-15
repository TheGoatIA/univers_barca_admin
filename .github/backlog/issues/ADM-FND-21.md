> **ADM-FND-21** · Infrastructure · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`.github/workflows/admin-deploy.yml` construit l'image (versions `AAAAMMJJ.N`, ADR 0004), la pousse sur GHCR, la déploie par SSH sur le VPS (staging sur push `dev` port 8082, production sur push `main` port 8081) avec health check `/healthz` (12×5 s) et rollback automatique. Le CDC Admin §8.1 prévoit pour la production une **validation manuelle** avant déploiement et un environnement de staging éphémère pour les E2E ; §8.2 décrit aussi une restriction d'accès réseau (liste blanche d'IP/VPN) sur le reverse proxy de production.

## ✅ Objectif

Sécuriser la mise en production (approbation, tests post-déploiement, traçabilité, restriction d'accès).

## 📐 Règles de gestion

- Validation manuelle : les jobs de production utilisent l'environnement GitHub `production` avec **reviewers requis** (1 approbation minimum, hors auteur du déclenchement) et délai d'attente optionnel ; le staging reste automatique.
- Smoke tests post-déploiement (staging et production) : `GET /healthz` = 200 ; `GET /version.json` contient la version déployée ; `GET /` renvoie 200 avec les en-têtes de sécurité (CSP, `X-Frame-Options`, `Referrer-Policy`) ; `GET /api/v1/health` via le proxy = 200 ; la page `/login` contient le formulaire ; échec = rollback automatique vers l'image précédente (conservée) et notification.
- Traçabilité : tag git `staging-AAAAMMJJ.N` / `vAAAAMMJJ.N` (déjà fait), notes de version générées depuis `CHANGELOG.md` + commits conventionnels, `VITE_APP_VERSION` embarquée dans l'image (voir `fnd-env-config`), annotation de déploiement dans le journal (Graylog/Slack) avec version, auteur et durée.
- Restriction réseau de production : liste blanche d'IP ou VPN appliquée au reverse proxy hôte (le CDC illustre Traefik avec `ADMIN_IP_WHITELIST` ; le dépôt utilise un reverse proxy TLS vers `127.0.0.1:8081`) ; documenter la configuration réelle et un test de contrôle d'accès (requête hors liste → 403) dans le runbook ; la page `/healthz` reste joignable pour la supervision.
- Rollback manuel : workflow `workflow_dispatch` « Rollback » prenant une version cible (`prod-20261001.2`) et rejouant la séquence de déploiement ; les 5 dernières images sont conservées sur le VPS.
- Secrets par environnement (déjà documentés) ; rotation et moindre privilège de la clé SSH (`VPS_SSH_KEY` restreinte à `docker compose` via `command=` dans `authorized_keys`).

## 🛠️ Tâches

- [ ] Modifier `admin-deploy.yml` : ajouter `environment: production` (reviewers requis) aux jobs de production et `environment: staging` au staging.
- [ ] Créer le script `scripts/smoke-test.sh` (curl + vérifications d'en-têtes + version) et l'étape correspondante avant le rollback conditionnel.
- [ ] Créer le workflow `admin-rollback.yml` (`workflow_dispatch`, entrée `version`).
- [ ] Générer les notes de version (`gh release create` depuis `CHANGELOG.md`) lors du tag de production.
- [ ] Documenter le runbook de déploiement/rollback et la restriction d'accès dans `docs/DEPLOYMENT.md` (section « Production »).
- [ ] Mettre à jour `docker/docker-compose.*.yml` : étiquette de version, conservation des 5 dernières images (script `prune-images.sh`).
- [ ] Ajouter la notification Slack (existante) avec version et lien vers le run.
- [ ] Tester le rollback sur le staging (échec simulé via image défectueuse).

## ✔️ Critères d'acceptation

- [ ] Étant donné un push sur `main`, quand le workflow démarre, alors le job de production attend l'approbation d'un reviewer.
- [ ] Étant donné un déploiement dont `/version.json` ne correspond pas à la version, quand le smoke test s'exécute, alors le rollback automatique est déclenché.
- [ ] Étant donné une requête depuis une IP hors liste blanche en production, quand elle arrive sur `/`, alors la réponse est 403 et `/healthz` reste 200.
- [ ] Étant donné le workflow `admin-rollback` avec `prod-20261001.2`, quand il s'exécute, alors cette image est redéployée et le smoke test passe.
- [ ] Étant donné un déploiement réussi, quand il se termine, alors le tag `vAAAAMMJJ.N` et les notes de version existent.

## 🧪 Tests à écrire

- [ ] Test de `smoke-test.sh` avec serveur local (cas OK / en-tête manquant / mauvaise version).
- [ ] Essai de rollback sur staging.
- [ ] Vérification de la protection `environment: production`.
- [ ] Test de contrôle d'accès IP (manuel, documenté).
- [ ] Test du calcul de version (`AAAAMMJJ.N`) avec tags simulés.

## 📚 Références

- CDC Admin §8.1, §8.2
- docs/DEPLOYMENT.md
- docs/adr/0004-versions-aaaammjj-n.md

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
