> **ADM-WI-04** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La modale « Inviter un administrateur » : « Un e-mail d'invitation à usage unique lui permettra de définir son mot de passe. » Champs Prénom et nom, E-mail professionnel, Rôle (radios Modérateur « Signalements et groupes », Content-manager « Contenu éditorial », Super-admin « Accès complet · 2FA obligatoire »), boutons Annuler / « Envoyer l'invitation ».

## ✅ Objectif

Créer un compte admin invité avec un rôle initial, sans jamais saisir de mot de passe (CDC §3.2).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-02` — Inviter un administrateur
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__desktop_light.webp?raw=true' width='330' alt='WI-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__desktop_dark.webp?raw=true' width='330' alt='WI-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__tablet_light.webp?raw=true' width='330' alt='WI-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-02_inviter-un-administrateur__tablet_dark.webp?raw=true' width='330' alt='WI-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comptes administrateurs » · « 5 comptes · 3 rôles · 2FA obligatoire pour les super-admins » · « Inviter un administrateur » · « Administrateur » · « Rôle » · « Statut » · « 2FA » · « Dernière activité » · « Actions » · « camille.durand@univers-barca.app » · « Actif »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WI-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-05%5D%22) · [ADM-WI-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-21%5D%22) · [API-PLAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-19%5D%22)

## 📐 Règles de gestion

- Validation Zod : nom 2–80 caractères, e-mail valide et unique (erreur serveur 409 « Un compte existe déjà avec cet e-mail »), domaine professionnel recommandé @univers-barca.app (avertissement non bloquant), rôle obligatoire.
- Aucun mot de passe transmis ; le lien d'invitation est à usage unique (§3.3).
- Rôle super-admin : texte d'avertissement « 2FA obligatoire à la première connexion ».
- Action journalisée ADMIN_INVITED.

## 🔄 Comportement et états

- Validation à la sortie du champ (pas à chaque frappe), message précis associé via aria-describedby.
- Envoi : bouton « Envoi… » + spinner ; succès : fermeture, toast « Invitation envoyée à nora.silva@… », nouvelle ligne statut « Invitation envoyée ».
- Annuler ou Échap avec saisie : confirmation si formulaire modifié.

## 🛠️ Tâches

- [ ] Créer `components/InviteAdminDialog.tsx` (Radix Dialog) et `inviteAdmin.schema.ts`.
- [ ] Radio-cartes accessibles (`RoleRadioCard`) avec bordure primary 2 px sur sélection.
- [ ] Mapper 409/422 sur les champs.
- [ ] Focus initial sur « Prénom et nom ».
- [ ] Invalidation de la liste après succès.
- [ ] Test du focus trap et du retour du focus sur le bouton déclencheur.

## ✔️ Critères d'acceptation

- [ ] Étant donné un e-mail invalide, alors « Adresse e-mail invalide » est associé au champ.
- [ ] Étant donné un e-mail existant, alors l'erreur 409 s'affiche sous le champ.
- [ ] Étant donné un envoi réussi, alors la modale se ferme et la liste contient le compte invité.
- [ ] Étant donné aucun rôle choisi, alors l'envoi est bloqué.

## 🧪 Tests à écrire

- [ ] Test unitaire : schéma Zod invitation
- [ ] Test composant : radios de rôle navigables au clavier
- [ ] Test composant : 409 → erreur de champ
- [ ] Test intégration : liste mise à jour
- [ ] Test : focus retourné au déclencheur

## ♿ Accessibilité et i18n

- Radio group Radix avec labels et descriptions (aria-describedby)

## 🔗 Dépendances

À réaliser après : `ADM-WI-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §3.2, §3.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
