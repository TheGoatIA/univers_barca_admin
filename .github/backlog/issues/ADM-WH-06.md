> **ADM-WH-06** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

QueuesMonitorPage affiche quatre cartes (calendar-sync 3/0/1284, notifications 0/0/8402, wallpapers 14/2/316, quiz-generation 1/0/92 : en attente / échecs / terminés) puis un tableau « Jobs en échec · dead letter » (badge « 2 jobs »).

## ✅ Objectif

Permettre au super-admin de voir l'état des files et d'identifier les jobs en échec.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-02` — Files d’attente BullMQ
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_light.webp?raw=true' width='330' alt='WH-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__desktop_dark.webp?raw=true' width='330' alt='WH-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_light.webp?raw=true' width='330' alt='WH-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-02_files-d-attente-bullmq__tablet_dark.webp?raw=true' width='330' alt='WH-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Files d’attente » · « Files d’attente BullMQ » · « Jobs persistés et idempotents · relance manuelle des échecs » · « Actualiser » · « calendar-sync » · « En attente » · « Échecs » · « Terminés » · « notifications »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-05%5D%22) · [ADM-WH-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-07%5D%22) · [ADM-WH-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-14%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22) · [API-PLAT-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-14%5D%22) · [API-PLAT-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-15%5D%22) · [API-PLAT-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-21%5D%22) · [API-PLAT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-48%5D%22) · [API-PLAT-53](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-53%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Une carte par file : nom, icône, trois compteurs ; valeur « En attente » en jaune si au-dessus du seuil, « Échecs » en rouge si > 0.
- Tableau dead letter : colonnes Job (monospace, ex. wp-7f3a21), File, Erreur (rouge), Tentatives (5 / 5), Relances manuelles (compteur), Actions (Relancer, Marquer traité). Tri par colonne côté client sur ≤ 50 lignes, sinon serveur.
- Files du CDC Backend §7 : sync-live-matches, generate-daily-challenge, compute-fantasy-scores, send-notifications, generate-wallpaper, refresh-calendar-feed… les noms affichés proviennent de l'API.
- Bouton « Actualiser » (en-tête) force le refetch ; auto-refresh 30 s.

## 🔄 Comportement et états

- Chargement : 4 cartes skeleton + 3 lignes de table skeleton.
- Aucun échec : état vide « Aucun job en échec » avec illustration légère.
- Erreur API : ErrorState + Réessayer.
- Surbrillance de la file ciblée par ?queue=wallpapers.

## 🛠️ Tâches

- [ ] Créer `pages/QueuesMonitorPage.tsx`, `components/QueueCard.tsx`, `components/FailedJobsTable.tsx` (DataTable partagé).
- [ ] Format monospace pour les identifiants (font-mono, token text-2).
- [ ] Gérer ?queue= pour le filtre/surbrillance.
- [ ] Compteurs formatés fr-FR (1 284 → maquette montre « 1284 » : suivre la maquette sans séparateur sous 10 000 est à valider ; utiliser Intl cohérent partout).
- [ ] Bouton Actualiser avec spinner (icône RefreshCw, aria-busy).
- [ ] Cas tablette : cartes 2×2, table défilante horizontalement.

## ✔️ Critères d'acceptation

- [ ] Étant donné wallpapers avec 14 en attente et seuil 10, alors le compteur est jaune.
- [ ] Étant donné 2 jobs en échec, alors le badge « 2 jobs » s'affiche et 2 lignes sont listées.
- [ ] Étant donné 0 échec, alors l'état vide est affiché.
- [ ] Étant donné ?queue=wallpapers, alors la carte wallpapers est mise en évidence.

## 🧪 Tests à écrire

- [ ] Test composant : QueueCard états normal/alerte
- [ ] Test composant : FailedJobsTable colonnes et tri
- [ ] Test page : état vide
- [ ] Test page : bouton Actualiser refetch
- [ ] Test axe : tableau avec en-têtes scope=col

## ♿ Accessibilité et i18n

- Libellés fr.ts supervision.files.*
- Compteurs avec libellé accessible « 14 jobs en attente »

## 🔗 Dépendances

À réaliser après : `ADM-WH-02` · `ADM-WH-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.7.1
- CDC Backend §7, §7.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
