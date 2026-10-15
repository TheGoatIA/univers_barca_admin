> **ADM-ADS-15** · UX / Ergonomie · Priorité **P0** · Taille **L** · Phase 0 — Socle technique

## 🎯 Contexte

ZB-06 : navigation admin (onglets), rail 96 px tablette, bandeaux d'état (« Hors-ligne · derniers contenus », « Connexion instable »). ZD-04 : desktop > 1100 px sidebar 256 px ; tablette 600–1100 px rail. Les maquettes montrent groupes PILOTAGE / CONTENU / COMMUNAUTÉ / SYSTÈME, compteurs rouges (Questions de quiz 12, Modération 18, Groupes locaux 4), barre de recherche Ctrl K, badge PRODUCTION, bascule de thème, cloche, avatar.

## ✅ Objectif

Layout responsive complet piloté par `navigation.ts`.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZB-06` — Navigation
_Module : Composants de base_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-06_navigation__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-06_navigation__desktop_light.webp?raw=true' width='330' alt='ZB-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-06_navigation__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-06_navigation__desktop_dark.webp?raw=true' width='330' alt='ZB-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-06_navigation__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-06_navigation__mobile_light.webp?raw=true' width='230' alt='ZB-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-06_navigation__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-06_navigation__mobile_dark.webp?raw=true' width='230' alt='ZB-06 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 06 » · « Navigation » · « Barre d’onglets à 5 entrées sur téléphone, rail de navigation sur tablette, barre d’application, onglets et fil d’Ariane côté admin. » · « Barre d’onglets (téléphone) » · « 5 onglets : Accueil, Jeux, Historique, Fantasy, Communauté — chaque onglet conserve sa propre pile de navigation. » · « Accueil actif » · « Accueil » · « Jeux » · « Historique » · « Fantasy » · « Communauté » · « pastille rouge = nouvelle activité » · « Fantasy actif » · « Rail de navigation (tablette) et barre d’application » · « Rail 96 px » · « Barre d’application » · « Calendrier » · « Quiz du jour » · « 125 ans d’histoire » · « Bandeaux d’état » · « Hors-ligne · derniers contenus » · « Connexion instable » · « Navigation admin » · « Onglets » · « Identité » · « Biographie » · « Statistiques » · « Photo » · « Contenu » · « Joueurs »

**Composants repérés** : `avatar`, `banner`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-10%5D%22) · [ADM-ADS-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-21%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22) · [MOB-FND-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-16%5D%22) · [MOB-FND-21](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-21%5D%22) · [MOB-ZB-15](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-15%5D%22) · [MOB-ZB-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-16%5D%22) · [MOB-ZB-17](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-17%5D%22) · [MOB-ZB-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-18%5D%22) · [MOB-ZE-03](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZE-03%5D%22)

#### `ZD-04` — Responsive — téléphone, tablette, desktop
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__desktop_light.webp?raw=true' width='330' alt='ZD-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__desktop_dark.webp?raw=true' width='330' alt='ZD-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__mobile_light.webp?raw=true' width='230' alt='ZD-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-04_responsive-telephone-tablette-desktop__mobile_dark.webp?raw=true' width='230' alt='ZD-04 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Responsive · 01 » · « Points de rupture » · « Une seule base de code Flutter (LayoutBuilder / MediaQuery) et un back-office React adaptatif. Les mêmes composants se recomposent selon la largeur disponible. » · « Téléphone » · « 600 px » · « 1 colonne · barre d’onglets inférieure (5 entrées) · sheets plein bord » · « Tablette » · « 600 – 1100 px » · « 2 à 3 colonnes · rail de navigation · sheets centrés 600 px · volets maître/détail » · « Desktop admin » · « > 1100 px » · « Sidebar 256 px · tables complètes · panneaux latéraux · densité réglable » · « Recomposition d’un écran : tableau de bord » · « Téléphone (390 px) » · « Prochain match » · « Jeu du jour · Quiz » · « Histoire du jour » · « Streak » · « XI Fantasy » · « Tablette (834 px) » · « Guess » · « Quiz » · « Recomposition : carte communautaire et admin » · « Carte · téléphone vs tablette » · « téléphone : feuille inférieure · tablette : panneau latéral flottant » · « Admin · desktop vs tablette » · « sidebar 256 px → rail icônes 72 px · tables à défilement contrôlé »

**Composants repérés** : `card`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-28%5D%22) · [MOB-FND-16](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-16%5D%22) · [MOB-ZC-01](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-01%5D%22) · [MOB-ZD-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZD-09%5D%22) · [MOB-ZD-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZD-10%5D%22)

## 📐 Règles de gestion

- Sidebar 256 px au-dessus de 1100 px ; rail 96 px (icônes + libellé court) entre 600 et 1100 px ; menu tiroir sous 600 px.
- Groupes d'entrées et visibilité par rôle (source unique `lib/navigation.ts`) ; compteurs via badges (99+).
- En-tête : fil d'Ariane, recherche globale, EnvBadge, ThemeToggle, cloche avec point rouge, menu profil (Super-admin/Modérateur).
- Bandeau hors-ligne/connexion instable sous l'en-tête.

## 🔄 Comportement et états

- Entrée active : fond primary/10 + texte primary + aria-current=page.
- Repli de la sidebar mémorisé (uiStore).

## 🛠️ Tâches

- [ ] Refactorer `Sidebar.tsx`, `Header.tsx`, `MainLayout.tsx`.
- [ ] Créer `Breadcrumbs.tsx`, `NavRail.tsx`, `MobileDrawer.tsx`, `ConnectionBanner.tsx` (navigator.onLine).
- [ ] Groupes et compteurs dans navigation.ts.
- [ ] Hook `useBreakpoint`.
- [ ] Stories + tests de rôles.

## ✔️ Critères d'acceptation

- [ ] Étant donné 1200 px, alors la sidebar 256 px est visible.
- [ ] Étant donné 900 px, alors le rail 96 px s'affiche.
- [ ] Étant donné la perte de réseau, alors le bandeau « Hors-ligne » apparaît.
- [ ] Étant donné un moderator, alors seules ses entrées sont visibles.

## 🧪 Tests à écrire

- [ ] Test composant : Sidebar par rôle
- [ ] Test composant : rail à 900 px
- [ ] Test composant : ConnectionBanner
- [ ] Test hook : useBreakpoint
- [ ] Test a11y navigation

## ♿ Accessibilité et i18n

- nav aria-label « Navigation principale », skip link « Aller au contenu »

## 🔗 Dépendances

À réaliser après : `ADM-ADS-12` · `ADM-ADS-03` · `ADM-ADS-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
