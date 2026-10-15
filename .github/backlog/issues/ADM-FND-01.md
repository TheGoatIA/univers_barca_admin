> **ADM-FND-01** · Infrastructure · Priorité **P0** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

Le dépôt lit `import.meta.env.VITE_API_URL` directement dans `src/lib/axios.ts` (défaut `/api/v1`) et `VITE_ENV` n'est utilisé nulle part. Le CDC Admin §9.5 distingue développement, staging (`api-staging.univers-barca.app`) et production (`api.univers-barca.app`) et §6.7 impose la séparation stricte des données de test. Les variables Vite sont injectées au build et visibles dans le bundle (ADR de déploiement) : aucune ne doit contenir de secret.

## ✅ Objectif

Centraliser, typer et valider toutes les variables d'environnement front dans un module unique qui échoue explicitement au démarrage.

## 📐 Règles de gestion

- Variables : `VITE_API_URL` (défaut `/api/v1`), `VITE_ENV` (`development|staging|production|ci`), `VITE_APP_ENV_LABEL` (badge « PRODUCTION » de la barre supérieure, WB), `VITE_APP_VERSION` (injectée par la CI : `AAAAMMJJ.N`), `VITE_IDLE_TIMEOUT_MS` (défaut 28 800 000 = 8 h, WA), `VITE_QUIZ_QUEUE_WARN` (défaut 50), `VITE_LOG_ENDPOINT` (optionnel).
- Validation Zod à l'import de `src/config/env.ts` : si une variable est invalide ou si `VITE_API_URL` pointe vers l'environnement de production alors que `VITE_ENV='staging'` (garde de séparation, CDC §6.7), une erreur claire s'affiche (page de configuration invalide) plutôt qu'un comportement silencieux.
- Aucun accès direct à `import.meta.env` en dehors de `src/config/env.ts` (règle ESLint `no-restricted-properties`) ; export d'un objet `env` gelé et typé.
- `.env.example` documente chaque variable avec sa valeur par défaut et son usage ; un fichier `.env.staging.example` et `.env.production.example` décrivent les cibles du CDC §9.5 (sans secret).
- La version `VITE_APP_VERSION` et `VITE_ENV` sont affichées dans le pied de la sidebar (info-bulle) et ajoutées aux journaux front.

## 🛠️ Tâches

- [ ] Créer `src/config/env.ts` (schéma Zod, `env`, `isProd`, `isStaging`) et `src/config/EnvError.tsx` (page d'erreur de configuration).
- [ ] Mettre à jour `src/vite-env.d.ts` avec les types `ImportMetaEnv`.
- [ ] Remplacer les lectures directes dans `src/lib/axios.ts` et `index.html`.
- [ ] Ajouter la règle ESLint (`no-restricted-syntax` sur `import.meta.env` hors `src/config`).
- [ ] Mettre à jour `.env.example` et créer `.env.staging.example`, `.env.production.example`.
- [ ] Mettre à jour le `Dockerfile` (`ARG VITE_APP_VERSION`) et `admin-deploy.yml` (`build-args`) pour injecter la version.
- [ ] Documenter dans `docs/DEPLOYMENT.md` le tableau des variables et la garde staging/prod.
- [ ] Tests unitaires du schéma.

## ✔️ Critères d'acceptation

- [ ] Étant donné `VITE_ENV='foo'`, quand l'application démarre, alors la page « Configuration invalide » liste la variable fautive.
- [ ] Étant donné `VITE_ENV='staging'` et `VITE_API_URL` ciblant `api.univers-barca.app`, quand l'application démarre, alors une erreur de garde est affichée.
- [ ] Étant donné aucune variable fournie, quand l'application démarre en développement, alors les valeurs par défaut sont appliquées.
- [ ] Étant donné une variable optionnelle absente, quand `env` est lu, alors la valeur par défaut documentée est retournée.

## 🧪 Tests à écrire

- [ ] env.test.ts : valeurs par défaut, invalides, garde staging/prod.
- [ ] EnvError.test.tsx : rendu de la liste d'erreurs.
- [ ] lint : règle `no-restricted-syntax` détecte un accès direct.
- [ ] Test de build : `VITE_APP_VERSION` présente dans le bundle.
- [ ] Test du badge d'environnement (WB) basé sur `env`.

## ♿ Accessibilité et i18n

- La page de configuration invalide est lisible au clavier et en lecteur d'écran (`role='alert'`).

## 📚 Références

- CDC Admin §9.5, §6.7
- docs/DEPLOYMENT.md (variables de build)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
