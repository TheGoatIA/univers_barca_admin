> **ADM-ADS-30** · UX / Ergonomie · Priorité **P1** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZD-06 : instantané 100 ms (pression, bascule), rapide 180 ms (chips, onglets, toasts), standard 280 ms (sheets, transitions), expressif 480 ms ; easing standard cubic-bezier(.2,0,0,1), sortie cubic-bezier(.4,0,.2,1) ; respect de « réduire les animations ».

## ✅ Objectif

Tokens partagés Flutter ↔ CSS appliqués à tous les composants.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZD-06` — Mouvement et tokens
_Module : Composants métier et responsive_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-06_mouvement-et-tokens__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-06_mouvement-et-tokens__desktop_light.webp?raw=true' width='330' alt='ZD-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-06_mouvement-et-tokens__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-06_mouvement-et-tokens__desktop_dark.webp?raw=true' width='330' alt='ZD-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-06_mouvement-et-tokens__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-06_mouvement-et-tokens__mobile_light.webp?raw=true' width='230' alt='ZD-06 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-06_mouvement-et-tokens__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZD/ZD-06_mouvement-et-tokens__mobile_dark.webp?raw=true' width='230' alt='ZD-06 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Qualité · 02 » · « Mouvement et tokens » · « Micro-animations soignées (validation de quiz, déblocage de badge, ouverture de la bulle IA) sans jamais nuire à la performance perçue. Tokens partagés Flutter ↔ CSS. » · « Durées et courbes » · « Instantané » · « 100 ms » · « Retour de pression, bascule » · « Rapide » · « 180 ms » · « Chips, onglets, toasts » · « Standard » · « 280 ms » · « Sheets, transitions de question » · « Expressif » · « 480 ms » · « Badge débloqué, montée de niveau » · « Easing standard » · « cubic-bezier(.2,0,0,1) » · « Easing sortie » · « cubic-bezier(.4,0,.2,1) » · « Respect de « réduire les animations » » · « Animations réduites : transitions instantanées » · « Micro-interactions clés » · « Validation d’un quiz » · « Couleur + icône immédiates, légère vibration haptique » · « Déblocage d’un badge » · « Pop de l’hexagone puis halo or » · « Ouverture de la bulle IA » · « Expansion circulaire vers le sheet » · « Série maintenue »

**Composants repérés** : `toggle`

</details>

## 📐 Règles de gestion

- Variables CSS `--dur-instant:100ms`, `--dur-fast:180ms`, `--dur-std:280ms`, `--dur-expressive:480ms`, `--ease-std`, `--ease-out`.
- Utilitaires Tailwind `duration-instant/fast/std/expressive`, `ease-std`.
- `prefers-reduced-motion: reduce` → durées 0 ms et suppression des transforms décoratifs ; framer-motion via `MotionConfig reducedMotion='user'`.
- Aucune animation > 480 ms.

## 🔄 Comportement et états

- Animation jamais bloquante pour l'action.

## 🛠️ Tâches

- [ ] Ajouter tokens dans `index.css` et `tailwind.config.ts`.
- [ ] Wrapper `MotionProvider` (framer-motion).
- [ ] Media query reduced-motion globale.
- [ ] Page Storybook « Mouvement ».
- [ ] Tests unitaires.

## ✔️ Critères d'acceptation

- [ ] Étant donné reduced-motion, alors les transitions durent 0 ms.
- [ ] Étant donné un onglet, alors la transition dure 180 ms.
- [ ] Étant donné framer-motion, alors reducedMotion='user'.

## 🧪 Tests à écrire

- [ ] Test unitaire : config tailwind durées
- [ ] Test composant : MotionProvider
- [ ] Test e2e : reduced-motion émulé

## ♿ Accessibilité et i18n

- Respect du réglage système

## 🔗 Dépendances

À réaliser après : `ADM-ADS-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
