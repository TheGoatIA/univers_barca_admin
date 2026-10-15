> **ADM-WI-19** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

Les exports du CDC §6.5 portent sur des données potentiellement personnelles (utilisateurs) : minimisation et restriction par rôle obligatoires.

## ✅ Objectif

Produire des exports conformes RGPD via un hook partagé.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WI-09` — Exports et rapports
_Module : Comptes, configuration et notifications_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_light.webp?raw=true' width='330' alt='WI-09 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__desktop_dark.webp?raw=true' width='330' alt='WI-09 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_light.webp?raw=true' width='330' alt='WI-09 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WI/WI-09_exports-et-rapports__tablet_dark.webp?raw=true' width='330' alt='WI-09 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Rapports » · « Exports et rapports » · « Exports CSV/Excel et rapport hebdomadaire par e-mail » · « Feature flags » · « Quotas IA » · « Rapport hebdomadaire » · « Synthèse envoyée chaque lundi à 08:00 au super-admin. » · « Nouveaux utilisateurs » · « Signalements traités » · « Incidents techniques » · « Consommation IA »

**Composants repérés** : `avatar`, `btn`, `card`, `input`, `toggle`

</details>

**Issues liées sur ce même écran :** [ADM-WI-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-01%5D%22) · [ADM-WI-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-02%5D%22) · [ADM-WI-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WI-18%5D%22) · [API-PLAT-20](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-20%5D%22) · [API-PLAT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-PLAT-55%5D%22)

## 📐 Règles de gestion

- Utilisateurs : colonnes minimisées (id, pseudo, pays, statut, date d'inscription) — pas d'e-mail en clair sauf rôle super-admin et justification saisie.
- Signalements traités : id, type de contenu, gravité, action, date ; sans identité du rapporteur (§4.6.3).
- Joueurs : id, nom, poste, nationalité, statut, complétion des langues.
- Chaque export est journalisé (EXPORT_GENERATED, type, filtres, nombre de lignes).
- Plafond 100 000 lignes.

## 🔄 Comportement et états

- Export long : téléchargement asynchrone avec notification si > 10 s (si API le propose).

## 🛠️ Tâches

- [ ] Hook `useExport(resource, format)` appelant GET /admin/exports/:resource?format=csv|xlsx (à créer).
- [ ] Dialogue de justification pour export de données personnelles.
- [ ] Gestion Content-Disposition du nom de fichier.
- [ ] Neutralisation des formules.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné un export utilisateurs, alors la colonne e-mail est absente pour un moderator.
- [ ] Étant donné un export, alors une entrée d'audit est créée.
- [ ] Étant donné > 100 000 lignes, alors un message demande d'affiner.

## 🧪 Tests à écrire

- [ ] Test hook : formats
- [ ] Test unitaire : neutralisation formules
- [ ] Test composant : justification requise
- [ ] Test : colonnes minimisées

## 🔗 Dépendances

À réaliser après : `ADM-WI-18` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.5
- CDC Global §3.2 (RGPD)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
