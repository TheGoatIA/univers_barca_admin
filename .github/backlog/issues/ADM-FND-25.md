> **ADM-FND-25** · Performance · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Le CDC Admin §9.1 impose le découpage par route (`React.lazy`), la pagination/filtrage côté serveur et un cache TanStack adapté. `vite.config.ts` définit déjà `manualChunks` (`react`, `data`, `charts`) et `App.tsx` charge les pages en lazy ; aucune mesure ni budget n'existe. Des bibliothèques lourdes arrivent avec les modules (Recharts pour les graphiques, génération XLSX/PDF, `framer-motion`, polices Barlow Condensed et Inter via `@fontsource`).

## ✅ Objectif

Mesurer, budgéter et garantir en CI que l'application reste rapide à charger sur un poste de travail standard.

## 📐 Règles de gestion

- Budgets (gzip) à valider à la première mesure : JavaScript initial (entrée + `react` + `data`) ≤ 250 Ko ; chaque chunk de route ≤ 90 Ko ; chunk `charts` (Recharts) ≤ 110 Ko et chargé uniquement par le tableau de bord, la page Performance et la supervision ; chunks `export-xlsx` ≤ 60 Ko et `export-pdf` ≤ 150 Ko chargés à la demande ; CSS ≤ 25 Ko ; polices : 2 familles, sous-ensemble latin uniquement (`@fontsource-variable/inter/wght`, `latin-400/600/700` pour Barlow).
- Script `scripts/check-bundle-size.mjs` : lit `dist/assets/*` et `dist/.vite/manifest.json`, calcule la taille gzip (`zlib`), compare à `bundle-budget.json` et échoue en cas de dépassement ; sortie tabulaire dans `GITHUB_STEP_SUMMARY` avec delta vs `main`.
- Analyse : `rollup-plugin-visualizer` (script `npm run analyze`, rapport `stats.html` en artefact CI) ; règle de revue : tout import d'une bibliothèque > 30 Ko gzip doit être justifié et chargé dynamiquement.
- Chargement : `React.lazy` pour toutes les pages, `import()` pour XLSX/PDF/Recharts/éditeurs lourds, `modulepreload` des chunks de la route d'accueil, `font-display: swap`, préchargement (`<link rel=preload as=font crossorigin>`) de la seule police de titre, images (`avatar`, vignettes) avec `loading='lazy'`, `decoding='async'`, `width/height` explicites (évite le CLS).
- Web Vitals cibles sur poste de travail (réseau câble, CPU moyen) : LCP ≤ 2,0 s, INP ≤ 200 ms, CLS ≤ 0,1 ; mesure Lighthouse CI sur la page de connexion et le tableau de bord (préférer des seuils en avertissement plutôt qu'en blocage au départ) ; le suivi réel passe par `web-vitals` (voir `fnd-journaux-front-analytics`).
- Tables : pas de virtualisation tant que la page ≤ 50 lignes (pagination serveur) ; si une vue devait dépasser 200 lignes (logs), recourir à `@tanstack/react-virtual` ; recherche avec `useDeferredValue`/debounce 300 ms pour éviter les rendus inutiles.

## 🛠️ Tâches

- [ ] Créer `bundle-budget.json` et `scripts/check-bundle-size.mjs` ; ajouter les scripts `check:bundle` et `analyze` à `package.json`.
- [ ] Ajouter `rollup-plugin-visualizer` (dev) et l'artefact `stats.html` dans la CI.
- [ ] Revoir `manualChunks` dans `vite.config.ts` : isoler `charts`, `export-*`, `radix` ; vérifier qu'aucune page n'importe Recharts statiquement.
- [ ] Configurer les polices en sous-ensembles latin dans `src/index.css` et le préchargement dans `index.html`.
- [ ] Ajouter `loading='lazy'`, `decoding='async'`, dimensions explicites dans `Avatar`/images (`src/components/shared`).
- [ ] Ajouter Lighthouse CI (`lighthouserc.json`) sur login et dashboard en mode avertissement.
- [ ] Consigner la baseline de chaque chunk dans `docs/PERFORMANCE.md` avec la procédure de mise à jour du budget.
- [ ] Brancher `check:bundle` sur `fnd-ci-pipeline`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un build, quand `npm run check:bundle` s'exécute, alors la taille gzip de chaque chunk est comparée au budget et le script échoue en cas de dépassement.
- [ ] Étant donné la page de connexion, quand elle se charge, alors Recharts et les bibliothèques d'export ne sont pas téléchargés.
- [ ] Étant donné un clic sur « Exporter » en Excel, quand je choisis le format, alors le chunk `export-xlsx` est téléchargé à ce moment.
- [ ] Étant donné Lighthouse CI sur le tableau de bord, quand il s'exécute, alors le LCP ≤ 2,0 s sinon un avertissement est émis.
- [ ] Étant donné des avatars en liste, quand la page s'affiche, alors le CLS reste ≤ 0,1.

## 🧪 Tests à écrire

- [ ] check-bundle-size.test.mjs : dépassement et passage.
- [ ] Test de build : absence de Recharts dans le chunk d'entrée.
- [ ] Test de chargement dynamique des exports.
- [ ] Lighthouse CI (avertissement) sur 2 pages.
- [ ] Mesure de CLS avec Playwright (`PerformanceObserver`).

## ♿ Accessibilité et i18n

- `prefers-reduced-motion` : désactiver les animations `framer-motion` non essentielles pour réduire le travail du navigateur.

## 📚 Références

- CDC Admin §9.1
- vite.config.ts

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
