> **ADM-ADS-31** · UX / Ergonomie · Priorité **P2** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZE-01 : ouverture d'un sheet 480 ms cubic-bezier(.16,1,.3,1) avec fond flouté +46 % ; modale pop + overshoot 3 % (500 ms) ; bonne réponse quiz (appui 100 ms, validation 220 ms, check 300 ms). Côté admin : dialog, drawer, toast, validation de formulaire.

## ✅ Objectif

Appliquer les images clés pertinentes à l'admin sans animation décorative.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZE-01` — Bibliothèque d’animations — images clés
_Module : Animations et micro-interactions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-01_bibliotheque-d-animations-images-cles__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-01_bibliotheque-d-animations-images-cles__desktop_light.webp?raw=true' width='330' alt='ZE-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-01_bibliotheque-d-animations-images-cles__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-01_bibliotheque-d-animations-images-cles__desktop_dark.webp?raw=true' width='330' alt='ZE-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-01_bibliotheque-d-animations-images-cles__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-01_bibliotheque-d-animations-images-cles__mobile_light.webp?raw=true' width='230' alt='ZE-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-01_bibliotheque-d-animations-images-cles__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-01_bibliotheque-d-animations-images-cles__mobile_dark.webp?raw=true' width='230' alt='ZE-01 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Mouvement · 01 » · « Animations clés » · « Chaque interaction a une réponse immédiate, un mouvement naturel et une fin nette. Ressorts doux, aucune animation décorative qui retarde l’action. Les images clés ci-dessous montrent le déroulé ; la version animée est dans le prototype interactif. » · « Univers Barça · Design System v1.1 » · « Mouvement & ergonomie » · « iOS · Android · Tablette » · « Entrées et surfaces » · « Ouverture d’un bottom sheet » · « Surface » · « 0 ms » · « 120 ms » · « 240 ms » · « 360 ms » · « 480 ms » · « 480 ms · cubic-bezier(.16,1,.3,1) · fond flouté +46 % · haptique : aucune » · « Modale (pop + overshoot) » · « 160 ms » · « 300 ms » · « 500 ms » · « 500 ms · ressort léger (overshoot 3 %) · haptique : notification succès » · « Jeux et gratification » · « Bonne réponse au quiz » · « Feedback » · « Rakitić » · « Repos » · « Appui · 100 ms » · « Validation · 220 ms » · « Check · 300 ms » · « +15 PTS » · « Gain · 600 ms »

</details>

## 📐 Règles de gestion

- Dialog : fade + scale 0,96 → 1 en 280 ms (ease-out) ; drawer : translateX 100 % → 0 en 280 ms ; scrim fade 180 ms.
- Toast : entrée 180 ms ; validation (bouton Envoyer → Envoyé) : coche 300 ms.
- Aucun overshoot sur les actions sensibles (garder sobriété back-office).
- Animations en transform/opacity uniquement (performance).

## 🔄 Comportement et états

- Reduced motion : transitions instantanées.

## 🛠️ Tâches

- [ ] Définir keyframes Tailwind (`dialog-in`, `drawer-in`, `toast-in`, `check-pop`).
- [ ] Appliquer aux composants dialog/drawer/toast/button.
- [ ] Page Storybook « Animations » avec lecture manuelle.
- [ ] Mesure FPS via Performance panel documentée.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné l'ouverture d'un dialog, alors l'animation dure 280 ms.
- [ ] Étant donné reduced-motion, alors aucune animation.
- [ ] Étant donné un drawer, alors seul transform/opacity est animé.

## 🧪 Tests à écrire

- [ ] Test unitaire : keyframes présents
- [ ] Test composant : classes d'animation
- [ ] Test e2e : reduced-motion
- [ ] Test visuel Storybook

## ♿ Accessibilité et i18n

- Respect reduced-motion

## 🔗 Dépendances

À réaliser après : `ADM-ADS-30` · `ADM-ADS-16` · `ADM-ADS-17` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
