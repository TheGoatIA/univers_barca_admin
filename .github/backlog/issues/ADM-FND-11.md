> **ADM-FND-11** · Internationalisation · Priorité **P0** · Taille **L** · Phase 0 — Socle technique

## 🎯 Contexte

L'interface d'administration est en français uniquement en V1 (CDC Admin §9.6) mais ses textes doivent être « centralisés plutôt que dispersés dans les composants » afin de permettre une internationalisation ultérieure sans réécriture. Le contenu géré, lui, est trilingue (FR/EN/ES) — c'est un sujet distinct (`TrilingualTextEditor`). Aujourd'hui les chaînes françaises sont en dur dans les pages (`PlayersPage`, `Sidebar`, `LoginPage`).

## ✅ Objectif

Mettre en place un catalogue typé de textes FR, un accesseur `t()` minimal et des règles de lint, sans dépendance i18n lourde.

## 📐 Règles de gestion

- Catalogue : `src/i18n/fr.ts` (objet imbriqué `as const`) organisé par module (`common`, `auth`, `players`, `quiz`, `moderation`, `errors`, `exports`) ; clés en anglais, valeurs en français ; typage des clés par `NestedKeyOf<typeof fr>`.
- Accesseur `t('players.empty.noData.title')` avec interpolation `{name}` et pluriels (`plural: { one, other }`, règle française : 0 et 1 au singulier) ; aucune bibliothèque externe (Intl natif) ; structure compatible avec une migration future vers `i18next` (même forme de clés).
- Textes figés : tout libellé visible, `aria-label`, `title`, message de validation Zod et toast passe par le catalogue ; les noms propres et données (noms de joueurs) ne sont pas dans le catalogue.
- Garde-fou : règle ESLint (`no-restricted-syntax` sur littéraux JSX contenant des lettres accentuées ou des mots français courants, avec liste d'exceptions) en **avertissement** dans un premier temps, **erreur** pour les nouveaux dossiers de module (`components/players|quiz|moderation|groups`).
- `<html lang='fr'>` conservé ; formats de date/nombre : voir `fnd-formats-intl-zod-fr` ; les libellés des statuts et enums viennent du catalogue (`fr.enums.playerStatus.published`).
- Test de complétude : aucune clé du catalogue inutilisée (script `npm run i18n:check`) ni clé utilisée absente.

## 🛠️ Tâches

- [ ] Créer `src/i18n/fr.ts`, `src/i18n/t.ts` (accesseur, interpolation, pluriel) et `src/i18n/index.ts`.
- [ ] Créer `scripts/i18n-check.mjs` (clés inutilisées/manquantes via AST TypeScript) et le script npm `i18n:check`.
- [ ] Migrer les chaînes des pages existantes (`LoginPage`, `PlayersPage`, `Sidebar`, `Header`, pages 403/404, `ErrorBoundary`) vers le catalogue.
- [ ] Ajouter la règle ESLint des littéraux JSX en dur (avertissement global, erreur pour les modules cibles).
- [ ] Créer le hook `useT()` (mémoïsé) et un wrapper de test `renderWithProviders` utilisant le catalogue réel.
- [ ] Documenter les conventions de nommage des clés dans `CONTRIBUTING.md` (verbes, contexte, pluriels).
- [ ] Prévoir `src/i18n/README.md` décrivant la migration future vers une deuxième langue.

## ✔️ Critères d'acceptation

- [ ] Étant donné `t('players.title')`, quand elle est appelée, alors « Joueurs » est retourné.
- [ ] Étant donné `t('common.selected', {count: 3})`, quand elle est appelée, alors « 3 sélectionnés » est retourné et « 1 sélectionné » pour 1.
- [ ] Étant donné une clé inexistante en développement, quand `t` est appelée, alors une erreur explicite est levée ; en production la clé brute est affichée et journalisée.
- [ ] Étant donné un nouveau composant avec un texte français littéral, quand le lint s'exécute, alors une erreur est signalée.
- [ ] Étant donné `npm run i18n:check`, quand une clé inutilisée existe, alors le script échoue.

## 🧪 Tests à écrire

- [ ] t.test.ts : interpolation, pluriels (0, 1, 2), clés manquantes.
- [ ] i18n-check.test.ts : détection clés inutilisées/manquantes.
- [ ] Test de lint sur un composant fautif.
- [ ] Test de migration : `LoginPage` rend les mêmes textes.
- [ ] Snapshot du catalogue (clés stables).

## ♿ Accessibilité et i18n

- Les `aria-label`, `title` et messages d'erreur sont dans le catalogue (aucune chaîne anglaise résiduelle).

## 📚 Références

- CDC Admin §9.6, §1
- CDC Global §2.14

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
