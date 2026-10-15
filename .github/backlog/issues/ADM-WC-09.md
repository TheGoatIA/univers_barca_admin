> **ADM-WC-09** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le bouton « Publier » de la barre de sélection de WC-02 doit publier plusieurs fiches d'un coup. Le CDC Admin §4.2 interdit de publier une fiche dont la biographie n'est pas trilingue ; une action de masse doit donc ignorer les fiches non prêtes et le dire explicitement, avec confirmation du nombre d'éléments concernés (§9.4).

## ✅ Objectif

Publier uniquement les fiches `ready` sélectionnées, après confirmation, avec un rapport clair des fiches ignorées.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-02` — Liste — sélection multiple (actions de masse)
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_light.webp?raw=true' width='330' alt='WC-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__desktop_dark.webp?raw=true' width='330' alt='WC-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_light.webp?raw=true' width='330' alt='WC-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-02_liste-selection-multiple-actions-de-masse__tablet_dark.webp?raw=true' width='330' alt='WC-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « 71 fiches · 64 publiées · 7 incomplètes » · « Importer CSV » · « Exporter » · « Nouveau joueur » · « Rechercher… » · « Poste » · « Nationalité » · « Statut : tous » · « Langues » · « Club » · « Mode dense »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-08%5D%22) · [ADM-WC-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-11%5D%22) · [ADM-WC-28](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-28%5D%22) · [API-FOOT-34](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-34%5D%22) · [API-FOOT-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-37%5D%22)

## 📐 Règles de gestion

- Confirmation (ConfirmDialog) : « Publier N fiches ? » listant les noms ; si certaines fiches ne sont pas `ready`, deuxième bloc jaune « M fiches seront ignorées : traduction manquante (Gavi : EN, ES) ».
- Appel `POST /admin/players/bulk` `{action:'publish', ids}` ; le serveur revalide chaque fiche (bio FR/EN/ES non vides) et répond `{updated, skipped:[{id,reason}]}` ; jamais de publication partielle silencieuse.
- Aucune mise à jour optimiste : l'interface attend la réponse puis invalide `['players']` (liste + compteurs).
- Toast de résultat : « 2 fiches publiées, 1 ignorée (traduction manquante) » ; en cas de 0 publiée, toast d'avertissement et sélection conservée sur les fiches ignorées.
- Chaque fiche publiée génère une entrée d'audit `PLAYER_PUBLISHED` (CDC Admin §6.4) avec valeur avant/après du statut.

## 🛠️ Tâches

- [ ] Créer `src/components/players/BulkPublishDialog.tsx` (liste, avertissement des ignorées, bouton « Publier N fiches »).
- [ ] Implémenter `useBulkPlayers('publish')` dans `usePlayerMutations.ts` avec gestion de la réponse `skipped`.
- [ ] Calculer côté client `publishableIds` / `blockedReasons` via `bulkEligibility` pour l'aperçu (le serveur reste maître).
- [ ] Mapper les raisons API (`BIO_INCOMPLETE`, `ALREADY_PUBLISHED`, `ARCHIVED`) vers des libellés français.
- [ ] Désélectionner les fiches publiées et conserver les ignorées après la réponse.
- [ ] Ajouter l'événement analytique interne `players_bulk_publish` (FND `fnd-journaux-front-analytics`).
- [ ] Documenter le contrat de l'endpoint dans l'issue API correspondante.

## ✔️ Critères d'acceptation

- [ ] Étant donné 3 fiches dont 1 non prête, quand je confirme, alors 2 sont publiées et le toast indique « 1 ignorée ».
- [ ] Étant donné une fiche ignorée (EN manquant), quand le dialogue s'ouvre, alors la raison « EN manquant » est visible avant confirmation.
- [ ] Étant donné une réponse 403, quand je confirme, alors un message d'accès refusé s'affiche et rien n'est modifié dans la liste.
- [ ] Étant donné une publication réussie, quand la liste se recharge, alors le compteur « publiées » est incrémenté.
- [ ] Étant donné une sélection sans fiche prête, quand je clique « Publier », alors le bouton est désactivé.

## 🧪 Tests à écrire

- [ ] BulkPublishDialog.test.tsx : avertissement des ignorées.
- [ ] usePlayerMutations.test.tsx : invalidation et absence d'optimistic update.
- [ ] bulkEligibility.test.ts : raisons de blocage.
- [ ] MSW : réponse `skipped` mappée vers libellés.
- [ ] e2e : publier 2 fiches prêtes.

## ♿ Accessibilité et i18n

- Le dialogue est `role='alertdialog'`, focus initial sur « Annuler » ; liste des fiches dans un `<ul>`.

## 🔗 Dépendances

À réaliser après : `ADM-WC-08` · `ADM-WC-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2, §6.4, §9.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
