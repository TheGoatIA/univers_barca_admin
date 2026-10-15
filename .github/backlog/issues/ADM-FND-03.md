> **ADM-FND-03** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

`src/App.tsx` construit les routes à partir de `NAV` (une route par entrée) et utilise `ModulePage` pour les modules non implémentés ; les routes imbriquées (`/joueurs/:id`, `/quiz/validation`, `/moderation/:reportId`…) des groupes WC/WF/WG n'ont aucun emplacement. Le CDC Admin §2.6 impose `RequireAuth` puis `RequireRole`, §9.1 le code splitting par route (`React.lazy`) et §2.6 la redirection vers « Accès non autorisé » (et non vers la connexion) pour un rôle insuffisant. WA fournit la garde `RequireRole` et la matrice de permissions.

## ✅ Objectif

Définir une table de routes déclarative (rôles, titre, fil d'Ariane, chargement paresseux) servant de source unique au routeur, à la sidebar et à la recherche.

## 📐 Règles de gestion

- Source unique `src/app/routes.tsx` : chaque route porte `path`, `lazy` (import dynamique), `roles`, `handle: { crumb, title, module }` ; `navigation.ts` en dérive le menu (les entrées de menu sont un sous-ensemble flaggé `inMenu`).
- Arbre : `/login`, `/403`, `/session-expiree` (WA) en dehors du layout ; puis `RequireAuth` → `MainLayout` → `RequireRole` par section ; les routes inconnues → `NotFoundPage` ; `ModulePage` ne subsiste que pour les modules sans écran livré.
- Redirection après connexion : retour à l'URL d'origine (`state.from`, y compris query params) si elle est autorisée pour le rôle, sinon page d'accueil du rôle (tableau de bord) ; jamais de redirection ouverte vers un domaine externe (validation : chemin interne uniquement).
- Chaque page est chargée par `React.lazy` avec `Suspense` et un squelette de page commun ; erreur de chargement d'un chunk → voir `fnd-error-boundary-chunks`.
- Titre du document : `<h1> · Univers Barça — Administration` via `handle.title` ; focus placé sur le `<h1>` (ou `main`) à chaque changement de route pour les lecteurs d'écran.
- Les paramètres d'URL (`:id`) sont validés (format ObjectId/identifiant public) : une valeur invalide redirige vers la page 404 sans appel API.

## 🛠️ Tâches

- [ ] Créer `src/app/routes.tsx` (table typée `AppRoute[]`) et `src/app/router.tsx` (`createBrowserRouter`) ; réduire `src/App.tsx` à `<RouterProvider>`.
- [ ] Créer `src/app/RouteFallback.tsx` (squelette de page + `Suspense`).
- [ ] Dériver `NAV` de la table de routes dans `src/lib/navigation.ts` (conserver les types existants).
- [ ] Implémenter `safeRedirect(from)` (chemin interne seulement) dans `src/lib/navigation.ts` et l'utiliser dans `LoginPage`.
- [ ] Créer `useRouteFocus()` (focus et annonce de page) et `useDocumentTitle()` dans `MainLayout`.
- [ ] Créer `src/lib/params.ts` : `isValidObjectId`, `isPublicId` et garde `ValidParam` dans les routes à paramètre.
- [ ] Ajouter des routes de test pour 3 rôles dans `src/app/routes.test.tsx` (matrice rôle × route).
- [ ] Documenter comment ajouter une route dans `CONTRIBUTING.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un moderator, quand il saisit `/joueurs`, alors la page « Accès non autorisé » s'affiche sans redirection vers `/login`.
- [ ] Étant donné une session expirée sur `/quiz?niveau=4`, quand je me reconnecte, alors je reviens sur `/quiz?niveau=4`.
- [ ] Étant donné `state.from='https://evil.example'`, quand la connexion réussit, alors la redirection va au tableau de bord.
- [ ] Étant donné `/joueurs/<id invalide>`, quand la page se charge, alors la page 404 s'affiche sans requête API.
- [ ] Étant donné un changement de route, quand la page s'affiche, alors le titre du document et le focus sont mis à jour.

## 🧪 Tests à écrire

- [ ] routes.test.tsx : matrice rôle × route (3 rôles).
- [ ] safeRedirect.test.ts : chemins internes, externes, `//host`, `javascript:`.
- [ ] params.test.ts : identifiants valides/invalides.
- [ ] navigation.test.ts : menu dérivé de la table.
- [ ] e2e : redirection post-connexion avec query params.

## ♿ Accessibilité et i18n

- Focus programmatique sur `<h1>` ; `Suspense` fallback annoncé par `role='status'` (« Chargement de la page »).

## 📚 Références

- CDC Admin §2.6, §9.1
- WA fn-require-role

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
