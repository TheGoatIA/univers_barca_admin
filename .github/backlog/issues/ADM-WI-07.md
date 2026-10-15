> **ADM-WI-07** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Panneau latéral « Sessions de Karim Benali » (CDC §6.6) : Chrome · macOS · Paris (« Actuelle », IP 82.64.•••.•••), Safari · iPad · Lyon (dernière activité il y a 1 j, bouton Révoquer), Firefox · Windows · Inconnu (IP inhabituelle) et bandeau « Une session depuis une localisation inhabituelle a été détectée. ». Pied : Fermer / « Révoquer toutes les sessions ».

## ✅ Objectif

Permettre au super-admin de consulter les sessions et de couper un accès suspect.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-03` — Sessions actives d’un administrateur
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__desktop_light.webp?raw=true' width='330' alt='WI-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__desktop_dark.webp?raw=true' width='330' alt='WI-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__tablet_light.webp?raw=true' width='330' alt='WI-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-03_sessions-actives-d-un-administrateur__tablet_dark.webp?raw=true' width='330' alt='WI-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Comptes administrateurs » · « 5 comptes · 3 rôles · 2FA obligatoire pour les super-admins » · « Inviter un administrateur » · « Administrateur » · « Rôle » · « Statut » · « 2FA » · « Dernière activité » · « Actions » · « camille.durand@univers-barca.app » · « Actif »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WI-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-08%5D%22) · [API-PLAT-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-19%5D%22)

## 📐 Règles de gestion

- Chaque session : navigateur · OS · ville, connexion/dernière activité relative, IP masquée.
- Session courante identifiée « Actuelle » (badge vert), non révocable individuellement.
- Bandeau d'alerte si une session présente un indicateur `unusualLocation`.
- Révocation invalide le jeton immédiatement côté backend (CDC §6.6).

## 🔄 Comportement et états

- Panneau 480 px à droite, scrim ; fermeture Échap/Fermer.
- Vide : « Aucune session active ». Chargement : 3 skeletons.
- Succès révocation : la ligne disparaît après réponse, toast « Session révoquée ».

## 🛠️ Tâches

- [ ] Créer `components/AdminSessionsDrawer.tsx` (Radix Dialog variante drawer).
- [ ] `SessionRow` avec icône selon device (monitor/tablette).
- [ ] Hook `useAdminSessions(id)` + masquage IP via redact.
- [ ] Ouverture depuis l'icône appareil de la table.
- [ ] Focus trap et retour du focus.
- [ ] Rendu tablette plein écran.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 sessions, alors 3 lignes dont une « Actuelle ».
- [ ] Étant donné unusualLocation=true, alors le bandeau jaune est visible.
- [ ] Étant donné la fermeture par Échap, alors le focus revient sur l'icône.
- [ ] Étant donné 0 session, alors l'état vide.

## 🧪 Tests à écrire

- [ ] Test composant : SessionRow session courante
- [ ] Test composant : bandeau localisation
- [ ] Test composant : IP masquée
- [ ] Test : focus trap drawer

## ♿ Accessibilité et i18n

- Drawer role=dialog aria-labelledby « Sessions de … »

## 🔗 Dépendances

À réaliser après : `ADM-WI-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.6

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
