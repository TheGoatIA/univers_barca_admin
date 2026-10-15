> **ADM-FND-06** · Infrastructure · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Le CDC Admin §2.1 et §2.2 prévoient des DTO alignés sur le contrat OpenAPI du backend (`shared/api/types`). L'API expose déjà `GET /api-docs.json` (protégé par authentification basique) et `swagger.json` dans son dépôt. Les groupes WC/WF/WG décrivent des endpoints admin « à créer » : les types doivent suivre le contrat réel pour éviter les divergences.

## ✅ Objectif

Générer et versionner les types d'API et vérifier leur dérive en CI.

## 📐 Règles de gestion

- Outil : `openapi-typescript` génère `src/types/api.generated.ts` à partir de `swagger.json` du dépôt API (copie versionnée dans `docs/openapi/api.json` ou récupération via `API_DOCS_URL` avec authentification basique en secret CI).
- Script `npm run api:types` (génération) et `npm run api:types:check` (échoue si le fichier généré diffère du fichier committé) ; ne jamais éditer le fichier généré (en-tête « NE PAS ÉDITER »).
- Les schémas Zod des modules restent la source de validation runtime ; un test de contrat compare les clés requises du schéma Zod aux champs du type généré pour les ressources principales (joueurs, quiz, signalements).
- Endpoints non encore documentés dans l'OpenAPI (routes « à créer ») : types manuels dans `src/types/<module>.ts` marqués `// TODO(openapi)` et listés dans `docs/openapi/ECARTS.md`.
- Mise à jour : une PR API qui modifie `swagger.json` déclenche une PR automatique côté admin (workflow `repository_dispatch` ou tâche planifiée hebdomadaire) pour régénérer.

## 🛠️ Tâches

- [ ] Ajouter `openapi-typescript` en devDependency et les scripts `api:types` / `api:types:check` dans `package.json`.
- [ ] Créer `scripts/fetch-openapi.mjs` (téléchargement authentifié, repli sur `docs/openapi/api.json`).
- [ ] Créer `docs/openapi/README.md` (procédure de mise à jour) et `ECARTS.md` (écarts client/API).
- [ ] Ajouter l'étape `api:types:check` à `admin-ci.yml` (job lint).
- [ ] Écrire le test de contrat `src/types/contract.test.ts` pour 3 ressources.
- [ ] Documenter la convention de nommage des types (`components['schemas']['Player']` ré-exportés dans `src/types/index.ts`).
- [ ] Configurer Dependabot/Action planifiée pour proposer la mise à jour.

## ✔️ Critères d'acceptation

- [ ] Étant donné une modification du contrat API, quand `npm run api:types:check` s'exécute, alors la CI échoue tant que les types ne sont pas régénérés.
- [ ] Étant donné `npm run api:types`, quand la commande s'exécute, alors `api.generated.ts` est produit sans erreur de compilation TypeScript.
- [ ] Étant donné un champ requis ajouté côté API, quand le test de contrat s'exécute, alors l'écart avec le schéma Zod est signalé.
- [ ] Étant donné l'absence d'accès à l'API de docs, quand le script s'exécute, alors il retombe sur la copie versionnée.

## 🧪 Tests à écrire

- [ ] Test du script `fetch-openapi` (mock réseau).
- [ ] contract.test.ts : clés requises Zod vs type généré.
- [ ] CI : échec sur dérive.
- [ ] Test de compilation (`tsc --noEmit`) avec le fichier généré.
- [ ] Test de ré-export des types.

## 📚 Références

- CDC Admin §2.1, §2.2
- CDC Backend §12.2 (documentation)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
