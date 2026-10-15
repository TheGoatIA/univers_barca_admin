> **ADM-WI-17** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Garde-fou du CDC §4.11 : audience « Tous » réservée au super-admin avec double confirmation explicite. Modale : « Envoyer à TOUS les utilisateurs ? — Cette action est irréversible et réservée au super-admin. 12 480 appareils recevront la notification. », encart « Titre : « Maintenance ce soir à 23h » · envoi immédiat. », « Pour confirmer, saisis 12480 », case « Je confirme avoir relu le contenu dans les 3 langues », boutons Annuler / « Envoyer à tous ».

## ✅ Objectif

Empêcher tout envoi de masse accidentel.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-08` — Notification à tous — double confirmation
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_light.webp?raw=true' width='330' alt='WI-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__desktop_dark.webp?raw=true' width='330' alt='WI-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_light.webp?raw=true' width='330' alt='WI-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-08_notification-a-tous-double-confirmation__tablet_dark.webp?raw=true' width='330' alt='WI-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Notifications manuelles » · « Notification manuelle » · « Envoyer » · « Audience : tous les utilisateurs » · « 12 480 destinataires » · « Envoyer à TOUS les utilisateurs ? » · « Cette action est irréversible et réservée au super-admin. 12 480 appareils recevront la notification. » · « Titre : « Maintenance ce soir à 23h » · envoi immédiat. » · « Pour confirmer, saisis » · « Je confirme avoir relu le contenu dans les 3 langues »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-20%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-NOTIF-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-10%5D%22) · [API-NOTIF-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-23%5D%22) · [API-NOTIF-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-24%5D%22) · [API-NOTIF-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-27%5D%22) · [API-NOTIF-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-28%5D%22) · [API-NOTIF-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-29%5D%22) · [API-NOTIF-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-NOTIF-30%5D%22)

## 📐 Règles de gestion

- Bouton « Envoyer à tous » actif seulement quand : nombre saisi == destinataires ET case cochée.
- Le rôle est revérifié côté API (403 pour non super-admin).
- Rappel du titre et du mode (immédiat/programmé) dans l'encart rouge.
- Si une langue manque, la case reste cochable mais la modale affiche la langue manquante en avertissement.
- Audit : NOTIFICATION_BROADCAST_SENT (audience, destinataires, titre).

## 🔄 Comportement et états

- Pendant l'envoi : bouton « Envoi… », modale non fermable.
- Succès : toast « Notification envoyée à 12 480 utilisateurs » ; erreur 429/5xx : message et possibilité de réessayer (idempotence par clé).
- Annuler/Échap : aucune requête.

## 🛠️ Tâches

- [ ] Créer `components/BroadcastConfirmDialog.tsx` (Radix AlertDialog) avec `TypeToConfirmInput` (réutilisé).
- [ ] Ajouter une clé d'idempotence `Idempotency-Key` générée à l'ouverture.
- [ ] Gérer le cas où le compteur change entre l'estimation et l'envoi (rafraîchir et redemander).
- [ ] Verrou : un seul envoi en cours.
- [ ] Tests unitaires et E2E.

## ✔️ Critères d'acceptation

- [ ] Étant donné 12480 saisi et case cochée, alors « Envoyer à tous » est actif.
- [ ] Étant donné un nombre erroné, alors le bouton reste inactif.
- [ ] Étant donné un double clic, alors une seule requête est envoyée.
- [ ] Étant donné un moderator, alors le choix « Tous » n'existe pas.

## 🧪 Tests à écrire

- [ ] Test composant : conditions d'activation
- [ ] Test composant : idempotence double clic
- [ ] Test : compteur modifié
- [ ] E2E : envoi à tous
- [ ] Test : rôle non autorisé

## ♿ Accessibilité et i18n

- AlertDialog avec focus initial sur Annuler, champ numérique inputMode=numeric

## 🔗 Dépendances

À réaliser après : `ADM-WI-14` · `ADM-WI-09` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
