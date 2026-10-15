> **ADM-WD-05** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

La fiche (route /matchs/:id) affiche l'en-tête « BARÇA – REAL MADRID » avec badge « Programmé », écussons FCB/RMA, la ligne « Liga · Journée 11 · Sam. 24 oct. 2026 · 21:00 CEST · Estadi Olímpic », les boutons « Modifier » et « Saisir le résultat », quatre onglets (Informations, Compositions, Événements, Historique des modifications) et deux cartes : formulaire d'informations et panneau Synchronisation.

## ✅ Objectif

Livrer MatchDetailPage avec l'onglet Informations en lecture et le panneau de synchro, le fil d'Ariane « Contenu › Matchs › Barça – Real Madrid ».

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-02` — Détail d’un match
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true' width='330' alt='WD-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true' width='330' alt='WD-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true' width='330' alt='WD-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true' width='330' alt='WD-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça – Real Madrid » · « Programmé » · « Liga · Journée 11 · Sam. 24 oct. 2026 · 21:00 CEST · Estadi Olímpic » · « Modifier » · « Saisir le résultat » · « Informations » · « Compositions » · « Événements » · « Historique des modifications »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-06%5D%22) · [ADM-WD-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-07%5D%22) · [ADM-WD-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-08%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

## 📐 Règles de gestion

- Champs de l'onglet Informations : Compétition (select « Liga EA Sports »), Coup d'envoi (UTC) « 24/10/2026 19:00 » (affiché en UTC dans le champ, converti en CEST dans l'en-tête), Journée « 11 », Statut (select Programmé/En direct/Terminé/Reporté/Annulé), Stade « Estadi Olímpic Lluís Companys », Source de vérité « API football · id 1208477 » en lecture seule grisée.
- Mode lecture par défaut : les champs sont désactivés tant qu'on n'a pas cliqué sur « Modifier » (voir issue d'édition) ; « Saisir le résultat » est visible uniquement si le match est programmé ou en direct et dont le coup d'envoi est passé ou imminent.
- Panneau « Synchronisation » : Dernière synchro « il y a 6 min », Valeurs modifiées à la main « 0 », Flux calendrier .ics « À jour », encart vert « Aucun conflit en cours. » ; en cas de conflit, encart jaune « 1 conflit à arbitrer » avec lien vers /matchs/:id/conflit.
- Le titre est en Barlow Condensed majuscules ; les écussons ont un repli trigramme.
- Un match source=api verrouille en lecture seule les champs que l'API écrase (voir issue d'édition) ; un match source=manual est entièrement éditable.

## 🔄 Comportement et états

- Chargement : squelette de l'en-tête (titre + 2 lignes) et de deux cartes.
- Match introuvable (404) : page NotFound du module avec lien « Retour aux matchs ».
- Onglets synchronisés avec l'URL (?tab=compositions) ; l'onglet actif persiste au rafraîchissement.
- Erreur réseau : AppError avec « Réessayer ».

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/matches/:id` | Détail du match avec compteurs de synchro | — | {match, sync:{lastSyncAt,manualOverrides,icsStatus,conflict:null\|{...}}} |

## 🗄️ Données

- Match (competitionId, kickoffAt, matchday, status, venue, externalRef, source)

## 🛠️ Tâches

- [ ] Créer src/pages/matches/MatchDetailPage.tsx et la route /matchs/:id (sous ProtectedRoute des rôles content-manager/super-admin).
- [ ] Créer src/components/matches/MatchHeader.tsx (écussons, titre, badge, méta-ligne, boutons).
- [ ] Créer src/components/matches/MatchInfoForm.tsx (RHF + Zod, champs désactivés en lecture).
- [ ] Créer src/components/matches/SyncPanel.tsx (partagé avec l'issue synchro).
- [ ] Créer src/components/shared/Breadcrumbs.tsx si absent (Contenu › Matchs › titre du match).
- [ ] Créer src/components/shared/RouteTabs.tsx (Radix Tabs liés à ?tab=).
- [ ] Formater la méta-ligne avec Intl.DateTimeFormat('fr-FR', {timeZoneName:'short'}) → « CEST ».
- [ ] Ajouter un test de snapshot visuel Storybook pour MatchHeader (clair/sombre).

## ✔️ Critères d'acceptation

- [ ] Étant donné un match programmé, quand j'ouvre la fiche, alors le badge « Programmé », la méta-ligne et le bouton « Saisir le résultat » sont affichés.
- [ ] Étant donné un match avec source API, quand je consulte « Source de vérité », alors le champ affiche « API football · id 1208477 » et reste grisé.
- [ ] Étant donné un match sans conflit, quand le panneau Synchronisation s'affiche, alors l'encart vert « Aucun conflit en cours. » est visible.
- [ ] Étant donné ?tab=evenements, quand la page charge, alors l'onglet Événements est actif.

## 🧪 Tests à écrire

- [ ] MatchDetailPage.test.tsx : rendu complet depuis un mock.
- [ ] MatchHeader.test.tsx : badge et boutons selon le statut.
- [ ] MatchInfoForm.test.tsx : champs désactivés par défaut.
- [ ] e2e : navigation liste → fiche → onglets.

## ♿ Accessibilité et i18n

- Fil d'Ariane nav aria-label='Fil d'Ariane' avec aria-current='page'.
- Titre h1 unique ; onglets accessibles au clavier (flèches).

## 🔗 Dépendances

À réaliser après : `ADM-WD-01` · `ADM-WD-04` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.3
- CDC Backend §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
