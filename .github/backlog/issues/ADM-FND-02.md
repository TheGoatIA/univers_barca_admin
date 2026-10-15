> **ADM-FND-02** · Infrastructure · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Le CDC Admin §2.1 impose quatre couches par module (api → hooks → components → pages) et la règle clé : aucun composant de `components/` n'importe `axiosInstance` ni un hook TanStack Query (§2.3.3). Le dépôt est organisé à plat (`src/api`, `src/hooks`, `src/components/<domaine>`, `src/pages/<module>`) alors que le CDC illustre `features/<module>` ; certaines specs (groupe WJ) citent `src/features/...`. Il faut trancher et faire respecter la règle automatiquement.

## ✅ Objectif

Figer la convention de structure et les dépendances autorisées, avec une règle de lint bloquante.

## 📐 Règles de gestion

- Convention retenue (à valider, alignée sur le code existant) : arborescence à plat par couche, un sous-dossier par module (`src/components/players/`, `src/pages/players/`, `src/api/players.api.ts`, `src/hooks/usePlayers.ts`) ; les modules WJ (`features/users-admin`, etc.) suivront la même convention ou une migration documentée.
- Dépendances autorisées : `pages → hooks, components, lib` ; `hooks → api, lib, store` ; `api → lib/axios` ; `components → components/ui, lib, types` (jamais `api/` ni `useQuery`/`useMutation`) ; `lib` et `types` ne dépendent de rien d'applicatif.
- Exception documentée : les composants « connectés » sont nommés `*Container.tsx` ou placés dans `pages/` ; les composants de `components/shared` sont purement présentationnels.
- La règle est appliquée par `eslint-plugin-boundaries` (ou `no-restricted-imports` par dossier) en erreur en CI ; les exceptions existantes sont listées dans une liste de tolérance datée à vider progressivement.
- Les chemins d'import utilisent l'alias `@/` ; les imports relatifs remontants (`../../`) sont interdits.

## 🛠️ Tâches

- [ ] Ajouter `eslint-plugin-boundaries` et configurer les éléments (`pages`, `hooks`, `api`, `components`, `lib`, `store`, `types`) dans `eslint.config.js`.
- [ ] Ajouter `no-restricted-imports` : `@tanstack/react-query` et `@/api/*` interdits dans `src/components/**`.
- [ ] Refactorer les violations existantes (par ex. `PlayersPage` importe `playersApi` : migration vers `usePlayers`).
- [ ] Documenter la convention et le schéma de dépendances (Mermaid) dans `docs/ARCHITECTURE.md` et `CONTRIBUTING.md`.
- [ ] Créer un gabarit de module `docs/templates/module/` (arbo vide + README) et un script `npm run new:module <nom>`.
- [ ] Ajouter une ADR `docs/adr/0005-structure-par-couche.md` actant la décision à plat vs `features/`.
- [ ] Ajouter la règle au hook `pre-push` et à la CI (`npm run lint`).

## ✔️ Critères d'acceptation

- [ ] Étant donné un composant de `src/components/players` important `@/api/players.api`, quand `npm run lint` s'exécute, alors une erreur de frontière est émise.
- [ ] Étant donné une page important un hook, quand le lint s'exécute, alors aucune erreur n'est produite.
- [ ] Étant donné `npm run new:module quiz`, quand le script s'exécute, alors l'arborescence du module est créée.
- [ ] Étant donné un import relatif `../../lib/utils`, quand le lint s'exécute, alors il est refusé au profit de `@/lib/utils`.

## 🧪 Tests à écrire

- [ ] Test de lint sur fixtures : un fichier valide et un fichier en violation.
- [ ] Test du script `new:module` (dossier temporaire).
- [ ] Vérification CI : le lint échoue sur une violation.
- [ ] Test d'alias `@/` (build).
- [ ] Revue : liste de tolérance vide à la fin de la phase 1.

## 📚 Références

- CDC Admin §2.1, §2.2, §2.3.3, §1.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
