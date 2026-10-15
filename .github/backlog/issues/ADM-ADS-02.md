> **ADM-ADS-02** · UX / Ergonomie · Priorité **P0** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZA-03 : Barlow Condensed (600/700/800, majuscules, interlettrage +0,5 %) pour titres et scores ; Inter (400–800) pour le texte ; échelle ratio ~1,25 : display 47/56, h1 37, h2 30, h3 24, etc.

## ✅ Objectif

Exposer l'échelle comme classes Tailwind et styles de base cohérents avec le mobile.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZA-03` — Typographie
_Module : Fondations_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-03_typographie__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-03_typographie__desktop_light.webp?raw=true' width='330' alt='ZA-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-03_typographie__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-03_typographie__desktop_dark.webp?raw=true' width='330' alt='ZA-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-03_typographie__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-03_typographie__mobile_light.webp?raw=true' width='230' alt='ZA-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-03_typographie__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZA/ZA-03_typographie__mobile_dark.webp?raw=true' width='230' alt='ZA-03 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Fondations · 03 » · « Typographie » · « Barlow Condensed (esprit maillot sportif) pour les titres et les scores ; Inter, très lisible sur petit écran, pour le texte courant. Échelle modulaire de ratio ~1,25 partagée entre Flutter et l’admin React. » · « Familles » · « Titres & scores · Barlow Condensed » · « Més que un club » · « ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789 » · « Graisses 600 · 700 · 800 · majuscules · interlettrage +0,5 % » · « Texte courant · Inter » · « Ton compagnon culé, au quotidien. » · « Abcdefghijklmnopqrstuvwxyz ÀÉÈÇÑ 0123456789 — lisible à toutes les tailles, sur tous les écrans. » · « Graisses 400 · 500 · 600 · 700 · 800 » · « Échelle typographique » · « Display » · « display · 47 / 56 px » · « Univers Barça » · « Titres d’écran héros, scores » · « H1 » · « h1 · 37 px » · « Mon équipe Fantasy » · « Titres d’écran » · « H2 » · « h2 · 30 px » · « Classement mondial » · « Titres de section » · « H3 » · « h3 · 24 px » · « Prochain match » · « Titres de carte » · « Body large »

</details>

## 📐 Règles de gestion

- Polices auto-hébergées via @fontsource (déjà installées) ; `font-display: swap` ; préchargement de Inter variable.
- Échelle : display 47/56, h1 37, h2 30, h3 24, body-large, body 15, caption 12–13 ; ratio ≈ 1,25.
- Titres h1–h3 en Barlow Condensed uppercase tracking +0,5 % ; chiffres tabulaires pour KPI et tables.
- Texte courant jamais < 14 px (sauf caption 12 px non critique).

## 🔄 Comportement et états

- Mise à jour de la taille de base via préférence utilisateur (zoom navigateur jusqu'à 200 %) sans casse de layout.

## 🛠️ Tâches

- [ ] Définir `fontSize` dans tailwind.config.ts (display, h1, h2, h3, body-lg, body, caption) avec lineHeight.
- [ ] Classes utilitaires `.text-display`, `.tabular`.
- [ ] Mettre à jour `@layer base` pour h1–h3.
- [ ] Précharger la police dans `index.html`.
- [ ] Page Storybook « Typographie ».
- [ ] Test visuel de l'échelle.

## ✔️ Critères d'acceptation

- [ ] Étant donné un h1, alors la police est Barlow Condensed 37 px en majuscules.
- [ ] Étant donné un KPI, alors les chiffres sont tabulaires.
- [ ] Étant donné un zoom 200 %, alors aucun texte n'est tronqué.

## 🧪 Tests à écrire

- [ ] Test composant : h1 classes
- [ ] Test unitaire : config échelle
- [ ] Test visuel Storybook typo
- [ ] Test : preload présent

## ♿ Accessibilité et i18n

- Zoom 200 % validé

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
