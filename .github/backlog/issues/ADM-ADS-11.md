> **ADM-ADS-11** · UX / Ergonomie · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZB-03 montre un « indicateur d'étapes : stepper · pagination par points ». Dans l'admin : parcours multi-étapes (activation de compte : mot de passe → 2FA, sanction : choix → gravité → justification → confirmation).

## ✅ Objectif

Composant Stepper horizontal/vertical accessible.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZB-03` — Contrôles de sélection
_Module : Composants de base_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__desktop_light.webp?raw=true' width='330' alt='ZB-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__desktop_dark.webp?raw=true' width='330' alt='ZB-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__mobile_light.webp?raw=true' width='230' alt='ZB-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-03_controles-de-selection__mobile_dark.webp?raw=true' width='230' alt='ZB-03 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 03 » · « Contrôles » · « Interrupteurs, cases, radios, segments, curseurs et puces : états repos, actif, désactivé. Les zones tactiles sont étendues à 44 pt. » · « Interrupteurs, cases et radios » · « Interrupteur » · « off · on · désactivé · 52×32 » · « Case à cocher » · « 24×24 · rayon 7 » · « Radio » · « 24×24 » · « Case admin » · « 18×18 · partiel » · « Segments, onglets, pagination » · « Contrôle segmenté » · « Amis » · « Monde » · « Segmenté à 3 » · « Décennie » · « Saison » · « Date » · « Indicateur d’étapes » · « stepper · pagination par points » · « Curseur et compteur » · « Curseur » · « Compteur +/− » · « Barres de progression » · « Puces (chips) » · « Filtres » · « Toutes » · « Liga »

**Composants repérés** : `btn`, `chip`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-08%5D%22) · [ADM-ADS-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-09%5D%22) · [ADM-ADS-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-10%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22)

## 📐 Règles de gestion

- Étapes numérotées avec états à venir / en cours / terminée (coche) / en erreur.
- Variante compacte « Étape 2 sur 4 » + barre de progression ; variante points.
- Navigation arrière possible vers les étapes terminées, jamais vers l'avant sans validation.
- Largeur adaptative ; vertical sous 600 px.

## 🔄 Comportement et états

- Étape en erreur : icône + texte, focus sur le premier champ invalide.

## 🛠️ Tâches

- [ ] Créer `stepper.tsx` (Stepper, Step, useStepper).
- [ ] Hook `useStepper({steps, onComplete})`.
- [ ] Variantes `numbered`, `dots`, `compact`.
- [ ] Stories + intégration exemple avec RHF.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné l'étape 2/4, alors les étapes 1 sont terminées (coche) et 3-4 à venir.
- [ ] Étant donné un retour à l'étape 1, alors les données saisies sont conservées.
- [ ] Étant donné une étape invalide, alors on ne peut pas avancer.

## 🧪 Tests à écrire

- [ ] Test composant : états étapes
- [ ] Test hook : useStepper
- [ ] Test composant : navigation arrière
- [ ] Test a11y : aria-current=step

## ♿ Accessibilité et i18n

- aria-current='step' + texte « Étape 2 sur 4 »

## 🔗 Dépendances

À réaliser après : `ADM-ADS-06` · `ADM-ADS-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
