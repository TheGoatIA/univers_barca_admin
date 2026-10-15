> **ADM-WA-16** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

CDC §2.5 : un intercepteur Axios unique transforme les erreurs HTTP en exceptions typées affichées de façon homogène (Toast). `axios.ts` ne gère aujourd'hui que le refresh 401 et `errorMessage`.

## ✅ Objectif

Introduire `ApiError` typée, un mapping code → message français et un pipeline Toast cohérent (sonner), exploitable par toutes les pages des modules.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-09` — Page introuvable (404) et erreur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_light.webp?raw=true' width='330' alt='WA-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_dark.webp?raw=true' width='330' alt='WA-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_light.webp?raw=true' width='330' alt='WA-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_dark.webp?raw=true' width='330' alt='WA-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Introuvable » · « Page introuvable » · « Cette fiche n'existe pas ou a été archivée. Vérifie le lien ou utilise la recherche globale. » · « Voir la liste des joueurs » · « Erreur serveur » · « Une erreur est survenue. Identifiant de corrélation : » · « trace-9f3a21c8 » · « Réessayer »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-15%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22)

#### `WA-02` — Connexion — erreur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__desktop_light.webp?raw=true' width='330' alt='WA-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__desktop_dark.webp?raw=true' width='330' alt='WA-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__tablet_light.webp?raw=true' width='330' alt='WA-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-02_connexion-erreur__tablet_dark.webp?raw=true' width='330' alt='WA-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Back-office » · « Gérer l'univers » · « des culés. » · « Contenu, modération et supervision de l'écosystème Univers Barça — réservé à l'équipe. » · « Accès restreint · connexion chiffrée · actions journalisées » · « Connexion » · « Accède à ton espace d’administration. » · « Identifiants incorrects » · « Il te reste 2 tentatives avant un blocage temporaire de 15 minutes. » · « E-mail professionnel » · « camille.durand@univers-barca.app » · « Mot de passe » · « •••••••• » · « Se connecter »

**Composants repérés** : `btn`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WA-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-01%5D%22) · [ADM-WA-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-02%5D%22) · [ADM-WA-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-04%5D%22) · [ADM-WA-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-18%5D%22) · [API-AUTH-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-33%5D%22) · [API-AUTH-39](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-39%5D%22) · [API-AUTH-42](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-42%5D%22)

#### `WA-08` — Accès non autorisé (403)
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true' width='330' alt='WA-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true' width='330' alt='WA-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true' width='330' alt='WA-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true' width='330' alt='WA-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Accès non autorisé » · « Ton rôle » · « ne permet pas d'accéder à la modération. Tu es bien connecté(e) : aucune action n'est requise sur ta session. » · « Retour au tableau de bord » · « Demander l’accès »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-13%5D%22) · [ADM-WA-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-14%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22) · [API-AUTH-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-37%5D%22)

## 📐 Règles de gestion

- Format API : `{success:false,error:{code,message,details,traceId}}`. Codes à traiter : VALIDATION_ERROR (400, `details` par champ), UNAUTHORIZED (401), FORBIDDEN (403), NOT_FOUND (404), CONFLICT (409), TOO_MANY_REQUESTS (429), INTERNAL_ERROR (500), réseau/timeout (20 s).
- Mapping des messages par défaut dans `src/lib/errorMessages.ts` (français) ; le message serveur n'est affiché que s'il est marqué sûr.
- VALIDATION_ERROR : les `details` sont mappés sur les champs RHF via `setError` (utilitaire `applyServerErrors(form, error)`).
- Toast d'erreur : titre, message, bouton « Copier l'identifiant » quand `traceId` présent ; durée 6 s, erreurs 5xx persistantes jusqu'à fermeture.

## 🔄 Comportement et états

- Pas de toast pour 401 (géré par refresh), 404 de ressource (géré par la page), annulations (`ERR_CANCELED`).
- Doublons : un même `code+route` n'émet qu'un toast par fenêtre de 3 s.
- En mutation, l'échec déclenche le rollback des mises à jour optimistes (cf. TanStack `onError`).

## 🛠️ Tâches

- [ ] Créer `src/lib/apiError.ts` (`class ApiError extends Error {status, code, details, traceId}`, `toApiError`).
- [ ] Brancher dans `src/lib/axios.ts` (`Promise.reject(toApiError(error))`).
- [ ] Créer `src/lib/errorMessages.ts`.
- [ ] Créer `src/lib/queryClient.ts` : `QueryCache`/`MutationCache` `onError` global → toast (avec `meta.silent` pour désactiver).
- [ ] Créer `src/lib/forms.ts` : `applyServerErrors`.
- [ ] Créer `src/components/shared/ErrorToast.tsx` (sonner custom).
- [ ] Remplacer `errorMessage` par `ApiError.message` dans les pages existantes.
- [ ] Tests de l'intercepteur (axios-mock-adapter ou MSW).

## ✔️ Critères d'acceptation

- [ ] Étant donné une réponse 400 VALIDATION_ERROR avec details [{path:'bio.es',message:'Requis'}], quand `applyServerErrors` s'exécute, alors l'erreur apparaît sur le champ `bio.es`.
- [ ] Étant donné une réponse 500 avec traceId, quand le toast s'affiche, alors le bouton « Copier l'identifiant » est présent.
- [ ] Étant donné 2 erreurs identiques en 1 s, quand elles surviennent, alors un seul toast est affiché.
- [ ] Étant donné `meta: { silent: true }`, quand la requête échoue, alors aucun toast n'est émis.

## 🧪 Tests à écrire

- [ ] apiError.test.ts : conversion de chaque statut
- [ ] forms.test.ts : mapping details → champs
- [ ] queryClient.test.ts : dédoublonnage et silent
- [ ] axios.test.ts : timeout 20 s → NETWORK_ERROR

## ♿ Accessibilité et i18n

- Toasts `role="status"` (succès) et `role="alert"` (erreur)
- Messages en français dans `errorMessages.ts`

## 📚 Références

- CDC Admin §2.5
- CDC Backend §14
- CDC Flutter §13.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
