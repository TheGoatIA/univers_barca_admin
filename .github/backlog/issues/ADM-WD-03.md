> **ADM-WD-03** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

La maquette expose un champ « Rechercher… » et trois filtres déroulants : Compétition, Dates, Statut de synchro. Le CDC Admin §4.10 impose que les filtres avancés soient combinables et persistés dans l'URL pour pouvoir partager un lien filtré.

## ✅ Objectif

Rendre la liste filtrable (recherche texte, compétition, plage de dates, source API/édition manuelle/conflit) avec état dans les search params.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-01` — Liste des matchs
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_light.webp?raw=true' width='330' alt='WD-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__desktop_dark.webp?raw=true' width='330' alt='WD-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_light.webp?raw=true' width='330' alt='WD-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-01_liste-des-matchs__tablet_dark.webp?raw=true' width='330' alt='WD-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Matchs et compétitions » · « Synchronisation API football : dernière mise à jour il y a 6 min » · « Synchroniser » · « Match historique » · « À venir » · « En direct » · « Historiques » · « Conflits » · « Rechercher… »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-02%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-09%5D%22) · [ADM-WD-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-12%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-02%5D%22) · [API-FOOT-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-22%5D%22) · [API-FOOT-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-23%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-25](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-25%5D%22) · [API-FOOT-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-26%5D%22) · [API-FOOT-28](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-28%5D%22) · [API-FOOT-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-29%5D%22) · [API-FOOT-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-31%5D%22) · [API-FOOT-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-32%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-43](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-43%5D%22) · [API-FOOT-44](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-44%5D%22) · [API-FOOT-52](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-52%5D%22)

## 📐 Règles de gestion

- Recherche textuelle debouncée à 300 ms (hook useDebounced existant) sur nom d'équipe ou identifiant de match.
- Filtre Compétition : liste issue de GET /admin/matches/competitions (Liga EA Sports, Ligue des champions, Coupe du Roi…), sélection multiple.
- Filtre Dates : plage (du / au) avec raccourcis « 7 prochains jours », « Ce mois-ci », « Saison en cours » ; validation from ≤ to.
- Filtre Statut de synchro : API football · Édition manuelle · Conflit (valeurs syncSource=api|manual|conflict).
- Les filtres sont lus/écrits via useSearchParams (?q=&competition=&from=&to=&sync=&tab=&page=) ; tout changement de filtre remet page=1 ; un bouton « Réinitialiser » apparaît dès qu'un filtre est actif.

## 🔄 Comportement et états

- Rechargement de la page : l'état est restauré depuis l'URL.
- Aucune requête n'est envoyée pendant la saisie avant 300 ms d'inactivité.
- Combinaison sans résultat : état vide avec rappel des filtres actifs en chips supprimables.
- Un paramètre d'URL invalide (date illisible) est ignoré silencieusement et nettoyé.

## 🗄️ Données

- Query params de /matchs

## 🛠️ Tâches

- [ ] Créer src/hooks/useMatchFilters.ts (lecture/écriture typée des search params via Zod .safeParse).
- [ ] Créer src/components/matches/MatchFilters.tsx (Input recherche + trois menus Radix DropdownMenu).
- [ ] Créer src/components/shared/DateRangeFilter.tsx réutilisable (WD, WG).
- [ ] Créer src/components/shared/FilterChips.tsx pour afficher/supprimer les filtres actifs.
- [ ] Ajouter GET /admin/matches/competitions dans matches.api.ts (listCompetitions) avec cache 1 h.
- [ ] Propager les filtres dans useMatches (queryKey) et mettre à jour la pagination.
- [ ] Implémenter le bouton « Réinitialiser les filtres ».
- [ ] Documenter les paramètres d'URL dans docs/ du dépôt si un fichier de routes existe.

## ✔️ Critères d'acceptation

- [ ] Étant donné ?competition=ldc&sync=conflict dans l'URL, quand la page charge, alors les deux filtres sont affichés actifs et la liste est filtrée.
- [ ] Étant donné une saisie « Bayern » puis une pause de 300 ms, quand le debounce expire, alors une seule requête q=Bayern est émise.
- [ ] Étant donné un filtre modifié sur la page 3, quand il change, alors page est remise à 1.
- [ ] Étant donné from > to, quand je valide, alors un message « La date de début doit précéder la date de fin » s'affiche et la requête n'est pas émise.

## 🧪 Tests à écrire

- [ ] useMatchFilters.test.ts : round-trip URL → objet → URL.
- [ ] MatchFilters.test.tsx : debounce 300 ms (fake timers).
- [ ] DateRangeFilter.test.tsx : validation from ≤ to.
- [ ] e2e : lien filtré partagé restitue la même liste.

## ♿ Accessibilité et i18n

- Chaque filtre a un aria-label (« Filtrer par compétition »).
- Chips supprimables au clavier (Backspace/Delete, bouton avec aria-label « Retirer le filtre Liga »).

## 🔗 Dépendances

À réaliser après : `ADM-WD-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.10
- CDC Admin §4.9.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
