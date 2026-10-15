> **ADM-WJ-03** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Fiche « ultras_bcn » (Actif · 1 avertissement ; ultras@exemple.com · inscrit le 14 juin 2026 · Barcelone, ES) avec boutons Avertir / Suspendre / Bannir, KPI (Points 880 niveau Culé, Série max 9 j, Signalements reçus 5 dont 2 fondés, Groupes 2 : Culés Paris, Peñas BCN), « Activité récente » et « Données personnelles ».

## ✅ Objectif

Contextualiser un utilisateur (récidive, activité) avant sanction, sans exposer de données excessives.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-02` — Fiche utilisateur
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__desktop_light.webp?raw=true' width='330' alt='WJ-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__desktop_dark.webp?raw=true' width='330' alt='WJ-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__tablet_light.webp?raw=true' width='330' alt='WJ-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-02_fiche-utilisateur__tablet_dark.webp?raw=true' width='330' alt='WJ-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « ultras_bcn » · « Actif · 1 avertissement » · « ultras@exemple.com · inscrit le 14 juin 2026 · Barcelone, ES » · « Avertir » · « Suspendre » · « Bannir » · « Points » · « niveau Culé » · « Série max » · « 9 j » · « Signalements reçus » · « 2 fondés » · « Groupes » · « Culés Paris, Peñas BCN » · « Activité récente » · « Message publié dans Culés Paris » · « il y a 14 min » · « Quiz du jour terminé · 7/10 » · « il y a 2 h » · « Connexion · Chrome Android · Barcelone » · « Wallpaper généré » · « hier »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-01%5D%22) · [ADM-WJ-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-04%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22) · [API-MODER-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-03%5D%22) · [API-MODER-13](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-13%5D%22) · [API-MODER-14](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-14%5D%22) · [API-MODER-15](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-15%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Encart bleu « Données minimisées : aucune position GPS stockée. Ville déclarée uniquement. » ; consentement géoloc. (Accordé · 12 sept.), notifications (Activées), langue (Español) issus de l'historique des consentements.
- Activité récente : événements horodatés (message publié, quiz du jour 7/10, connexion Chrome Android · Barcelone, wallpaper généré).
- Lien vers UserModerationHistoryPage (historique complet, CDC §4.6.1).
- Aucune donnée sensible supplémentaire (pas de mot de passe, pas de coordonnées).

## 🔄 Comportement et états

- Chargement skeleton de page ; 404 : « Utilisateur introuvable » ; erreur : ErrorState.
- Utilisateur banni : bandeau rouge, boutons Avertir/Suspendre désactivés.

## 🛠️ Tâches

- [ ] Créer `pages/UserDetailPage.tsx`, `components/UserHeader.tsx`, `UserKpiCards.tsx`, `UserActivityList.tsx`, `UserPersonalDataCard.tsx`.
- [ ] Mapper consentements (consent_records) vers libellés.
- [ ] Fil d'Ariane Communauté > Utilisateurs > pseudo.
- [ ] Lien historique de modération.
- [ ] Hook useAdminUser.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné un utilisateur avec 1 avertissement, alors le statut « Actif · 1 avertissement » est affiché.
- [ ] Étant donné un utilisateur banni, alors Avertir et Suspendre sont désactivés.
- [ ] Étant donné la fiche, alors aucune latitude/longitude n'est affichée.
- [ ] Étant donné un id inconnu, alors la page 404 utilisateur est affichée.

## 🧪 Tests à écrire

- [ ] Test composant : UserKpiCards
- [ ] Test composant : bandeau banni
- [ ] Test page : 404 utilisateur
- [ ] Test : aucune coordonnée rendue
- [ ] Test axe

## ♿ Accessibilité et i18n

- Titre h1 = pseudo ; KPI avec libellés

## 🔗 Dépendances

À réaliser après : `ADM-WJ-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6.1
- CDC Global §3.2 (RGPD)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
