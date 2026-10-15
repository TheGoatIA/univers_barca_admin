> **ADM-WG-16** · Écran · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-04 (« HISTORIQUE DE MODÉRATION », « ultras_bcn · compte créé le 14 juin 2026 », bouton « Voir le profil ») montre quatre cartes : « Signalements reçus 5 · 2 fondés », « Avertissements 1 · 3 oct. 2026 », « Suspensions 0 — » et « Statut Actif ↓ Récidive : rang 2 », suivies d'une carte « Chronologie ». Le CDC Admin §4.6.1 définit cette vue consolidée (UserModerationHistoryPage) pour évaluer une récidive.

## ✅ Objectif

Implémenter la page `/moderation/utilisateurs/:userId/historique` avec les quatre indicateurs.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-04` — Historique de modération d’un utilisateur
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_light.webp?raw=true' width='330' alt='WG-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__desktop_dark.webp?raw=true' width='330' alt='WG-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_light.webp?raw=true' width='330' alt='WG-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-04_historique-de-moderation-d-un-utilisateur__tablet_dark.webp?raw=true' width='330' alt='WG-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « ultras_bcn » · « Historique » · « Historique de modération » · « ultras_bcn · compte créé le 14 juin 2026 » · « Voir le profil » · « Signalements reçus » · « 2 fondés » · « Avertissements » · « 3 oct. 2026 » · « Suspensions » · « Statut » · « Actif » · « Récidive : rang 2 » · « Chronologie » · « 12 min » · « Signalement #R-20418 » · « Menace · en attente » · « 3 oct. » · « Avertissement » · « Propos déplacés · Karim B. · gravité faible » · « 28 sept. » · « Signalement ignoré » · « Non fondé · Karim B. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-17%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-02%5D%22) · [API-MODER-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-11%5D%22) · [API-MODER-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-13%5D%22) · [API-MODER-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-14%5D%22) · [API-MODER-19](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-19%5D%22) · [API-MODER-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-22%5D%22) · [API-MODER-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-28%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Fil d'Ariane « Modération > Utilisateurs > ultras_bcn > Historique » ; titre « HISTORIQUE DE MODÉRATION » ; sous-titre « <pseudo> · compte créé le 14 juin 2026 » (date complète fr).
- Carte Signalements reçus : total et « N fondés » (signalements ayant abouti à une action autre que `ignore`) ; carte Avertissements : nombre et date du dernier (« 3 oct. 2026 ») ; carte Suspensions : nombre et « — » si aucune, sinon date de la dernière ; carte Statut : « Actif », « Suspendu · jusqu'au … » ou « Banni » avec ligne « Récidive : rang 2 » (flèche rouge ↓ si ≥ 2).
- Bouton « Voir le profil » → `/utilisateurs/:id` (fiche WJ) ; masqué si le rôle n'a pas accès.
- Accessible depuis le détail d'un signalement, la fiche utilisateur et la recherche globale (WB) ; permet de contextualiser une décision (CDC §4.6).
- Utilisateur inconnu : « Utilisateur introuvable » ; compte supprimé (RGPD) : historique anonymisé « Compte supprimé » conservant uniquement les actions de modération immuables (obligation d'audit).
- Rôles : moderator et super-admin.

## 🛠️ Tâches

- [ ] Créer `src/pages/moderation/UserModerationHistoryPage.tsx` (lazy) et la route.
- [ ] Créer `src/components/moderation/HistoryKpiCard.tsx` (icône, libellé, valeur, sous-texte) en réutilisant `StatsCard`.
- [ ] Créer `src/components/moderation/HistoryHeader.tsx` (pseudo, date de création, bouton profil).
- [ ] Brancher `useUserModerationHistory(userId)`.
- [ ] Utiliser `RecidivismRank` et `UserStatusBadge` du panneau auteur.
- [ ] Gérer chargement (4 cartes squelettes), 404, 403.
- [ ] Responsive tablette (4 cartes → 2×2) et thème sombre.
- [ ] Tests de la page.

## ✔️ Critères d'acceptation

- [ ] Étant donné un utilisateur avec 5 signalements dont 2 fondés, quand la page s'affiche, alors « 5 » et « 2 fondés » sont visibles.
- [ ] Étant donné 1 avertissement le 3 oct. 2026, quand la carte s'affiche, alors « 3 oct. 2026 » est indiqué.
- [ ] Étant donné aucune suspension, quand la carte s'affiche, alors « 0 » et « — » sont montrés.
- [ ] Étant donné le rang 2, quand la carte Statut s'affiche, alors « Récidive : rang 2 » est en rouge.
- [ ] Étant donné un utilisateur inconnu, quand l'API répond 404, alors « Utilisateur introuvable » est affiché.

## 🧪 Tests à écrire

- [ ] HistoryKpiCard.test.tsx : valeurs et tirets.
- [ ] UserModerationHistoryPage.test.tsx : chargement/404/403.
- [ ] HistoryHeader.test.tsx : date de création.
- [ ] useUserModerationHistory.test.tsx.
- [ ] axe : page historique.

## ♿ Accessibilité et i18n

- `<h1>` unique ; cartes en `<section aria-labelledby>` ; valeurs lues avec leur libellé.

## 🔗 Dépendances

À réaliser après : `ADM-WG-03` · `ADM-WG-15` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6, §4.6.1 (UserModerationHistoryPage)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
