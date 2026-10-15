> **ADM-WB-13** · Écran · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

WB-07 : pour « zzzq », la palette affiche une icône loupe en halo, le titre « AUCUN RÉSULTAT POUR « ZZZQ » » et le conseil « Vérifie l'orthographe ou essaie un nom de joueur, un identifiant de match ou un e-mail. », avec le pied d'aide.

## ✅ Objectif

Couvrir les états vide, trop court et erreur de la palette.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-07` — Recherche globale — aucun résultat
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_light.webp?raw=true' width='330' alt='WB-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_dark.webp?raw=true' width='330' alt='WB-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_light.webp?raw=true' width='330' alt='WB-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_dark.webp?raw=true' width='330' alt='WB-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « 0 échec » · « Erreurs critiques » · « −3 » · « zzzq » · « Esc »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-11%5D%22) · [ADM-WB-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-15%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-48%5D%22)

## 📐 Règles de gestion

- Aucun résultat : titre en capitales Barlow Condensed incluant le terme saisi échappé entre guillemets français, texte d'aide cité ci-dessus ; pas de lien « Voir tous les résultats ».
- Saisie < 2 caractères : « Tape au moins 2 caractères pour lancer la recherche. ».
- Erreur réseau/5xx : icône avertissement, « La recherche est indisponible » + « Réessayer ».
- Le terme est tronqué à 30 caractères avec « … » dans le titre.

## 🔄 Comportement et états

- Aucun résultat = les 4 catégories autorisées renvoient des listes vides.
- Le conseil mentionne uniquement les types que le rôle peut chercher (content-manager : « un nom de joueur ou un identifiant de match »).
- La saisie reste éditable, les résultats se mettent à jour sans fermer la palette.

## 🛠️ Tâches

- [ ] Créer `src/components/search/SearchEmptyState.tsx` (variantes `noResult`, `tooShort`, `error`).
- [ ] Réutiliser `ErrorHalo`/`EmptyState` partagé.
- [ ] Adapter le texte au rôle via `searchableTypesFor(role)`.
- [ ] Échapper et tronquer le terme (`truncate(term, 30)`).
- [ ] Tests RTL + capture clair/sombre.

## ✔️ Critères d'acceptation

- [ ] Étant donné « zzzq », quand la réponse est vide, alors « AUCUN RÉSULTAT POUR « ZZZQ » » est affiché.
- [ ] Étant donné « a », quand je saisis, alors « Tape au moins 2 caractères » s'affiche sans requête.
- [ ] Étant donné une erreur 500, quand elle survient, alors « Réessayer » relance la recherche.
- [ ] Étant donné `<img onerror>` saisi, quand l'état vide s'affiche, alors le terme apparaît en texte inerte.

## 🧪 Tests à écrire

- [ ] SearchEmptyState.test.tsx : 3 variantes
- [ ] SearchEmptyState.test.tsx : échappement HTML
- [ ] searchableTypesFor.test.ts : par rôle
- [ ] Playwright : état vide sur « zzzq »

## ♿ Accessibilité et i18n

- Texte d'état dans une région `role="status"`

## 🔗 Dépendances

À réaliser après : `ADM-WB-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.9

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
