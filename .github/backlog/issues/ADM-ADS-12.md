> **ADM-ADS-12** · UX / Ergonomie · Priorité **P0** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZB-04 : tags neutre, primaire, navy, succès, erreur, alerte, « EN DIRECT », tags grands, compteurs 99+, et statuts admin : Brouillon, En attente de traduction, Prête à publier, Publiée, Archivée, Suspendu 7 j, Banni, Urgent. `StatusBadge.tsx` existe en version partielle.

## ✅ Objectif

Badge générique + StatusBadge couvrant tous les statuts du CDC.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZB-04` — Badges, tags, avatars et écussons
_Module : Composants de base_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__desktop_light.webp?raw=true' width='330' alt='ZB-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__desktop_dark.webp?raw=true' width='330' alt='ZB-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__mobile_light.webp?raw=true' width='230' alt='ZB-04 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-04_badges-tags-avatars-et-ecussons__mobile_dark.webp?raw=true' width='230' alt='ZB-04 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 04 » · « Badges et visuels » · « Tags de statut, compteurs, avatars, portraits illustrés originaux et écussons génériques d’adversaires (initiales — jamais de logos officiels). » · « Tags et compteurs » · « Tags » · « Neutre » · « Primaire » · « Navy » · « Succès » · « Erreur » · « Alerte » · « Or » · « EN DIRECT » · « Tags grands » · « Liga · J11 » · « Résolu » · « Ferme dans 1 j » · « Compteurs et points » · « 99+ » · « Statuts admin » · « Badges de statut cohérents avec l’application (brouillon, publié, en attente, banni…). » · « Brouillon » · « En attente de traduction » · « Prête à publier » · « Publiée » · « Archivée » · « Suspendu 7 j » · « Banni » · « Urgent » · « À vérifier »

**Composants repérés** : `avatar`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-13%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22) · [MOB-ZB-11](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-11%5D%22) · [MOB-ZB-12](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-12%5D%22) · [MOB-ZB-18](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-ZB-18%5D%22)

## 📐 Règles de gestion

- Statuts joueur (CDC §4.2.1) : draft, awaiting-translation, ready, published, archived ; modération : suspended, banned, urgent ; comptes : active, invited, disabled ; système : operational, degraded, incident.
- Rayon 6, pastille ronde de statut + libellé ; couleurs success/warning/error/neutral/navy ; texte jamais seul par couleur.
- Compteur : 99+ au-delà de 99, pastille rouge sur navigation.
- Badges de rôle : Super-admin noir, Modérateur bleu, Content-manager rose.

## 🔄 Comportement et états

- Taille sm/md/lg ; variante `dot`.

## 🛠️ Tâches

- [ ] Refactorer `StatusBadge.tsx` avec dictionnaire `statusCatalog.ts` (clé → libellé FR + variante).
- [ ] Créer `badge.tsx` (cva) et `counter-badge.tsx`, `role-badge.tsx`.
- [ ] Mettre à jour les usages (PlayersPage).
- [ ] Stories de tous les statuts.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné status='awaiting-translation', alors « En attente de traduction » en variante warning.
- [ ] Étant donné 120 notifications, alors « 99+ » est affiché.
- [ ] Étant donné un statut inconnu, alors un badge neutre avec la clé s'affiche.

## 🧪 Tests à écrire

- [ ] Test composant : statusCatalog complet
- [ ] Test composant : compteur 99+
- [ ] Test composant : RoleBadge
- [ ] Test snapshot clair/sombre

## ♿ Accessibilité et i18n

- Pastille complétée par texte

## 🔗 Dépendances

À réaliser après : `ADM-ADS-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
