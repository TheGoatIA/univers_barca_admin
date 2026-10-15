> **ADM-ADS-17** · UX / Ergonomie · Priorité **P0** · Taille **S** · Phase 0 — Socle technique

## 🎯 Contexte

ZC-01 : toasts succès (« Équipe enregistrée · J11 »), erreur, information et « Toast admin ». `sonner` est déjà installé.

## ✅ Objectif

Retours homogènes pour toute mutation (CDC §2.5, §12.2).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZC-01` — Surfaces flottantes — sheets, modales, toasts
_Module : Retours et états_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-01_surfaces-flottantes-sheets-modales-toasts__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-01_surfaces-flottantes-sheets-modales-toasts__desktop_light.webp?raw=true' width='330' alt='ZC-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-01_surfaces-flottantes-sheets-modales-toasts__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-01_surfaces-flottantes-sheets-modales-toasts__desktop_dark.webp?raw=true' width='330' alt='ZC-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-01_surfaces-flottantes-sheets-modales-toasts__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-01_surfaces-flottantes-sheets-modales-toasts__mobile_light.webp?raw=true' width='230' alt='ZC-01 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-01_surfaces-flottantes-sheets-modales-toasts__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-01_surfaces-flottantes-sheets-modales-toasts__mobile_dark.webp?raw=true' width='230' alt='ZC-01 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 07 » · « Surfaces flottantes » · « Bottom sheets (24 px de rayon), modales centrées, toasts et infobulles. Sur tablette, les sheets deviennent des panneaux centrés de 600 px maximum. » · « Bottom sheet et modale » · « Bottom sheet » · « Formation » · « 4-3-3 » · « 4-2-3-1 » · « Appliquer » · « Modale de confirmation » · « Désactiver la localisation ? » · « Tu n’apparaîtras plus dans les compteurs. » · « Désactiver » · « Annuler » · « Modale de célébration » · « Nouveau badge ! » · « GOAT voter » · « Super ! » · « Toasts, snackbars et infobulles » · « Toast succès » · « Équipe enregistrée · J11 » · « Toast erreur » · « Composition déjà verrouillée » · « Toast information » · « Ta série de 12 jours est en danger » · « Infobulle » · « Pose-moi une question sur le Barça ! 👋 » · « Toast admin » · « Fiche publiée » · « Notification push »

**Composants repérés** : `btn`, `modal`, `sheet`, `toast`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-16%5D%22) · [ADM-ADS-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-18%5D%22) · [ADM-ADS-37](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-37%5D%22) · [MOB-FND-32](https://github.com/TheGoatIA/univers_barca_mobile/issues?q=is%3Aissue%20%22%5BMOB-FND-32%5D%22)

## 📐 Règles de gestion

- Durée : succès 4 s, info 5 s, erreur 8 s persistant au survol ; max 3 empilés ; position bas-droite desktop.
- Variantes success/error/info/warning avec icône + texte ; action « Annuler »/« Réessayer » ; traceId affiché en détail pour erreurs API.
- Messages en français depuis `errorMessage()` ; jamais de texte technique brut.
- Zone live polite (erreurs : assertive).

## 🔄 Comportement et états

- Respect de prefers-reduced-motion.

## 🛠️ Tâches

- [ ] Créer `src/components/ui/toaster.tsx` (thème tokens) et helper `notify.success/error/info`.
- [ ] Brancher dans `providers` (App.tsx).
- [ ] Mapper `ApiErrorBody` → toast (code, message, traceId).
- [ ] Stories.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné une erreur API avec traceId, alors le toast affiche le message et « Réf. 9f3a21c8 ».
- [ ] Étant donné 5 toasts, alors 3 sont visibles.
- [ ] Étant donné une action Réessayer, alors le callback est appelé.

## 🧪 Tests à écrire

- [ ] Test composant : durées
- [ ] Test unitaire : mapping erreur API
- [ ] Test composant : action
- [ ] Test a11y : live region

## ♿ Accessibilité et i18n

- role=status/alert

## 🔗 Dépendances

À réaliser après : `ADM-ADS-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
