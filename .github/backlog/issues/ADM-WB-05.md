> **ADM-WB-05** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Sous la courbe, WB-01 présente quatre panneaux : « Accès rapide » (4 raccourcis avec compteur), « Santé technique » (pastille Opérationnel, 3 métriques, mini-courbe), « Contenus incomplets » (lignes avec pastilles FR/EN/ES) et « Dernières actions d'administration » (flux de l'audit).

## ✅ Objectif

Implémenter ces quatre panneaux avec leurs états chargement/vide/erreur propres.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-01` — Dashboard — super-admin
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_light.webp?raw=true' width='330' alt='WB-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__desktop_dark.webp?raw=true' width='330' alt='WB-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_light.webp?raw=true' width='330' alt='WB-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-01_dashboard-super-admin__tablet_dark.webp?raw=true' width='330' alt='WB-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Bonjour Camille, voici l'état de l'écosystème aujourd'hui. » · « Export CSV » · « 7 derniers jours » · « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % vs hier » · « Signalements en attente » · « +5 depuis hier » · « File BullMQ » · « 3 jobs » · « 0 en échec »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-01%5D%22) · [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-03%5D%22) · [ADM-WB-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-04%5D%22) · [ADM-WB-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-08%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-33](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-33%5D%22) · [API-FOOT-49](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-49%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

## 📐 Règles de gestion

- Accès rapide : lignes cliquables avec icône, libellé, compteur coloré et chevron : « Signalements en attente » 18 (rose) → `/moderation?statut=en-attente` ; « Questions IA à valider » 12 (jaune) → `/quiz/validation` ; « Contenus incomplets » 7 (bleu) → `/joueurs?langues=incompletes` ; « Groupes à valider » 4 (grenat) → `/groupes?statut=en-attente`.
- Santé technique : pastille « Opérationnel » (vert) / « Dégradé » (jaune) / « Incident » (rouge) ; métriques « Erreurs 5xx » 0,21 %, « Disponibilité » 99,94 %, « Files · échecs » 3 / 0 ; mini-courbe verte (24 h) ; clic sur le titre → `/supervision`.
- Contenus incomplets : 3 premières lignes (nom + type : Joueur, Histoire…) avec trois pastilles FR/EN/ES (verte = complète, rouge = manquante) et bouton « Compléter » → fiche à l'onglet Biographie ; lien « Tout voir » → `/joueurs?langues=incompletes`.
- Dernières actions : avatar initiales, « Léa Martin a publié la fiche Pedri · il y a 4 min », « Karim Benali a suspendu l'utilisateur ultras_bcn · il y a 18 min », « Camille Durand a activé le flag… · il y a 1 h » ; lien « Journal d'audit » → `/journal-audit`. Horodatage relatif (`date-fns/formatDistanceToNow` locale fr).

## 🔄 Comportement et états

- Chaque panneau est un widget indépendant (requête, squelette et erreur propres).
- Les compteurs « Accès rapide » viennent du widget `quick-access` filtré par rôle ; une ligne dont la cible est interdite au rôle n'est pas rendue.
- Panneau vide : « Aucun contenu incomplet » (icône coche) / « Aucune action récente ».
- Rafraîchissement : santé technique 60 s, dernières actions 60 s, autres 5 min.

## 🛠️ Tâches

- [ ] Créer `src/components/dashboard/QuickAccessPanel.tsx`, `TechHealthPanel.tsx`, `IncompleteContentPanel.tsx`, `RecentActionsPanel.tsx`.
- [ ] Créer `src/components/shared/LangPills.tsx` (FR/EN/ES, états ok/manquant) — réutilisé par la liste joueurs.
- [ ] Créer `src/components/shared/Sparkline.tsx` (Recharts `LineChart` sans axes).
- [ ] Créer `src/components/shared/RelativeTime.tsx` (`<time dateTime>` + `title` absolu).
- [ ] Brancher `useQuickAccess`, `useTechHealth`, `useIncompleteContent`, `useRecentActions`.
- [ ] Gérer les liens profonds avec filtres d'URL.
- [ ] Tests RTL de chaque panneau + capture.

## ✔️ Critères d'acceptation

- [ ] Étant donné 18 signalements, quand le panneau Accès rapide s'affiche, alors « Signalements en attente » porte 18 et mène à `/moderation`.
- [ ] Étant donné Gavi sans EN ni ES, quand le panneau s'affiche, alors FR est vert et EN/ES rouges avec un bouton « Compléter ».
- [ ] Étant donné une action publiée il y a 4 minutes, quand le flux s'affiche, alors « il y a 4 min » est affiché avec l'horodatage exact en `title`.
- [ ] Étant donné l'API de santé en erreur, quand le panneau charge, alors seul ce panneau montre « Indisponible ».
- [ ] Étant donné aucun contenu incomplet, quand le panneau charge, alors « Aucun contenu incomplet » s'affiche.

## 🧪 Tests à écrire

- [ ] LangPills.test.tsx : combinaisons FR/EN/ES
- [ ] QuickAccessPanel.test.tsx : liens et compteurs
- [ ] IncompleteContentPanel.test.tsx : bouton Compléter
- [ ] RecentActionsPanel.test.tsx : temps relatif en français
- [ ] TechHealthPanel.test.tsx : états Opérationnel/Dégradé/Incident

## ♿ Accessibilité et i18n

- Panneaux `section aria-labelledby`
- Pastilles de langue : aria-label « Français : complet »

## 🔗 Dépendances

À réaliser après : `ADM-WB-04` · `ADM-WB-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.1
- CDC Admin §6.4
- CDC Admin §4.7

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
