> **ADM-WB-03** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La sidebar actuelle liste les modules à plat. Les maquettes les regroupent par rubriques (PILOTAGE, CONTENU, COMMUNAUTÉ, SYSTÈME), ajoutent des pastilles de compteur (Questions de quiz 12, Modération 18, Groupes locaux 4) et une carte utilisateur en bas avec badge de rôle.

## ✅ Objectif

Refondre `Sidebar.tsx` et `navigation.ts` pour reproduire les rubriques, les compteurs et la visibilité par rôle des maquettes WB-01/02/03.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-01` — Dashboard — super-admin
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true' width='330' alt='WB-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true' width='330' alt='WB-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true' width='330' alt='WB-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true' width='330' alt='WB-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bonjour Camille, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % vs hier » · « Signalements en attente » · « +5 depuis hier » · « File BullMQ » · « 3 jobs » · « 0 en échec »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-04%5D%22) · [ADM-WB-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-05%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-33%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

#### `WB-02` — Dashboard — content-manager
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_light.webp?raw=true' width='330' alt='WB-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__desktop_dark.webp?raw=true' width='330' alt='WB-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_light.webp?raw=true' width='330' alt='WB-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-02_dashboard-content-manager__tablet_dark.webp?raw=true' width='330' alt='WB-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Bonjour Léa, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Fiches joueurs publiées » · « 64 / 71 » · « 7 incomplètes » · « Questions IA à valider » · « +4 depuis hier » · « Anecdotes planifiées » · « 9 jours non couverts » · « Taux de réussite moyen quiz » · « 63 % » · « +1,2 pt » · « Calendrier éditorial · à venir » · « Lun. 19 oct. » · « Le but de Koeman à Wembley » · « Planifié » · « Mar. 20 oct. » · « Aucun contenu » · « À programmer » · « Mer. 21 oct. »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-06%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-46](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-46%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22) · [API-FOOT-55](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-55%5D%22)

#### `WB-03` — Dashboard — modérateur
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_light.webp?raw=true' width='330' alt='WB-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__desktop_dark.webp?raw=true' width='330' alt='WB-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_light.webp?raw=true' width='330' alt='WB-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-03_dashboard-moderateur__tablet_dark.webp?raw=true' width='330' alt='WB-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Bonjour Karim, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Signalements en attente » · « 6 urgents » · « Traités aujourd’hui » · « +12 vs hier » · « Délai moyen de traitement » · « 1 h 12 » · « −9 min » · « Groupes à valider » · « 2 depuis hier » · « À traiter en priorité » · « File complète » · « Gravité » · « Il y a » · « Message · Culés Paris » · « Urgent » · « 12 min » · « Pseudo · xX_haine_Xx » · « À vérifier »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-07%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22)

#### `WA-08` — Accès non autorisé (403)
_Module : Authentification et erreurs_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_light.webp?raw=true' width='330' alt='WA-08 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__desktop_dark.webp?raw=true' width='330' alt='WA-08 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_light.webp?raw=true' width='330' alt='WA-08 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WA/WA-08_acces-non-autorise-403__tablet_dark.webp?raw=true' width='330' alt='WA-08 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Accès non autorisé » · « Ton rôle » · « ne permet pas d'accéder à la modération. Tu es bien connecté(e) : aucune action n'est requise sur ta session. » · « Retour au tableau de bord » · « Demander l’accès »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WA-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-13%5D%22) · [ADM-WA-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-14%5D%22) · [ADM-WA-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-16%5D%22) · [ADM-WA-19](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WA-19%5D%22) · [API-AUTH-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-32%5D%22) · [API-AUTH-37](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-AUTH-37%5D%22)

## 📐 Règles de gestion

- Rubriques et entrées (super-admin) : PILOTAGE › Tableau de bord ; CONTENU › Joueurs, Matchs, Contenu historique, Questions de quiz (badge 12) ; COMMUNAUTÉ › Modération (badge 18), Groupes locaux (badge 4), Utilisateurs ; SYSTÈME › Supervision, Journal d'audit, Notifications, Comptes admin, Configuration.
- Content-manager (WB-02) : PILOTAGE + CONTENU uniquement. Modérateur (WB-03) : PILOTAGE + COMMUNAUTÉ (Modération, Groupes locaux, Utilisateurs). Une rubrique vide est masquée.
- Pastilles : rond grenat `bg-primary` texte blanc, nombre ≥ 100 affiché « 99+ » ; valeurs issues de `GET /admin/nav/counters` (staleTime 30 s) : quiz en attente de validation, signalements en attente, groupes à valider.
- Carte utilisateur : avatar initiales, nom, badge de rôle (Super-admin noir/blanc, Content-manager rose, Modérateur bleu) et menu ⋮ (Déconnexion).
- En-tête : logo « UNIVERS BARÇA » + badge « ADMIN » bleu clair.

## 🔄 Comportement et états

- L'entrée active est surlignée en rose clair avec texte grenat.
- Largeur fixe 256 px en desktop ; tiroir (Radix Dialog) sous 1024 px avec bouton menu dans la barre supérieure.
- Le fait d'être sans droit ne déclenche pas l'entrée (masquée) — la page 403 reste atteignable par URL directe.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/nav/counters` | Compteurs de la sidebar, filtrés par rôle | — | { success:true, data:{ quizPending:12, reportsPending:18, groupsToValidate:4 } } |

## 🛠️ Tâches

- [ ] Modifier `src/lib/navigation.ts` : ajouter `group: 'pilotage'|'contenu'|'communaute'|'systeme'`, `counterKey?`, entrées « Contenu historique », « Groupes locaux », « Journal d'audit », « Configuration » ; renommer « Matchs & compétitions » en « Matchs ».
- [ ] Refondre `src/components/layout/Sidebar.tsx` (`SidebarGroup`, `SidebarItem`, `CounterBadge`, `SidebarUserCard`).
- [ ] Créer `src/hooks/useNavCounters.ts` + `navApi.counters()`.
- [ ] Créer `RoleBadge` dans `src/components/shared/`.
- [ ] Variante tiroir mobile/tablette.
- [ ] Mettre à jour `navigation.test.ts` (visibilité par rôle).
- [ ] Captures 3 rôles clair/sombre.

## ✔️ Critères d'acceptation

- [ ] Étant donné un super-admin, quand la sidebar s'affiche, alors les 4 rubriques et 13 entrées apparaissent.
- [ ] Étant donné un content-manager, quand la sidebar s'affiche, alors les rubriques COMMUNAUTÉ et SYSTÈME sont absentes.
- [ ] Étant donné 18 signalements en attente, quand la sidebar s'affiche, alors la pastille de Modération affiche 18.
- [ ] Étant donné 1000 px de large, quand je clique sur le bouton menu, alors la sidebar s'ouvre en tiroir et se ferme sur Échap.

## 🧪 Tests à écrire

- [ ] navigation.test.ts : entrées par rôle et par rubrique
- [ ] Sidebar.test.tsx : pastilles et « 99+ »
- [ ] Sidebar.test.tsx : entrée active surlignée
- [ ] Playwright : tiroir en tablette

## ♿ Accessibilité et i18n

- `nav aria-label="Navigation principale"`, `aria-current="page"`
- Pastille : aria-label « 18 en attente »

## 📚 Références

- CDC Admin §3
- CDC Admin §12.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
