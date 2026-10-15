> **ADM-WA-11** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

La session admin expire après 8 h d'inactivité (CDC §6.1). WA-07 « Session expirée » promet que « ton travail non enregistré n'a pas été perdu : il sera restauré ». Il faut détecter l'inactivité, déconnecter proprement et restaurer les brouillons.

## ✅ Objectif

Détecter l'inactivité, invalider la session côté serveur, rediriger vers WA-07 avec l'e-mail prérempli et restaurer les formulaires en cours à la reconnexion.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-07` — Session expirée — inactivité
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_light.webp?raw=true' width='330' alt='WA-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__desktop_dark.webp?raw=true' width='330' alt='WA-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_light.webp?raw=true' width='330' alt='WA-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-07_session-expiree-inactivite__tablet_dark.webp?raw=true' width='330' alt='WA-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Session expirée » · « Tu as été déconnecté(e) après 8 h d’inactivité. Ton travail non enregistré n’a pas été perdu : il sera restauré. » · « E-mail » · « camille.durand@univers-barca.app » · « Mot de passe » · « Se reconnecter »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-12%5D%22) · [ADM-WA-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-17%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [API-AUTH-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-38%5D%22)

## 📐 Règles de gestion

- Inactivité = aucun événement `pointerdown`, `keydown`, `scroll` ni requête réussie pendant 8 h ; l'horodatage est synchronisé entre onglets via `BroadcastChannel('ub-activity')` et `localStorage('ub-last-activity')`.
- À 7 h 55 : toast « Ta session expire dans 5 minutes » avec bouton « Rester connecté » (appelle `POST /admin/auth/refresh`).
- À 8 h ou sur 401 définitif du refresh : `authStore.clear()`, appel `POST /admin/auth/logout` best-effort, redirection `/session-expiree?from=<chemin>`.
- Sauvegarde de brouillon : tout formulaire dirty (fiche joueur, etc.) écrit `draft:<route>:<adminId>` dans `sessionStorage`/`localStorage` (champs non sensibles uniquement) toutes les 5 s ; restauré après reconnexion avec bannière « Brouillon restauré (non enregistré) ».
- Brouillons purgés après 7 jours et à la déconnexion volontaire.

## 🔄 Comportement et états

- Déconnexion multi-onglets : une expiration dans un onglet bascule tous les autres.
- Un onglet en arrière-plan ne prolonge pas la session (seule une activité réelle compte).
- Mode hors-ligne : pas de déconnexion tant que le serveur est injoignable ; décision au retour réseau.
- Les brouillons ne contiennent ni mot de passe ni jeton ; ils sont liés à l'id de l'administrateur (un autre compte ne les voit pas).

## 🗄️ Données

- localStorage : ub-last-activity, draft:<route>:<adminId>

## 🛠️ Tâches

- [ ] Créer `src/hooks/useIdleTimeout.ts` (durée 8 h configurable `VITE_IDLE_TIMEOUT_MS`, avertissement 5 min).
- [ ] Créer `src/lib/activityChannel.ts` (BroadcastChannel + repli storage event).
- [ ] Créer `src/lib/drafts.ts` : `saveDraft`, `loadDraft`, `clearDraft`, purge 7 jours.
- [ ] Créer le hook `useDraftAutosave(key, form)` pour RHF (`watch` + debounce 5 s).
- [ ] Intégrer `<SessionGuard />` dans `MainLayout`.
- [ ] Modifier l'intercepteur `src/lib/axios.ts` pour rediriger vers `/session-expiree` plutôt que `/login` (avec `from`).
- [ ] Ajouter `authStore.lastEmail` (non sensible, persistant) pour préremplir l'e-mail.
- [ ] Tests avec fake timers et E2E.

## ✔️ Critères d'acceptation

- [ ] Étant donné 8 h sans activité, quand le délai est atteint, alors je suis redirigé vers `/session-expiree`.
- [ ] Étant donné 7 h 55 d'inactivité, quand l'avertissement s'affiche puis que je clique « Rester connecté », alors le minuteur repart de zéro.
- [ ] Étant donné une fiche joueur modifiée non enregistrée, quand la session expire puis que je me reconnecte, alors la fiche est rouverte avec mes modifications et la bannière de restauration.
- [ ] Étant donné deux onglets ouverts, quand l'un expire, alors l'autre bascule aussi.
- [ ] Étant donné une déconnexion volontaire, quand je me reconnecte, alors aucun brouillon n'est restauré.

## 🧪 Tests à écrire

- [ ] useIdleTimeout.test.ts : avertissement à T-5 min et expiration
- [ ] drafts.test.ts : purge à 7 jours et isolation par adminId
- [ ] useDraftAutosave.test.tsx : debounce 5 s
- [ ] axios.test.ts : refresh en échec redirige avec from
- [ ] Playwright session.spec.ts : expiration simulée via page.clock

## ♿ Accessibilité et i18n

- Toast d'avertissement `role="status"`
- Bouton « Rester connecté » focusable immédiatement

## 🔗 Dépendances

À réaliser après : `ADM-WA-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.1
- CDC Admin §9.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
