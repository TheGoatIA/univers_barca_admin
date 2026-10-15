> **ADM-ADS-07** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZB-02 : hauteur 52 px (44 compact, 60 grand), rayon 12, libellé au-dessus, aide et erreur dessous ; états repos, focus, rempli, erreur (« Adresse e-mail invalide »), succès, désactivé ; types : mot de passe (œil), recherche, e-mail avec icône, code.

## ✅ Objectif

Champs accessibles, intégrés à React Hook Form.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZB-02` — Zones de saisie — formes, tailles et états
_Module : Composants de base_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-02_zones-de-saisie-formes-tailles-et-etats__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-02_zones-de-saisie-formes-tailles-et-etats__desktop_light.webp?raw=true' width='330' alt='ZB-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-02_zones-de-saisie-formes-tailles-et-etats__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-02_zones-de-saisie-formes-tailles-et-etats__desktop_dark.webp?raw=true' width='330' alt='ZB-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-02_zones-de-saisie-formes-tailles-et-etats__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-02_zones-de-saisie-formes-tailles-et-etats__mobile_light.webp?raw=true' width='230' alt='ZB-02 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-02_zones-de-saisie-formes-tailles-et-etats__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZB/ZB-02_zones-de-saisie-formes-tailles-et-etats__mobile_dark.webp?raw=true' width='230' alt='ZB-02 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 02 » · « Champs de saisie » · « Hauteur 52 px (60 px en grand, 44 px en compact), rayon 12 px, libellé au-dessus, aide et erreur en dessous. L’erreur est toujours associée au champ et redite par un texte (pas seulement par la couleur). » · « États » · « Repos » · « E-mail » · « prenom@exemple.com » · « Nous ne partagerons jamais ton adresse. » · « Focus » · « boris@exemple.com » · « Rempli » · « Erreur » · « boris@exemple » · « Adresse e-mail invalide » · « Succès » · « Boris_Culé » · « Désactivé » · « camille@univers-barca.app » · « Tailles » · « Compact · 44 px » · « Rechercher » · « Standard · 52 px » · « Pseudo » · « Grand · 60 px » · « Code d’invitation » · « Types de champs » · « Mot de passe » · « •••••••••• » · « Mot de passe solide » · « Sélecteur (liste) »

**Composants repérés** : `btn`, `input`, `search`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-08%5D%22) · [ADM-ADS-36](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-36%5D%22) · [ADM-ADS-37](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-37%5D%22)

## 📐 Règles de gestion

- L'erreur est toujours liée par `aria-describedby` et exprimée par texte + icône (jamais la couleur seule).
- Validation affichée à la sortie du champ (blur), pas à chaque frappe (ZE-04).
- Tailles compact 44, standard 52, grand 60.
- Variantes : password (afficher/masquer), search (loupe + effacer), icône de début, suffixe/préfixe, compteur de caractères.
- Textarea auto-redimensionnable.

## 🔄 Comportement et états

- Succès : bordure success + coche ; désactivé : fond surface-3.

## 🛠️ Tâches

- [ ] Étendre `src/components/ui/input.tsx` (props size, status, hint, error, leadingIcon).
- [ ] Créer `FormField` (label, hint, error, requis `*`) et `PasswordInput`, `SearchInput`, `Textarea`, `CodeInput` (6 chiffres, inputMode=numeric, collage).
- [ ] Intégration `Controller` RHF + exemple Zod.
- [ ] Stories pour chaque état.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné une erreur, alors le message est lu via aria-describedby.
- [ ] Étant donné la saisie d'un e-mail invalide puis blur, alors l'erreur apparaît ; avant blur non.
- [ ] Étant donné un code collé « 123456 », alors les 6 cases sont remplies.

## 🧪 Tests à écrire

- [ ] Test composant : états visuels
- [ ] Test composant : aria-describedby
- [ ] Test composant : PasswordInput toggle
- [ ] Test composant : CodeInput collage
- [ ] Test a11y

## ♿ Accessibilité et i18n

- Libellé toujours visible, astérisque + « requis »

## 🔗 Dépendances

À réaliser après : `ADM-ADS-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
