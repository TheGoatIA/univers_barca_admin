> **ADM-WI-08** · Fonctionnel · Priorité **P0** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

Boutons « Révoquer » par session et « Révoquer toutes les sessions » : DELETE /admin/accounts/:id/sessions[/:sessionId].

## ✅ Objectif

Invalider à distance un ou tous les accès d'un admin, avec confirmation et journalisation.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-03` — Sessions actives d’un administrateur
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__desktop_light.webp?raw=true' width='330' alt='WI-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__desktop_dark.webp?raw=true' width='330' alt='WI-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__tablet_light.webp?raw=true' width='330' alt='WI-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__tablet_dark.webp?raw=true' width='330' alt='WI-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comptes administrateurs » · « 5 comptes · 3 rôles · 2FA obligatoire pour les super-admins » · « Inviter un administrateur » · « Administrateur » · « Rôle » · « Statut » · « 2FA » · « Dernière activité » · « Actions » · « camille.durand@univers-barca.app » · « Actif »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WI-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-07%5D%22) · [API-PLAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-19%5D%22)

## 📐 Règles de gestion

- Confirmation ConfirmDialog : « Révoquer toutes les sessions de Karim Benali ? Il devra se reconnecter. ».
- Révoquer toutes exclut la session courante quand on cible son propre compte (avertissement sinon).
- Action journalisée ADMIN_SESSION_REVOKED / ADMIN_SESSIONS_REVOKED_ALL.
- L'admin ciblé voit un 401 au prochain appel et est redirigé /login.

## 🔄 Comportement et états

- Boutons en chargement pendant l'appel ; erreur → toast + refetch.

## 🛠️ Tâches

- [ ] Mutations `useRevokeSession`, `useRevokeAllSessions`.
- [ ] Boîte de confirmation dédiée (danger).
- [ ] Gestion du cas « soi-même ».
- [ ] Tests MSW (200/404/403).
- [ ] Test E2E révocation (compte B déconnecté).

## ✔️ Critères d'acceptation

- [ ] Étant donné une session secondaire, quand je la révoque, alors elle disparaît et l'audit est alimenté.
- [ ] Étant donné « Révoquer toutes », alors la confirmation cite le nom du compte.
- [ ] Étant donné 404 (déjà expirée), alors la liste est rafraîchie sans erreur bloquante.

## 🧪 Tests à écrire

- [ ] Test hook : revoke invalide sessions
- [ ] Test composant : confirmation
- [ ] Test : 404 géré
- [ ] E2E : admin révoqué redirigé vers /login

## 🔗 Dépendances

À réaliser après : `ADM-WI-07` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
