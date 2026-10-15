> **ADM-WI-14** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Page « Notification manuelle — Communication exceptionnelle : maintenance, annonce de fonctionnalité » (CDC §4.11) : boutons Brouillon / Envoyer ; carte Audience (segmenté Tous / Segment, Pays Cameroun, Groupe communautaire Culés Cameroun, « Audience estimée : 1 240 utilisateurs ») ; carte Contenu (Titre (FR), Message (FR), pastilles FR / EN manquant / ES manquant, avertissement « Traductions recommandées avant envoi (contrôle non bloquant) ») ; carte Programmation ; panneau Aperçu type notification push.

## ✅ Objectif

Composer et valider une notification ponctuelle.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-07` — Notification manuelle — composition
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_light.webp?raw=true' width='330' alt='WI-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__desktop_dark.webp?raw=true' width='330' alt='WI-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_light.webp?raw=true' width='330' alt='WI-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-07_notification-manuelle-composition__tablet_dark.webp?raw=true' width='330' alt='WI-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Notifications manuelles » · « Notification manuelle » · « Communication exceptionnelle : maintenance, annonce de fonctionnalité » · « Brouillon » · « Envoyer » · « Audience » · « Tous » · « Segment » · « Pays » · « Cameroun » · « Groupe communautaire »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-15%5D%22) · [ADM-WI-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-16%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-NOTIF-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-01%5D%22) · [API-NOTIF-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-22%5D%22) · [API-NOTIF-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-23%5D%22) · [API-NOTIF-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-24%5D%22) · [API-NOTIF-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-25%5D%22) · [API-NOTIF-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-26%5D%22) · [API-NOTIF-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-27%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-31%5D%22) · [API-PLAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-19%5D%22)

## 📐 Règles de gestion

- Audience : « Tous » (super-admin uniquement) ou segment (pays, groupe communautaire).
- Contenu saisi en FR (obligatoire) ; EN/ES recommandés : avertissement non bloquant si manquant (CDC §4.11) ; titre ≤ 65 caractères, message ≤ 240 (limites usuelles push, à confirmer avec l'API).
- Programmation : immédiat ou date/heure future (fuseau Europe/Paris affiché).
- Aperçu temps réel : icône appli, titre, message tels qu'ils apparaîtront.

## 🔄 Comportement et états

- Brouillon enregistré côté serveur (ou localement) et restauré à la réouverture.
- Envoyer valide → pour « Tous » ouvre la double confirmation (WI-08) ; pour segment confirmation simple « Envoyer à 1 240 utilisateurs ? ».
- Succès : toast et réinitialisation ; erreur : message précis.

## 🛠️ Tâches

- [ ] Créer `pages/ManualNotificationPage.tsx` (grille 2 colonnes + aperçu sticky).
- [ ] Composants `AudiencePicker`, `NotificationContentForm` (3 onglets de langue via TrilingualTextEditor simplifié), `SchedulePicker`, `PushPreview`.
- [ ] Schéma Zod `manualNotification.schema.ts`.
- [ ] Compteurs de caractères.
- [ ] Pastilles de complétion par langue.
- [ ] Hook de brouillon `useNotificationDraft`.
- [ ] Intégration `useSendNotification`.
- [ ] Rendu tablette (aperçu sous le formulaire).

## ✔️ Critères d'acceptation

- [ ] Étant donné un titre FR vide, alors Envoyer est bloqué.
- [ ] Étant donné EN et ES vides, alors un avertissement non bloquant s'affiche.
- [ ] Étant donné un segment Cameroun/Culés Cameroun, alors l'audience estimée est affichée.
- [ ] Étant donné un message > 240 caractères, alors l'erreur s'affiche.
- [ ] Étant donné un moderator ou content-manager, alors l'écran est inaccessible.

## 🧪 Tests à écrire

- [ ] Test unitaire : schéma notification
- [ ] Test composant : PushPreview
- [ ] Test composant : avertissement traductions
- [ ] Test hook : brouillon restauré
- [ ] Test axe : onglets de langue

## ♿ Accessibilité et i18n

- Pastilles avec texte « EN manquant » (pas seulement couleur)

## 🔗 Dépendances

À réaliser après : `ADM-WI-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.11
- CDC Backend §3.10, §11.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
