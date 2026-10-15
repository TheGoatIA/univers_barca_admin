> **ADM-WA-13** · Sécurité · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC §2.6 : `RequireRole` redirige vers « Accès non autorisé » (et non vers la connexion) quand l'administrateur est authentifié mais n'a pas le rôle. Le dépôt a `ProtectedRoute allowedRoles` et `navigation.ts`, mais pas de hook de permission par action (CDC §3.1).

## ✅ Objectif

Fournir `usePermissions()` / `<Can>` basés sur la matrice du CDC et unifier les gardes de routes.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-08` — Accès non autorisé (403)
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true' width='330' alt='WA-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true' width='330' alt='WA-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true' width='330' alt='WA-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true' width='330' alt='WA-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Accès non autorisé » · « Ton rôle » · « ne permet pas d'accéder à la modération. Tu es bien connecté(e) : aucune action n'est requise sur ta session. » · « Retour au tableau de bord » · « Demander l’accès »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-14%5D%22) · [ADM-WA-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-16%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22) · [API-AUTH-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-37%5D%22)

## 📐 Règles de gestion

- Matrice §3.1 : fiche joueur (créer/éditer) content-manager + super-admin ; publier contenu historique idem ; valider question IA idem ; traiter signalement / bannir moderator + super-admin ; logs techniques, comptes admin, quotas IA super-admin seulement.
- Pour ce lot : permissions `players:read|write|publish|archive|export|import`, `search:players|users|matches|groups`, `dashboard:*` selon le rôle.
- Rôle insuffisant sur une route → rendu de `ForbiddenPage` avec l'URL tentée conservée (pas de redirection vers /login).
- Le masquage UI n'est qu'un confort : chaque erreur 403 de l'API déclenche aussi l'écran Accès non autorisé.

## 🔄 Comportement et états

- Rôle inconnu (jeton altéré) → déconnexion.
- Un 403 sur une mutation affiche un toast « Action non autorisée pour ton rôle » sans changer de page.
- Changement de rôle côté serveur : au prochain refresh le profil est mis à jour.

## 🛠️ Tâches

- [ ] Créer `src/lib/permissions.ts` : table `PERMISSIONS: Record<Permission, AdminRole[]>` et `can(role, permission)`.
- [ ] Créer `src/hooks/usePermissions.ts` et `src/components/auth/Can.tsx`.
- [ ] Refactorer `ProtectedRoute.tsx` pour afficher `ForbiddenPage` (state `deniedFrom`).
- [ ] Aligner `src/lib/navigation.ts` sur `permissions.ts` (une seule source).
- [ ] Intercepteur 403 dans `src/lib/axios.ts` : `window.dispatchEvent('ub:forbidden')` consommé par le routeur.
- [ ] Compléter `ProtectedRoute.test.tsx` (3 rôles × routes).
- [ ] Documenter la matrice dans `docs/ARCHITECTURE.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un content-manager, quand il ouvre `/moderation`, alors « Accès non autorisé » s'affiche et il reste connecté.
- [ ] Étant donné un moderator, quand il ouvre `/joueurs`, alors Accès non autorisé s'affiche.
- [ ] Étant donné un super-admin, quand il ouvre n'importe quelle route, alors l'accès est accordé.
- [ ] Étant donné une réponse 403 API sur PATCH /admin/players/:id, quand elle survient, alors un toast d'erreur est affiché.

## 🧪 Tests à écrire

- [ ] permissions.test.ts : matrice §3.1 complète (3 rôles × actions)
- [ ] ProtectedRoute.test.tsx : rendu 403 sans redirection
- [ ] Can.test.tsx : masque l'enfant sans permission
- [ ] axios.test.ts : 403 → événement ub:forbidden

## 🔗 Dépendances

À réaliser après : `ADM-WA-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §2.6
- CDC Admin §3
- CDC Admin §3.1
- CDC Backend §5.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
