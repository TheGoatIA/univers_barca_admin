> **ADM-ADS-09** · UX / Ergonomie · Priorité **P0** · Taille **L** · Phase 0 — Socle technique

## 🎯 Contexte

ZB-03 : interrupteur 52×32 (off/on/désactivé), case à cocher 24×24 rayon 7 (admin : 18×18 avec état partiel), radio 24×24, curseur, compteur +/−, puces (chips) filtres, barres de progression. Les zones tactiles sont étendues à 44 pt.

## ✅ Objectif

Contrôles de formulaire accessibles réutilisés par flags, filtres et formulaires.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZB-03` — Contrôles de sélection
_Module : Composants de base_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__desktop_light.webp?raw=true' width='330' alt='ZB-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__desktop_dark.webp?raw=true' width='330' alt='ZB-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__mobile_light.webp?raw=true' width='230' alt='ZB-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__mobile_dark.webp?raw=true' width='230' alt='ZB-03 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 03 » · « Contrôles » · « Interrupteurs, cases, radios, segments, curseurs et puces : états repos, actif, désactivé. Les zones tactiles sont étendues à 44 pt. » · « Interrupteurs, cases et radios » · « Interrupteur » · « off · on · désactivé · 52×32 » · « Case à cocher » · « 24×24 · rayon 7 » · « Radio » · « 24×24 » · « Case admin » · « 18×18 · partiel » · « Segments, onglets, pagination » · « Contrôle segmenté » · « Amis » · « Monde » · « Segmenté à 3 » · « Décennie » · « Saison » · « Date » · « Indicateur d’étapes » · « stepper · pagination par points » · « Curseur et compteur » · « Curseur » · « Compteur +/− » · « Barres de progression » · « Puces (chips) » · « Filtres » · « Toutes » · « Liga »

**Composants repérés** : `btn`, `chip`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-08%5D%22) · [ADM-ADS-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-10%5D%22) · [ADM-ADS-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-11%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22) · [MOB-ZB-07](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-07%5D%22) · [MOB-ZB-08](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-08%5D%22) · [MOB-ZB-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-09%5D%22) · [MOB-ZB-10](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-10%5D%22) · [MOB-ZB-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-18%5D%22)

## 📐 Règles de gestion

- Switch Radix : piste success quand actif (cf. feature flags), pouce blanc, transition 180 ms.
- Checkbox admin 18×18 avec états coché/indéterminé (sélection de masse DataTable) ; radio 24×24 ; radio-carte (Rôle, WI-02).
- Slider Radix (rollout %, WI-05) ; compteur +/− borné ; Chip filtre sélectionnable/supprimable.
- Tous les contrôles ont une cible ≥ 44 × 44.

## 🔄 Comportement et états

- Désactivé : opacité 50 % + curseur interdit ; focus : anneau 3 px.

## 🛠️ Tâches

- [ ] Ajouter `@radix-ui/react-switch`, `react-checkbox`, `react-radio-group`, `react-slider`.
- [ ] Créer `switch.tsx`, `checkbox.tsx`, `radio-group.tsx`, `radio-card.tsx`, `slider.tsx`, `stepper-counter.tsx`, `chip.tsx`.
- [ ] Zone tactile étendue via pseudo-élément.
- [ ] Stories (tous états × thèmes).
- [ ] Tests clavier (Espace, flèches).

## ✔️ Critères d'acceptation

- [ ] Étant donné un Switch, quand j'appuie sur Espace, alors il bascule et annonce l'état.
- [ ] Étant donné une case indéterminée, alors aria-checked=mixed.
- [ ] Étant donné un slider, alors les flèches changent la valeur de 1 (Maj : 10).

## 🧪 Tests à écrire

- [ ] Test composant : Switch clavier
- [ ] Test composant : checkbox mixed
- [ ] Test composant : radio-card
- [ ] Test composant : slider valeurs
- [ ] Test a11y

## ♿ Accessibilité et i18n

- Labels visibles ou aria-label pour chaque contrôle

## 🔗 Dépendances

À réaliser après : `ADM-ADS-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
