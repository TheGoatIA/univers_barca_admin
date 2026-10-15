> **ADM-WH-07** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Le CDC §4.7.2 : un job passé en dead letter peut être relancé manuellement par un super-admin ; l'action est journalisée, le job conserve son identifiant d'origine et un compteur de relances manuelles est affiché pour repérer les jobs structurellement problématiques.

## ✅ Objectif

Implémenter les deux actions « Relancer » et « Marquer traité » avec confirmation, retour et traçabilité.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-02` — Files d’attente BullMQ
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true' width='330' alt='WH-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true' width='330' alt='WH-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true' width='330' alt='WH-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true' width='330' alt='WH-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Files d’attente » · « Files d’attente BullMQ » · « Jobs persistés et idempotents · relance manuelle des échecs » · « Actualiser » · « calendar-sync » · « En attente » · « Échecs » · « Terminés » · « notifications »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-06%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

## 📐 Règles de gestion

- POST /admin/observability/queues/:jobId/retry ; réservé super-admin ; le job garde son id (ex. wp-7f3a21) et manualRetries s'incrémente.
- « Marquer traité » retire le job de la liste sans le rejouer ; champ de justification facultatif (≤ 200 caractères).
- Confirmation via ConfirmDialog : « Relancer le job wp-7f3a21 ? » ; si manualRetries ≥ 3 un avertissement « Ce job a déjà été relancé 3 fois » est ajouté.
- Aucune mise à jour optimiste : la ligne n'est modifiée qu'après réponse serveur (CDC §2.4).
- Chaque action alimente le journal d'audit (types JOB_RETRIED, JOB_MARKED_HANDLED).

## 🔄 Comportement et états

- Pendant l'appel : bouton en état chargement, autres actions de la ligne désactivées.
- Succès : toast « Job wp-7f3a21 relancé » ; la ligne disparaît si le job repasse en file.
- Erreur 409 (job déjà relancé) : toast d'erreur explicite et refetch.
- Erreur 403 : toast « Action réservée au super-admin ».

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/admin/observability/queues/:jobId/retry` | Relance un job en dead letter | {} | {data:{id:'wp-7f3a21',manualRetries:2}} |
| `POST` | `/api/v1/admin/observability/queues/:jobId/handled` | (à créer côté API) marque le job comme traité | {note?:string} | {data:{id}} |

## 🛠️ Tâches

- [ ] Créer `components/RetryJobDialog.tsx` et `MarkHandledDialog.tsx` basés sur ConfirmDialog.
- [ ] Étendre `useRetryJob` / `useMarkJobHandled` avec gestion d'erreur typée.
- [ ] Afficher le compteur de relances avec StatusBadge d'alerte si ≥ 3.
- [ ] Ajouter l'événement analytics interne `admin_job_retry` (log front, cf. FND).
- [ ] Tests MSW des cas 200/409/403.

## ✔️ Critères d'acceptation

- [ ] Étant donné un job en échec, quand je clique Relancer puis confirme, alors POST /retry est appelé et un toast de succès s'affiche.
- [ ] Étant donné manualRetries = 3, alors la confirmation affiche l'avertissement.
- [ ] Étant donné un 409, alors le toast d'erreur apparaît et la liste est rechargée.
- [ ] Étant donné un moderator, alors les boutons n'existent pas (route inaccessible).

## 🧪 Tests à écrire

- [ ] Test composant : RetryJobDialog avertit à 3 relances
- [ ] Test hook : mutation invalide ['observability','queues']
- [ ] Test page : 409 géré
- [ ] Test : pas de mise à jour optimiste avant réponse

## ♿ Accessibilité et i18n

- Boutons avec libellé explicite « Relancer le job wp-7f3a21 » en aria-label

## 🔗 Dépendances

À réaliser après : `ADM-WH-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.7.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
