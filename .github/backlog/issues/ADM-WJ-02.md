> **ADM-WJ-02** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Vu en rôle Modérateur (Karim Benali). Titre « Utilisateurs » ; « 12 480 comptes · 84 suspendus · 12 bannis » ; bouton « Exporter CSV » ; recherche + filtres Statut / Pays / Inscription / Langue ; table Utilisateur (avatar, nom, e-mail), Localisation, Statut, Points, Dernière activité, menu ⋮ ; pagination « 1–6 sur 12480 ».

## ✅ Objectif

Retrouver rapidement un utilisateur pour contextualiser une décision de modération.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WJ-01` — Liste des utilisateurs
_Module : Utilisateurs et évolutions phase 2-3_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__desktop_light.webp?raw=true' width='330' alt='WJ-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__desktop_dark.webp?raw=true' width='330' alt='WJ-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__tablet_light.webp?raw=true' width='330' alt='WJ-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WJ/WJ-01_liste-des-utilisateurs__tablet_dark.webp?raw=true' width='330' alt='WJ-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « 12 480 comptes · 84 suspendus · 12 bannis » · « Exporter CSV » · « Rechercher… » · « Statut » · « Pays » · « Inscription » · « Langue » · « Utilisateur » · « Localisation » · « Points » · « Dernière activité » · « Boris T. » · « boris@exemple.com » · « Yaoundé, CM » · « Actif » · « 2 340 » · « il y a 2 min » · « Aïcha Ngono » · « aicha@exemple.com » · « 1 420 » · « il y a 1 h »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WJ-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-01%5D%22) · [ADM-WJ-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-04%5D%22) · [ADM-WJ-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WJ-13%5D%22)

## 📐 Règles de gestion

- Statuts : Actif (vert), Actif · 1 avert. (jaune), Suspendu 7 j (rouge), Banni.
- Localisation = ville déclarée + code pays (Yaoundé, CM) ; « — » si non renseignée (aucune géolocalisation précise).
- Recherche partielle nom/e-mail (debounce 300 ms) ; filtres persistés dans l'URL ; pagination serveur 50 lignes.
- Accessible aux rôles moderator et super-admin ; menu ⋮ : Ouvrir la fiche, Avertir, Suspendre, Bannir (selon permissions).
- Mode dense optionnel (§9.7).

## 🔄 Comportement et états

- Chargement skeleton ; vide « Aucun utilisateur » vs « Aucun résultat » + Réinitialiser les filtres.
- Clic sur une ligne → /utilisateurs/:id.

## 🛠️ Tâches

- [ ] Créer `pages/UsersListPage.tsx`, `components/UsersTable.tsx`, `UserFilters.tsx`, `UserStatusBadge.tsx`.
- [ ] Compteurs d'en-tête via endpoint de stats (comptes, suspendus, bannis).
- [ ] Intégrer DataTable partagé avec tri serveur.
- [ ] Formatage points tabular-nums, dates relatives fr.
- [ ] Menu d'actions Radix.
- [ ] Bouton Exporter CSV → useExport utilisateurs (colonnes minimisées).
- [ ] Responsive tablette.

## ✔️ Critères d'acceptation

- [ ] Étant donné 12 480 comptes, alors « 1–50 sur 12480 » et 250 pages.
- [ ] Étant donné un filtre Statut=Suspendu, alors l'URL contient status=suspended.
- [ ] Étant donné aucun résultat, alors l'état différencié apparaît.
- [ ] Étant donné un content-manager, alors la route est refusée.

## 🧪 Tests à écrire

- [ ] Test composant : UserStatusBadge
- [ ] Test composant : table colonnes
- [ ] Test page : filtres + URL
- [ ] Test page : état vide filtré
- [ ] Test axe

## ♿ Accessibilité et i18n

- Avatars avec alt vide décoratif ; nom en texte

## 🔗 Dépendances

À réaliser après : `ADM-WJ-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6, §6.5, §9.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
