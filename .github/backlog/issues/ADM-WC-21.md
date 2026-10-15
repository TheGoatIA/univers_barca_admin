> **ADM-WC-21** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Dans WC-08, une cellule est en cours d'édition (« 11 » dans la ligne 2026-27, bordure bleue). Les statistiques sont enregistrées avec la fiche : « Enregistrer le brouillon » envoie le tableau complet via `PUT /admin/players/:id/stats` (CDC Admin §4.12). La mise à jour de fin de saison doit être fiable et auditée.

## ✅ Objectif

Valider les lignes de statistiques et les persister de façon atomique avec la fiche.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WC-08` — Fiche joueur — statistiques par saison
_Module : Gestion des joueurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_light.webp?raw=true' width='330' alt='WC-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__desktop_dark.webp?raw=true' width='330' alt='WC-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_light.webp?raw=true' width='330' alt='WC-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WC/WC-08_fiche-joueur-statistiques-par-saison__tablet_dark.webp?raw=true' width='330' alt='WC-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Lamine Yamal » · « En attente de traduction » · « N°10 · Ailier droit · ID joueur #ub-0010 » · « Identité » · « Biographie » · « Statistiques par saison » · « Photo » · « Enregistrer le brouillon » · « Publier » · « Importer CSV » · « Ajouter une saison »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WC-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-02%5D%22) · [ADM-WC-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-03%5D%22) · [ADM-WC-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-13%5D%22) · [ADM-WC-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-17%5D%22) · [ADM-WC-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-20%5D%22) · [ADM-WC-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-23%5D%22) · [ADM-WC-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WC-26%5D%22) · [API-FOOT-38](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-38%5D%22)

## 📐 Règles de gestion

- Schéma Zod `playerStatSeasonSchema` : `season` regex `^\d{4}-\d{2}$` avec année de fin = année de début + 1 (2026-27 valide, 2026-28 invalide) ; `matchesPlayed`, `goals`, `assists`, `trophiesCount` entiers 0-999 ; cohérence : `goals + assists` ne dépasse pas un seuil d'alerte (> 3 × matchs → avertissement jaune non bloquant).
- Enregistrement : si seules les stats ont changé, un seul `PUT /admin/players/:id/stats` ; si identité ou bio ont changé, `PATCH` puis `PUT` enchaînés ; en cas d'échec du second appel, message précisant ce qui est enregistré et ce qui ne l'est pas.
- Le PUT remplace le tableau entier (idempotent) ; le serveur trie par saison décroissante et refuse les doublons de saison (422 `DUPLICATE_SEASON`).
- Audit `PLAYER_STATS_UPDATED` avec diff avant/après (saisons ajoutées/modifiées/supprimées) via `src/lib/diff.ts`.
- Les cellules modifiées sont marquées d'un point bleu jusqu'à l'enregistrement ; `Échap` restaure la valeur d'origine de la cellule.

## 🛠️ Tâches

- [ ] Compléter `src/lib/schemas/player.schema.ts` avec `playerStatsArraySchema` (unicité de saison via `superRefine`).
- [ ] Implémenter `useSavePlayerStats(id)` : PUT, mise à jour du cache depuis la réponse, invalidation de `['players','stats',id]` et de la liste.
- [ ] Créer `src/lib/statsDiff.ts` (liste d'ajouts/modifications/suppressions pour l'affichage du toast récapitulatif « 1 saison ajoutée, 2 modifiées »).
- [ ] Marquer les cellules modifiées (`dirtyFields.stats`) et ajouter le point bleu accessible.
- [ ] Intégrer l'ordre d'enregistrement PATCH → PUT dans `usePlayerSave()` orchestrant l'enregistrement du brouillon.
- [ ] Gérer 422 `DUPLICATE_SEASON` et 409 conflit avec focus sur la ligne concernée.
- [ ] Tests d'enchaînement et de rollback d'affichage.

## ✔️ Critères d'acceptation

- [ ] Étant donné la valeur 11 saisie dans Matchs 2026-27, quand je clique « Enregistrer le brouillon », alors un PUT contenant les 4 saisons est envoyé.
- [ ] Étant donné la saison « 2026-28 », quand je quitte la cellule, alors l'erreur « Format attendu : 2026-27 » est affichée.
- [ ] Étant donné un 422 `DUPLICATE_SEASON`, quand la réponse arrive, alors la ligne en doublon est surlignée en rouge.
- [ ] Étant donné un PATCH réussi et un PUT en échec, quand l'erreur survient, alors un message indique que l'identité est enregistrée mais pas les statistiques.
- [ ] Étant donné une modification annulée par `Échap`, quand je regarde la cellule, alors la valeur d'origine est restaurée sans point bleu.

## 🧪 Tests à écrire

- [ ] player.schema.test.ts : regex et cohérence des saisons.
- [ ] useSavePlayerStats.test.tsx : PUT, cache, erreurs.
- [ ] statsDiff.test.ts : ajouts/modifs/suppressions.
- [ ] usePlayerSave.test.tsx : enchaînement PATCH → PUT.
- [ ] e2e : modifier une statistique puis recharger la page.

## ♿ Accessibilité et i18n

- Le toast récapitulatif est annoncé en `aria-live='polite'` ; erreurs de ligne liées à la cellule par `aria-describedby`.

## 🔗 Dépendances

À réaliser après : `ADM-WC-20` · `ADM-WC-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.2.2, §4.12, §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
