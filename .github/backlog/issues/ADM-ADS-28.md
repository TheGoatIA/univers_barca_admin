> **ADM-ADS-28** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZD-04 : téléphone < 600 px, tablette 600–1100 px (2 à 3 colonnes, rail 96 px, sheets centrés 600 px, volets maître/détail), desktop admin > 1100 px (sidebar 256 px, tables complètes, panneaux latéraux, densité réglable). CDC §9.3 : desktop prioritaire, tablette ponctuelle.

## ✅ Objectif

Garantir un rendu fluide sur tablette sans viser la parité mobile.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZD-04` — Responsive — téléphone, tablette, desktop
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__desktop_light.webp?raw=true' width='330' alt='ZD-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__desktop_dark.webp?raw=true' width='330' alt='ZD-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__mobile_light.webp?raw=true' width='230' alt='ZD-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__mobile_dark.webp?raw=true' width='230' alt='ZD-04 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Responsive · 01 » · « Points de rupture » · « Une seule base de code Flutter (LayoutBuilder / MediaQuery) et un back-office React adaptatif. Les mêmes composants se recomposent selon la largeur disponible. » · « Téléphone » · « 600 px » · « 1 colonne · barre d’onglets inférieure (5 entrées) · sheets plein bord » · « Tablette » · « 600 – 1100 px » · « 2 à 3 colonnes · rail de navigation · sheets centrés 600 px · volets maître/détail » · « Desktop admin » · « > 1100 px » · « Sidebar 256 px · tables complètes · panneaux latéraux · densité réglable » · « Recomposition d’un écran : tableau de bord » · « Téléphone (390 px) » · « Prochain match » · « Jeu du jour · Quiz » · « Histoire du jour » · « Streak » · « XI Fantasy » · « Tablette (834 px) » · « Guess » · « Quiz » · « Recomposition : carte communautaire et admin » · « Carte · téléphone vs tablette » · « téléphone : feuille inférieure · tablette : panneau latéral flottant » · « Admin · desktop vs tablette » · « sidebar 256 px → rail icônes 72 px · tables à défilement contrôlé »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-15%5D%22) · [MOB-FND-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-16%5D%22)

## 📐 Règles de gestion

- Breakpoints Tailwind : `sm` 600, `lg` 1100 (`screens` personnalisés).
- Tables : défilement horizontal contrôlé avec colonne principale sticky ; cartes KPI 4→2→1 colonnes.
- Drawers deviennent panneaux centrés 600 px max sur tablette.
- Aucun défilement horizontal de page.

## 🔄 Comportement et états

- Test sur 834 × 1194 (iPad) et 1440 × 900.

## 🛠️ Tâches

- [ ] Configurer `theme.screens` (tablet 600, desktop 1100).
- [ ] Hook `useBreakpoint`.
- [ ] Grille `PageGrid` (12 colonnes) et `MasterDetail`.
- [ ] Tests Playwright de viewport.
- [ ] Revue des écrans existants.

## ✔️ Critères d'acceptation

- [ ] Étant donné 834 px, alors le rail est affiché et la table défile horizontalement dans son conteneur.
- [ ] Étant donné 1440 px, alors la sidebar est étendue.
- [ ] Étant donné 1100 px pile, alors le layout desktop s'applique.

## 🧪 Tests à écrire

- [ ] Test Playwright : viewport tablette
- [ ] Test composant : MasterDetail
- [ ] Test hook : useBreakpoint
- [ ] Test visuel dashboard

## ♿ Accessibilité et i18n

- Cibles tactiles ≥ 44 px sur tablette

## 🔗 Dépendances

À réaliser après : `ADM-ADS-15` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
