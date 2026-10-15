> **ADM-WI-18** · Écran · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Page « Exports et rapports » : carte « Rapport hebdomadaire » (Switch, « Synthèse envoyée chaque lundi à 08:00 au super-admin », cases Nouveaux utilisateurs, Signalements traités, Incidents techniques, Consommation IA, Destinataire e-mail) et carte « Exports » (Joueurs CSV · Excel, Utilisateurs CSV, Signalements traités CSV · Excel, Journal d'audit CSV, bouton Exporter).

## ✅ Objectif

Configurer le rapport et lancer les exports (CDC §6.5).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-09` — Exports et rapports
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_light.webp?raw=true' width='330' alt='WI-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_dark.webp?raw=true' width='330' alt='WI-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_light.webp?raw=true' width='330' alt='WI-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_dark.webp?raw=true' width='330' alt='WI-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Rapports » · « Exports et rapports » · « Exports CSV/Excel et rapport hebdomadaire par e-mail » · « Feature flags » · « Quotas IA » · « Rapport hebdomadaire » · « Synthèse envoyée chaque lundi à 08:00 au super-admin. » · « Nouveaux utilisateurs » · « Signalements traités » · « Incidents techniques » · « Consommation IA »

**Composants repérés** : `avatar`, `btn`, `card`, `input`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-19%5D%22)

## 📐 Règles de gestion

- Rapport : activable/désactivable ; au moins une rubrique cochée si activé ; destinataire = e-mail valide (par défaut celui du super-admin connecté).
- Envoi chaque lundi 08:00 (généré côté backend, consultable ici).
- Exports restreints aux rôles autorisés sur la donnée (§6.5) ; ici super-admin.
- Format d'export au choix quand CSV et Excel sont offerts.

## 🔄 Comportement et états

- Switch OFF : cases grisées.
- Enregistrement automatique avec toast, ou bouton Enregistrer à valider selon implémentation (suivre la maquette : modification immédiate + toast).
- Export en cours : bouton en chargement ; fichier téléchargé.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `PATCH` | `/api/v1/admin/config/weekly-report` | (à créer) active et configure le rapport hebdomadaire | {enabled,sections:[…],recipient} | {data:{…}} |

## 🛠️ Tâches

- [ ] Créer `pages/ReportsTab.tsx`, `WeeklyReportCard.tsx`, `ExportsCard.tsx`.
- [ ] Schéma Zod de configuration du rapport.
- [ ] Endpoints GET/PATCH /admin/config/weekly-report (à créer).
- [ ] Brancher `useExport` (FND) pour chaque ligne.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné le rapport désactivé, alors les cases sont désactivées.
- [ ] Étant donné aucune rubrique cochée avec rapport activé, alors l'enregistrement est refusé.
- [ ] Étant donné « Exporter Joueurs » en Excel, alors un .xlsx est téléchargé.

## 🧪 Tests à écrire

- [ ] Test composant : WeeklyReportCard états
- [ ] Test unitaire : schéma rapport
- [ ] Test composant : ExportsCard formats
- [ ] Test : e-mail invalide

## ♿ Accessibilité et i18n

- Cases avec labels explicites

## 🔗 Dépendances

À réaliser après : `ADM-WI-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
