> **ADM-WD-10** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

La résolution tranche un conflit entre l'API football et une correction éditoriale. Elle doit être atomique, explicite, journalisée (valeur avant/après, auteur, horodatage) et déclencher les effets en aval (flux .ics, rappels de notification, fermeture Fantasy) mentionnés dans la carte « Impact de la décision ».

## ✅ Objectif

Implémenter côté admin l'appel POST resolve-conflict avec les trois décisions, la gestion des erreurs, et la spécification du contrat à respecter côté API.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-03` — Résolution de conflit de synchronisation
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_light.webp?raw=true' width='330' alt='WD-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__desktop_dark.webp?raw=true' width='330' alt='WD-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_light.webp?raw=true' width='330' alt='WD-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-03_resolution-de-conflit-de-synchronisation__tablet_dark.webp?raw=true' width='330' alt='WD-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bayern – Barça » · « Conflit » · « Résoudre le conflit de synchronisation » · « Bayern Munich – FC Barcelone · Ligue des champions · Phase de ligue J3 » · « Ignorer pour l’instant » · « L'API football a détecté une modification qui diffère d'une correction éditoriale. Choisis explicitement la valeur à conserver : la décision est journalisée (avant/après, auteur, horodatage). » · « Champ » · « Valeur API football » · « Valeur éditoriale actuelle » · « Action » · « Heure du coup d’envoi »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-08%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-33%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22)

## 📐 Règles de gestion

- Décisions : accept-api (écrase editorialValue par apiValue), keep-editorial (conserve la valeur éditoriale ; la synchro ne doit plus signaler ce conflit tant que la valeur API ne change pas), manual (valeur saisie, validée comme dans l'édition).
- Aucune résolution implicite : le serveur refuse un POST sans decision explicite (422) et un POST sur un match sans conflit (409).
- L'audit enregistre action MATCH_CONFLICT_RESOLVED avec before {valeur éditoriale}, after {valeur retenue}, adminId, adminName, createdAt, et la décision ; la justification est facultative (champ texte ≤ 500 car.).
- Effets : mise à jour de kickoffAt → recalcul des rappels (job notifications), invalidation du flux .ics (rafraîchi sous 24 h), recalcul de la date de fermeture des compositions Fantasy ; ces effets sont déclenchés côté API et leur statut est restitué dans la réponse (impacts:['ics','notifications','fantasy']).
- Après résolution, syncConflict est vidé et source reste api si décision accept-api, devient manual si manual.

## 🔄 Comportement et états

- Mutation optimiste interdite (action à impact élevé) : l'interface attend la confirmation serveur avant de marquer la ligne résolue.
- Double clic protégé : bouton désactivé pendant la requête, clé d'idempotence (Idempotency-Key) envoyée.
- Erreur 409 (déjà résolu) : message dédié et rechargement du match.
- Échec partiel des effets de bord : la décision reste enregistrée, un avertissement liste les effets en échec.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/matches/:id/resolve-conflict` | Résout un conflit de synchronisation | {field:'kickoffAt'\|'score',decision:'accept-api'\|'keep-editorial'\|'manual',manualValue?,justification?} | {success:true,data:{match,impacts:['ics','notifications','fantasy']}} |

## 🗄️ Données

- Match.syncConflict
- AuditLog (MATCH_CONFLICT_RESOLVED)
- Jobs notifications et fantasy (effets de bord)

## 🛠️ Tâches

- [ ] Implémenter resolveConflict() et useResolveConflict (Idempotency-Key = uuid par intention).
- [ ] Mapper les trois boutons de ConflictRow sur les trois décisions.
- [ ] Valider manualValue avec les mêmes schémas que l'édition (kickoffAt, score).
- [ ] Ajouter le champ facultatif de justification (Textarea 500 car.) dans une section dépliable.
- [ ] Afficher les effets de bord renvoyés (toast détaillé).
- [ ] Écrire le contrat attendu dans docs/ (section « Résolution de conflit ») pour l'équipe API.
- [ ] Gérer 409/422 avec messages FR.
- [ ] Ajouter un test d'intégration MSW du parcours accept-api / keep-editorial / manual.

## ✔️ Critères d'acceptation

- [ ] Étant donné un conflit sur l'heure, quand je clique « Accepter l'API », alors le match passe à 21:00 et une entrée d'audit avant 20:00 / après 21:00 est créée.
- [ ] Étant donné « Conserver », quand je confirme, alors la valeur éditoriale 20:00 reste et le conflit disparaît.
- [ ] Étant donné « Éditer » avec 20:30, quand je valide, alors la source du match devient manual.
- [ ] Étant donné un double clic rapide, quand deux requêtes partent, alors une seule décision est appliquée (idempotence).
- [ ] Étant donné un match sans conflit, quand l'API répond 409, alors un message clair est affiché.

## 🧪 Tests à écrire

- [ ] useResolveConflict.test.tsx : envoie l'Idempotency-Key et la decision.
- [ ] resolveConflictSchema.test.ts : manual exige manualValue.
- [ ] ConflictRow.test.tsx : boutons désactivés pendant la requête.
- [ ] MSW : scénarios 200 / 409 / 422.
- [ ] e2e : audit visible dans l'onglet Historique après résolution.

## ♿ Accessibilité et i18n

- Résultat de la décision annoncé (role=status) : « Valeur de l'API acceptée ».

## 🔗 Dépendances

À réaliser après : `ADM-WD-09` · `ADM-WD-08` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.3
- CDC Admin §4.3.1
- CDC Admin §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
