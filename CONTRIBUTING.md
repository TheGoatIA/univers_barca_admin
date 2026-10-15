# Contribuer au back-office

Communication (issues, PR, revues) en **français**.

## Flux Git

```
main  ← production (protégée)     dev ← intégration / staging (protégée, cible des PR et de Dependabot)
feat/<n°issue>-<slug> · fix/… · refactor/… · docs/… · chore/… · test/… · ci/…
```

Commits [Conventional Commits](https://www.conventionalcommits.org/fr/) vérifiés par commitlint (Husky). PR vers `dev`, modèle fourni, **captures d'écran clair + sombre** pour toute modification d'interface, fusion en squash.

## Conventions

| Élément    | Règle                                                                         |
| ---------- | ----------------------------------------------------------------------------- |
| Composant  | `PascalCase`, export nommé (`StatusBadge`)                                    |
| Page       | `PascalCase` + `Page`, **export default** (lazy-loading)                      |
| Layout     | suffixe `Layout`                                                              |
| Hook       | `useXxx`                                                                      |
| Appels API | `src/api/<domaine>.api.ts` uniquement — jamais d'appel HTTP dans un composant |
| Store      | `xxxStore.ts` (Zustand)                                                       |
| Imports    | alias `@/` (jamais `../../../`)                                               |

- État : Zustand (auth, thème, sidebar), TanStack Query (toute donnée serveur), `useState` local (formulaires).
- Formulaires : React Hook Form + Zod, messages en français.
- Styles : classes Tailwind basées sur les **tokens** (`bg-surface`, `text-content-2`, `text-primary`…), jamais de couleur en dur ; tester clair et sombre.
- Accessibilité : labels associés aux champs, rôles ARIA, focus visible, zones tactiles ≥ 44 px, `prefers-reduced-motion` respecté.
- Textes de l'interface : français uniquement.
- Aucun secret dans le dépôt ; `VITE_*` est public par nature.

## Qualité locale

```bash
npm run lint && npm run format:check && npm run typecheck && npm test
```
