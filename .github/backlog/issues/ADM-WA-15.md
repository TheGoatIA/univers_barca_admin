> **ADM-WA-15** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WA-09 montre côte à côte deux états : « PAGE INTROUVABLE » (404, grand chiffre bleu, « Cette fiche n'existe pas ou a été archivée. », bouton « Voir la liste des joueurs ») et « ERREUR SERVEUR » avec identifiant de corrélation `trace-9f3a21c8` et bouton « Réessayer ».

## ✅ Objectif

Fournir `NotFoundPage` contextuelle et `ServerErrorPage`/`ErrorState` qui exposent le `traceId` renvoyé par l'API pour faciliter le support.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WA-09` — Page introuvable (404) et erreur
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_light.webp?raw=true' width='330' alt='WA-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__desktop_dark.webp?raw=true' width='330' alt='WA-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_light.webp?raw=true' width='330' alt='WA-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-09_page-introuvable-404-et-erreur__tablet_dark.webp?raw=true' width='330' alt='WA-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Introuvable » · « Page introuvable » · « Cette fiche n'existe pas ou a été archivée. Vérifie le lien ou utilise la recherche globale. » · « Voir la liste des joueurs » · « Erreur serveur » · « Une erreur est survenue. Identifiant de corrélation : » · « trace-9f3a21c8 » · « Réessayer »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-16%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-44%5D%22)

## 📐 Règles de gestion

- 404 : « 404 » en Barlow Condensed bleu dans un halo, titre « PAGE INTROUVABLE », texte « Cette fiche n'existe pas ou a été archivée. Vérifie le lien ou utilise la recherche globale. », bouton primaire contextuel (ex. « Voir la liste des joueurs » depuis `/joueurs/...`, sinon « Retour au tableau de bord »).
- Fil d'Ariane « Joueurs › Introuvable » quand la ressource est une fiche inexistante (réponse API 404 sur GET /admin/players/:id).
- Erreur serveur (5xx ou erreur de rendu) : icône serveur, titre « ERREUR SERVEUR », « Une erreur est survenue. Identifiant de corrélation : » + `traceId` en monospace sélectionnable (clic = copie), bouton « Réessayer » (refetch / reset de la boundary).
- Le `traceId` provient de `error.traceId` (format `{success:false,error:{...,traceId}}`) ou de l'en-tête `x-trace-id`.

## 🔄 Comportement et états

- Route inconnue `*` → 404 dans le MainLayout si connecté, dans AuthLayout sinon.
- Les erreurs 404 de ressource ne déclenchent pas de toast.
- Erreur de rendu React : `RouteErrorBoundary` affiche la même vue (traceId absent → « non disponible »).
- « Réessayer » redéclenche uniquement la requête échouée (`queryClient.refetchQueries`) ou `resetErrorBoundary`.

## 🛠️ Tâches

- [ ] Refondre `src/pages/errors/NotFoundPage.tsx` (props : `resource?`, `backTo?`).
- [ ] Créer `src/components/shared/ServerErrorState.tsx` (traceId + copie).
- [ ] Étendre `src/components/shared/ErrorBoundary.tsx` en `RouteErrorBoundary` branchée sur `errorElement` du routeur.
- [ ] Exposer `traceId` dans `AuthError`/`ApiError` (voir issue de mapping d'erreurs).
- [ ] Ajouter un composant `ErrorHalo` partagé avec EmptyState.
- [ ] Définir `document.title` par page.
- [ ] Tests unitaires et capture 404 + 500.

## ✔️ Critères d'acceptation

- [ ] Étant donné /joueurs/inexistant, quand l'API répond 404, alors « PAGE INTROUVABLE » et « Voir la liste des joueurs » s'affichent.
- [ ] Étant donné une réponse 500 avec traceId `trace-9f3a21c8`, quand l'erreur s'affiche, alors l'identifiant est visible et copiable.
- [ ] Étant donné « Réessayer », quand je clique et que l'API répond OK, alors le contenu normal remplace l'erreur.
- [ ] Étant donné une URL inconnue `/zzz`, quand je la visite connecté, alors la 404 s'affiche avec la sidebar.

## 🧪 Tests à écrire

- [ ] NotFoundPage.test.tsx : bouton contextuel selon resource
- [ ] ServerErrorState.test.tsx : traceId + copie
- [ ] RouteErrorBoundary.test.tsx : erreur de rendu capturée
- [ ] Playwright errors.spec.ts : 404 de fiche et 500 simulée (route.fulfill)

## ♿ Accessibilité et i18n

- role=alert sur l'erreur serveur
- Libellés ARIA « Copier l'identifiant de corrélation »

## 🔗 Dépendances

À réaliser après : `ADM-WA-16` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §2.5
- CDC Backend §14

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
