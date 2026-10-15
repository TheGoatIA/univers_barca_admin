> **ADM-FND-12** · Internationalisation · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Les maquettes utilisent des formats français précis : « 1 248 questions », « 71 % », « 184 k », « il y a 4 min », « hier », « 12 oct. », « 13/07/2007 », « 2e », « +1,2 pt ». Zod 4 produit par défaut des messages en anglais ; WC/WF/WG s'appuient sur des formats uniformes. Aucun module utilitaire ne les centralise aujourd'hui (`src/lib/utils.ts` seul).

## ✅ Objectif

Fournir des formateurs `Intl` français uniques et une table d'erreurs Zod en français.

## 📐 Règles de gestion

- `src/lib/format.ts` : `formatInt(1248)` → « 1 248 » (espace fine insécable U+202F), `formatPercent(71)` → « 71 % » (espace insécable avant %), `formatDecimal(1.2)` → « 1,2 », `formatCompact(184312)` → « 184 k », `formatDelta(1.2,'pt')` → « +1,2 pt », `formatBytes(43008)` → « 42 Ko » (unités françaises o, Ko, Mo).
- Dates : `formatDate(d)` → « 13/07/2007 », `formatShortDate(d)` → « 12 oct. » (année ajoutée si ≠ année courante : « 12 oct. 2025 »), `formatDateTime(d)` → « 15 oct. 2026 à 14:32 », `formatRelative(d)` → « il y a 4 min », « il y a 2 h », « hier », « il y a 4 mois » (date-fns `fr`), `formatOrdinal(2)` → « 2e » (« 1er » pour 1) ; fuseau : celui du navigateur, UTC en base ; formats ISO 8601 pour les exports.
- Table `zodErrorMap` en français (`z.config({ customError })`) : « Ce champ est obligatoire », « Doit contenir au moins {n} caractères », « Doit être un nombre entier », « Adresse e-mail invalide », « Valeur invalide » ; messages métier fournis par les schémas des modules (priorité).
- Tous les formateurs sont purs, testés avec une horloge injectable (`now`) ; aucun appel direct à `toLocaleString` dans les composants (règle ESLint).
- Comparaison des maquettes : chaque exemple de valeur ci-dessus figure dans les tests unitaires (jeu « golden » des maquettes).

## 🛠️ Tâches

- [ ] Créer `src/lib/format.ts` (nombres, pourcentages, octets) et `src/lib/dates.ts` (dates, relatif, ordinal) avec `now` injectable.
- [ ] Créer `src/lib/zod-fr.ts` (`z.config`) et l'importer dans `src/main.tsx` et `src/test/setup.ts`.
- [ ] Remplacer les formats ad hoc existants (`PlayersPage`, `DashboardPage`).
- [ ] Ajouter la règle ESLint interdisant `toLocaleString`/`toLocaleDateString` hors `src/lib/format.ts`.
- [ ] Ajouter un jeu de tests « golden » reprenant les valeurs des maquettes.
- [ ] Documenter les formats dans `docs/ARCHITECTURE.md`.
- [ ] Vérifier le rendu avec des chiffres tabulaires (`font-variant-numeric: tabular-nums`) dans les tables.

## ✔️ Critères d'acceptation

- [ ] Étant donné `formatInt(1248)`, quand la fonction est appelée, alors « 1 248 » avec espace insécable fine est retourné.
- [ ] Étant donné `formatRelative` à T-4 min, quand elle est appelée, alors « il y a 4 min » est retourné ; à T-30 h, « hier ».
- [ ] Étant donné `formatShortDate(2025-10-12)` en 2026, quand elle est appelée, alors « 12 oct. 2025 » est retourné.
- [ ] Étant donné un champ requis vide, quand Zod valide, alors « Ce champ est obligatoire » est affiché.
- [ ] Étant donné `formatOrdinal(1)`, quand elle est appelée, alors « 1er » est retourné.

## 🧪 Tests à écrire

- [ ] format.test.ts : valeurs des maquettes (1 248, 71 %, 184 k, +1,2 pt, 42 Ko).
- [ ] dates.test.ts : relatif, court, ordinal, horloge injectée.
- [ ] zod-fr.test.ts : messages par type d'erreur.
- [ ] Test de lint : `toLocaleString` interdit.
- [ ] Test de non-régression sur `PlayersPage`.

## ♿ Accessibilité et i18n

- Les espaces insécables évitent les coupures de ligne dans « 71 % » et « 1 248 » ; les dates relatives portent un attribut `datetime` ISO.

## 📚 Références

- CDC Admin §9.6
- Maquettes WC-01, WF-01, WF-04, WG-01

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
