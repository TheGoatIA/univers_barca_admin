> **ADM-WG-07** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

La barre de WG-01 comporte « Rechercher… » et trois filtres : « Type de contenu », « Gravité », « Période ». Le CDC Admin §4.10 liste pour les signalements : type de contenu, étiquette de gravité automatique, statut de traitement (onglets) et période, persistés dans l'URL.

## ✅ Objectif

Implémenter les filtres combinables avec persistance URL et mémoire locale.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-01` — File de signalements
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true' width='330' alt='WG-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true' width='330' alt='WG-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true' width='330' alt='WG-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true' width='330' alt='WG-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 18 en attente · 6 urgents · tri par gravité automatique » · « Raccourcis clavier » · « Historique » · « En attente » · « En cours » · « Traités » · « Ignorés » · « Rechercher… » · « Type de contenu » · « Gravité » · « Période » · « Auto-évaluation indicative · décision finale humaine » · « Gravité auto » · « Type » · « Origine » · « Contenu signalé » · « Auteur » · « Motif » · « Il y a » · « Urgent »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-04%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-06%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-24%5D%22) · [ADM-WG-25](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-25%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-06%5D%22) · [API-MODER-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-07%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-24%5D%22) · [API-MODER-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-26%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Type de contenu : Message, Pseudo/avatar, Wallpaper, Groupe (multi) ; Gravité : Urgent, À vérifier, Faible (multi) ; Période : 24 h, 7 jours, 30 jours, plage personnalisée (`DateRangeFilter` partagé).
- Recherche sur l'extrait de contenu, le pseudonyme de l'auteur et le motif (debounce 300 ms, 2 caractères minimum) ; elle ne porte jamais sur l'identité du rapporteur.
- URL : `?statut=pending&type=message,pseudo&gravite=urgent,review&periode=7j&q=haine&page=1` ; mémoire locale `ub:filters:moderation:<adminId>`.
- Les contenus masqués par défaut (urgents) ne sont pas indexés par la recherche plein texte côté client ; la recherche est exécutée côté serveur.
- État vide filtré : « Aucun signalement pour ces filtres » avec « Réinitialiser les filtres » ; distinct de la file vide (`ui-file-vide`).

## 🛠️ Tâches

- [ ] Créer `src/hooks/useReportFilters.ts` (URL ↔ filtres, validation Zod).
- [ ] Créer `src/components/moderation/ReportFilters.tsx` avec `FilterChip` et `DateRangeFilter`.
- [ ] Réutiliser `src/lib/filterMemory.ts` pour la persistance par administrateur.
- [ ] Mapper la période vers `from`/`to` ISO (UTC) dans `serializeReportsQuery`.
- [ ] Implémenter `describeReportFilters` pour l'état vide.
- [ ] Tests de synchronisation.

## ✔️ Critères d'acceptation

- [ ] Étant donné les filtres Gravité=Urgent et Type=Message, quand la requête part, alors `severity=urgent&type=message` est envoyé.
- [ ] Étant donné la période « 7 jours », quand la requête part, alors `from` correspond à J-7.
- [ ] Étant donné aucun résultat, quand la liste s'affiche, alors l'état filtré avec « Réinitialiser les filtres » est montré.
- [ ] Étant donné une URL partagée, quand elle est ouverte, alors les mêmes filtres sont restaurés.

## 🧪 Tests à écrire

- [ ] useReportFilters.test.tsx : URL, période, reset de page.
- [ ] ReportFilters.test.tsx : libellés.
- [ ] serializeReportsQuery.test.ts : dates.
- [ ] describeReportFilters.test.ts.
- [ ] e2e : filtrer par gravité puis recharger.

## ♿ Accessibilité et i18n

- Chips avec `aria-haspopup='menu'` ; annonce du nombre de signalements après filtrage.

## 🔗 Dépendances

À réaliser après : `ADM-WG-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.10, §9.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
