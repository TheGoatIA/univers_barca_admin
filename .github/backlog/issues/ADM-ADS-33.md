> **ADM-ADS-33** · UX / Ergonomie · Priorité **P2** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZE-03 (zone du pouce, CTA en bas, actions destructives éloignées) concerne le mobile ; pour l'admin, usage tablette ponctuel (CDC §9.3) : appliquer les règles pertinentes de placement.

## ✅ Objectif

Rendre l'admin utilisable à deux mains sur tablette sans régression desktop.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZE-03` — Ergonomie — zone du pouce et gestes
_Module : Animations et micro-interactions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-03_ergonomie-zone-du-pouce-et-gestes__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-03_ergonomie-zone-du-pouce-et-gestes__desktop_light.webp?raw=true' width='330' alt='ZE-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-03_ergonomie-zone-du-pouce-et-gestes__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-03_ergonomie-zone-du-pouce-et-gestes__desktop_dark.webp?raw=true' width='330' alt='ZE-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-03_ergonomie-zone-du-pouce-et-gestes__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-03_ergonomie-zone-du-pouce-et-gestes__mobile_light.webp?raw=true' width='230' alt='ZE-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-03_ergonomie-zone-du-pouce-et-gestes__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZE/ZE-03_ergonomie-zone-du-pouce-et-gestes__mobile_dark.webp?raw=true' width='230' alt='ZE-03 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Ergonomie · 01 » · « Ergonomie à une main » · « Conçu pour les grands smartphones : les actions principales sont dans la zone du pouce, les informations en haut, les gestes naturels (balayage arrière, tirer pour actualiser, appui long) sont toujours disponibles. » · « Univers Barça · Design System v1.1 » · « Mouvement & ergonomie » · « iOS · Android · Tablette » · « Zone du pouce » · « Carte d’atteinte pour une main droite sur un écran de 6,7″. Les éléments les plus fréquents (onglets, bouton d’action, bulle IA) sont dans la zone verte. » · « Titre + actions » · « Action principale » · « Facile » · « Atteignable » · « Difficile » · « Règles de placement » · « Actions principales (CTA) fixées en bas, au-dessus de la barre d’onglets. » · « Navigation principale et bulle IA toujours dans la zone verte. » · « Informations de lecture (scores, titres) en haut : pas besoin de les atteindre. » · « Actions destructives éloignées des CTA et toujours confirmées. » · « Fermeture des sheets par balayage vers le bas, sans viser la croix. » · « Actions secondaires en haut à droite : doublées par un geste ou un appui long. » · « Tablette · deux mains » · « rail de navigation à gauche, accessible au pouce gauche ; panneaux maître/détail ; sheets centrés » · « Gestes » · « Balayer depuis le bord gauche » · « Retour (iOS) ou geste système (Android) » · « Tirer vers le bas » · « Actualiser un écran ou fermer un sheet » · « Appui long » · « Aperçu rapide, options d’un message, copie » · « Glisser-déposer »

</details>

**Issues liées sur ce même écran :** [MOB-ZC-09](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZC-09%5D%22) · [MOB-ZE-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZE-11%5D%22) · [MOB-ZE-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZE-12%5D%22) · [MOB-ZE-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZE-18%5D%22)

## 📐 Règles de gestion

- Cibles ≥ 44 × 44 pt et espacement ≥ 8 px entre cibles sur tablette.
- Actions principales dans l'en-tête de page (en haut à droite) ; actions destructives séparées visuellement des actions principales (jamais adjacentes sans écart de 16 px).
- Pas d'interaction survol-seul ; menus ⋮ tactiles.
- Actions de masse : barre fixe en bas d'écran sur tablette.

## 🔄 Comportement et états

- Orientation portrait/paysage gérée.

## 🛠️ Tâches

- [ ] Auditer les écrans existants (table d'actions, dialogs).
- [ ] Classes utilitaires `touch-target`.
- [ ] Barre `BulkActionBar` sticky bottom.
- [ ] Tests Playwright en émulation tactile.
- [ ] Documentation des règles.

## ✔️ Critères d'acceptation

- [ ] Étant donné une tablette, alors toutes les cibles font ≥ 44 px.
- [ ] Étant donné Bannir, alors un écart de 16 px le sépare de Avertir.
- [ ] Étant donné un survol impossible, alors toutes les infos restent accessibles.

## 🧪 Tests à écrire

- [ ] Test Playwright : cible 44 px
- [ ] Test composant : écart destructif
- [ ] Test : pas de dépendance au hover

## ♿ Accessibilité et i18n

- Cibles tactiles

## 🔗 Dépendances

À réaliser après : `ADM-ADS-28` · `ADM-ADS-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
