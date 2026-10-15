> **ADM-WG-22** · Écran · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-06 (« BARÈME DE SANCTIONS », « Cadre de cohérence indicatif — la décision reste celle du modérateur ») présente un tableau Gravité / Exemple / 1re occurrence / Récidive (Faible : Propos déplacés isolés → Avertissement → Suspension 7 jours ; Moyenne : Harcèlement, contenu discriminatoire → Suspension 7 à 30 jours → Bannissement définitif ; Élevée : Menace, contenu illégal → Bannissement immédiat → N/A) et deux cartes « Traçabilité » et « Notification de l'utilisateur ». Source : CDC Admin §4.6.2 à §4.6.3.

## ✅ Objectif

Implémenter la page de référence `/moderation/bareme` alimentée par la même table que les suggestions.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-06` — Barème de sanctions
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_light.webp?raw=true' width='330' alt='WG-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__desktop_dark.webp?raw=true' width='330' alt='WG-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_light.webp?raw=true' width='330' alt='WG-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-06_bareme-de-sanctions__tablet_dark.webp?raw=true' width='330' alt='WG-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Barème de sanctions » · « Cadre de cohérence indicatif — la décision reste celle du modérateur » · « Gravité » · « Exemple » · « 1re occurrence » · « Récidive » · « Faible » · « Propos déplacés isolés » · « Avertissement » · « Suspension 7 jours » · « Moyenne » · « Harcèlement, contenu discriminatoire » · « Suspension 7 à 30 jours » · « Bannissement définitif » · « Élevée » · « Menace, contenu illégal » · « Bannissement immédiat » · « N/A » · « Traçabilité » · « Chaque action enregistre le type de sanction, la gravité retenue et le rang de récidive, pour auditer la cohérence entre modérateurs. » · « Notification de l’utilisateur » · « Toute sanction déclenche une notification explicative (motif général), sans révéler l’identité du rapporteur. »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WG-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-15%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-11%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-26%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Le tableau est généré depuis `SANCTION_SCALE` (`src/lib/sanctionScale.ts`) : une seule source pour l'écran et les dialogues (jamais de duplication des textes) ; colonnes triables selon la maquette (chevrons) mais l'ordre naturel reste Faible → Élevée.
- Badges de gravité en `SeverityBadge scale='chosen'` (Faible gris, Moyenne jaune, Élevée rouge).
- Cartes d'information : « Traçabilité » (« Chaque action enregistre le type de sanction, la gravité retenue et le rang de récidive, pour auditer la cohérence entre modérateurs. ») et « Notification de l'utilisateur » (« Toute sanction déclenche une notification explicative (motif général), sans révéler l'identité du rapporteur. »).
- Mention en sous-titre rappelant que le barème est indicatif : la décision reste celle du modérateur ; aucun bouton d'édition (le barème est codé et versionné ; ajustable par un super-admin dans une évolution future, hors périmètre).
- Accès : lien depuis le détail d'un signalement (infobulle de l'encadré du barème) et depuis la file ; rôles moderator et super-admin.
- Page statique rapide : aucun appel API requis, rendu instantané.

## 🛠️ Tâches

- [ ] Créer `src/pages/moderation/SanctionScalePage.tsx` (lazy, route `/moderation/bareme`).
- [ ] Créer `src/components/moderation/SanctionScaleTable.tsx` et `InfoCard.tsx` (titre + texte).
- [ ] Exposer `SANCTION_SCALE` avec libellés exacts dans `src/lib/sanctionScale.ts` (créé par WJ ; compléter ici).
- [ ] Ajouter le lien « Voir le barème » dans `SanctionHint` et la file.
- [ ] Ajouter le fil d'Ariane « Modération > Barème de sanctions ».
- [ ] Responsive tablette et thème sombre.
- [ ] Tests de la page.

## ✔️ Critères d'acceptation

- [ ] Étant donné la page, quand elle s'affiche, alors les trois lignes Faible, Moyenne et Élevée avec leurs sanctions sont visibles.
- [ ] Étant donné la gravité Élevée, quand la ligne s'affiche, alors la récidive indique « N/A ».
- [ ] Étant donné une modification de `SANCTION_SCALE`, quand la page est testée, alors le tableau et `suggestSanction` restent cohérents.
- [ ] Étant donné un content-manager, quand il ouvre la page, alors elle est refusée (403).

## 🧪 Tests à écrire

- [ ] SanctionScaleTable.test.tsx : 3 lignes et libellés exacts.
- [ ] SanctionScalePage.test.tsx : cartes d'information.
- [ ] sanctionScale.test.ts : cohérence table ↔ suggestions.
- [ ] axe : tableau.
- [ ] Test de route et de rôle.

## ♿ Accessibilité et i18n

- Table avec `<caption>` « Barème indicatif des sanctions » ; en-têtes de colonnes `scope='col'`.

## 🔗 Dépendances

À réaliser après : `ADM-WG-15` · `ADM-WG-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6.2, §4.6.2b, §4.6.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
