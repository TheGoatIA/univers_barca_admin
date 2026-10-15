> **ADM-ADS-13** · UX / Ergonomie · Priorité **P1** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZB-04 : avatars et portraits ; la table des comptes affiche des avatars à initiales colorées (CD, KB, LM, NS, PH) et la sidebar l'utilisateur courant.

## ✅ Objectif

Composant Avatar avec image, initiales déterministes et fallback.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZB-04` — Badges, tags, avatars et écussons
_Module : Composants de base_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__desktop_light.webp?raw=true' width='330' alt='ZB-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__desktop_dark.webp?raw=true' width='330' alt='ZB-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__mobile_light.webp?raw=true' width='230' alt='ZB-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__mobile_dark.webp?raw=true' width='230' alt='ZB-04 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 04 » · « Badges et visuels » · « Tags de statut, compteurs, avatars, portraits illustrés originaux et écussons génériques d’adversaires (initiales — jamais de logos officiels). » · « Tags et compteurs » · « Tags » · « Neutre » · « Primaire » · « Navy » · « Succès » · « Erreur » · « Alerte » · « Or » · « EN DIRECT » · « Tags grands » · « Liga · J11 » · « Résolu » · « Ferme dans 1 j » · « Compteurs et points » · « 99+ » · « Statuts admin » · « Badges de statut cohérents avec l’application (brouillon, publié, en attente, banni…). » · « Brouillon » · « En attente de traduction » · « Prête à publier » · « Publiée » · « Archivée » · « Suspendu 7 j » · « Banni » · « Urgent » · « À vérifier »

**Composants repérés** : `avatar`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-12%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22)

## 📐 Règles de gestion

- Tailles 24/32/40/56 ; rond ; initiales = 2 premières lettres du nom, couleur déterministe parmi garnet, navy, vert, orange, violet, turquoise avec contraste AA.
- Image avec fallback initiales si erreur ; badge de statut optionnel (en ligne).
- Groupe empilé avec « +3 ».

## 🔄 Comportement et états

- Pas de nom → icône user.

## 🛠️ Tâches

- [ ] Étendre/Créer `avatar.tsx` (Radix Avatar) et `avatar-group.tsx`.
- [ ] Fonction `colorFromString(name)`.
- [ ] Stories.
- [ ] Tests de déterminisme.
- [ ] Mettre à jour Header/Sidebar.

## ✔️ Critères d'acceptation

- [ ] Étant donné « Camille Durand », alors les initiales « CD » sont affichées avec une couleur stable.
- [ ] Étant donné une image cassée, alors le fallback apparaît.
- [ ] Étant donné 5 avatars max 3, alors « +2 » est affiché.

## 🧪 Tests à écrire

- [ ] Test unitaire : colorFromString stable
- [ ] Test composant : fallback
- [ ] Test composant : groupe +N
- [ ] Test a11y

## ♿ Accessibilité et i18n

- alt = nom complet ou aria-hidden si redondant

## 🔗 Dépendances

À réaliser après : `ADM-ADS-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
