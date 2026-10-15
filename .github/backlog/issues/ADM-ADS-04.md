> **ADM-ADS-04** · UX / Ergonomie · Priorité **P1** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZA-01 : emblème original (rayures blaugrana stylisées, jamais le logo officiel), wordmark « UNIVERS BARÇA », versions principale/monochrome, tailles minimales 24/32/48/64 px, zone de protection = hauteur du « U », icônes par flavor (prod, dev, staging). La sidebar admin montre emblème + wordmark + pastille ADMIN.

## ✅ Objectif

Intégrer l'identité de façon conforme et distinguer visuellement les environnements.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZA-01` — Identité et logo
_Module : Fondations_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-01_identite-et-logo__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-01_identite-et-logo__desktop_light.webp?raw=true' width='330' alt='ZA-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-01_identite-et-logo__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-01_identite-et-logo__desktop_dark.webp?raw=true' width='330' alt='ZA-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-01_identite-et-logo__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-01_identite-et-logo__mobile_light.webp?raw=true' width='230' alt='ZA-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-01_identite-et-logo__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-01_identite-et-logo__mobile_dark.webp?raw=true' width='230' alt='ZA-01 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Fondations · 01 » · « Identité visuelle » · « Univers Barça développe une identité propre et originale, clairement « fan-made » : aucun logo officiel, écusson ni maillot protégé. L'emblème s'inspire des rayures blaugrana de façon libre et stylisée. » · « Emblème et wordmark » · « Univers » · « Barça » · « Version principale » · « Version monochrome sur fond de marque » · « Emblème seul » · « Icône d'application » · « Univers Barça » · « flavor : prod » · « Dev » · « flavor : dev » · « Staging » · « flavor : staging » · « Tailles minimales » · « 24 px » · « 32 px » · « 48 px » · « 64 px » · « Zone de protection et usages » · « Marge de protection = hauteur de la lettre « U » du wordmark, sur les 4 côtés. » · « Toujours : utiliser l’emblème original sur fond uni ou dégradé de marque. » · « Toujours : contraste AA entre emblème et fond. » · « Jamais : reproduire le logo, l’écusson ou les maillots officiels du club. » · « Jamais : déformer, recolorer ou ajouter d’effets à l’emblème. »

</details>

**Issues liées sur ce même écran :** [MOB-FND-44](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-44%5D%22) · [MOB-ZA-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-09%5D%22) · [MOB-ZA-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-10%5D%22) · [MOB-ZA-13](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-13%5D%22) · [MOB-ZA-14](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZA-14%5D%22)

## 📐 Règles de gestion

- Composants `Logo` (variants full/mark/mono, tailles 24/32/48/64) ; marge de protection égale à la hauteur du « U » ; contraste AA sur fond.
- Interdits : logo/écusson/maillot officiels, déformation, recoloration hors versions prévues.
- Favicon et icône PWA par environnement (prod/staging/dev) ; badge « PRODUCTION » (rouge) / « STAGING » / « DEV » dans l'en-tête.
- Pastille « ADMIN » (navy clair) à côté du wordmark.

## 🔄 Comportement et états

- Logo cliquable vers le tableau de bord ; version mark seule quand la sidebar est repliée.

## 🛠️ Tâches

- [ ] Créer `src/components/brand/Logo.tsx` + assets SVG optimisés dans `public/brand/`.
- [ ] Favicons par flavor générés au build selon VITE_ENV (`vite.config.ts` transformIndexHtml).
- [ ] Composant `EnvBadge`.
- [ ] Mettre à jour `Sidebar.tsx` et `LoginPage`.
- [ ] Ajouter `NOTICE.md` rappelant l'absence d'éléments officiels.
- [ ] Page Storybook identité.

## ✔️ Critères d'acceptation

- [ ] Étant donné VITE_ENV=staging, alors le favicon et le badge sont ceux de staging.
- [ ] Étant donné la sidebar repliée, alors seul l'emblème est affiché.
- [ ] Étant donné une taille < 24 px demandée, alors le composant la refuse (typage).

## 🧪 Tests à écrire

- [ ] Test composant : Logo variants
- [ ] Test composant : EnvBadge par environnement
- [ ] Test unitaire : sélection du favicon
- [ ] Test a11y : alt/aria-label du logo

## ♿ Accessibilité et i18n

- Logo avec aria-label « Univers Barça — Accueil »

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
