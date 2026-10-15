> **ADM-WB-12** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

WB-06 : une boîte modale centrée s'ouvre sur le tableau de bord assombri. Le terme « ped » est saisi ; les résultats sont groupés en JOUEURS (Pedri · Milieu · Publié ; Pau Cubarsí · Défenseur), UTILISATEURS (Pedro Mendes · pedro.m@exemple.com), MATCHS (FCB – Pedrola · Match amical · 12 juil. 2026), GROUPES (Peñas de Pedralbes · Barcelone), puis « Voir tous les résultats → », avec un pied d'aide.

## ✅ Objectif

Construire la palette de commandes accessible, navigable au clavier, avec résultats groupés et mise en évidence de la ligne active.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-06` — Recherche globale — résultats
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true' width='330' alt='WB-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true' width='330' alt='WB-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true' width='330' alt='WB-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true' width='330' alt='WB-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « 0 échec » · « Erreurs critiques » · « −3 » · « ped » · « Esc »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-11%5D%22) · [ADM-WB-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-14%5D%22) · [ADM-WB-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-15%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-48%5D%22)

## 📐 Règles de gestion

- Dialogue Radix de ≈ 640 px de large, ancré à 110 px du haut, coins 16 px, fond blanc, voile `bg-black/40`.
- Entête : icône loupe, champ de saisie focalisé (curseur bleu), badge `Esc` à droite.
- Groupes avec titres en capitales grises (JOUEURS, UTILISATEURS, MATCHS, GROUPES), 5 lignes max chacun. Ligne joueur : avatar rond (photo ou initiales), nom en gras, « · Poste · Statut ». Ligne utilisateur : avatar initiales violet, nom + e-mail. Match : pastille icône ballon, « Équipe – Équipe · type · date longue ». Groupe : icône personnes + « Nom · ville ».
- Ligne active : fond rose clair, badge `↵` à droite ; `↑`/`↓` déplacent la sélection (boucle entre groupes), `Entrée` ouvre la fiche/le module, `Échap` ferme.
- Lien « Voir tous les résultats → » (bleu) → `/recherche?q=ped` ; pied : « ↑↓ naviguer », « ↵ ouvrir », à droite « 5 résultats max. par catégorie ».

## 🔄 Comportement et états

- Ouverture : Ctrl+K (Windows/Linux) ou Cmd+K (macOS), clic sur le champ de la barre supérieure ; le focus revient à l'élément précédent à la fermeture.
- Le terme recherché est mis en gras dans les noms (surlignage `<mark>` sur texte échappé, jamais HTML brut).
- Pendant la recherche : 3 lignes de squelette ; en cas d'erreur : « La recherche est indisponible. Réessaie. » + bouton Réessayer.
- État initial (champ vide) : invite « Tape au moins 2 caractères » et, si disponibles, les 5 dernières recherches de la session (stockage mémoire uniquement).
- Ouverture d'une ligne : navigation, fermeture de la palette ; l'état est réinitialisé.

## 🛠️ Tâches

- [ ] Créer `src/components/search/GlobalSearchDialog.tsx` (Radix Dialog + composant liste maison, ou `cmdk` après vérification de la licence MIT).
- [ ] Créer `SearchResultGroup.tsx`, `SearchResultRow.tsx`, `HighlightMatch.tsx`.
- [ ] Gérer la sélection active (`activeIndex` aplati sur tous les groupes) avec `aria-activedescendant`.
- [ ] Monter la palette dans `MainLayout` pilotée par `uiStore.searchOpen`.
- [ ] Intégrer `useGlobalSearch`.
- [ ] Gérer l'ouverture/fermeture avec focus trap Radix et restauration du focus.
- [ ] Animations : entrée 120 ms scale+fade (désactivée en reduced-motion).
- [ ] Tests RTL (clavier) + Playwright.

## ✔️ Critères d'acceptation

- [ ] Étant donné la saisie « ped », quand les résultats arrivent, alors 4 groupes s'affichent dans l'ordre Joueurs, Utilisateurs, Matchs, Groupes.
- [ ] Étant donné la première ligne active, quand j'appuie sur ↓ deux fois, alors la 3ᵉ ligne (utilisateur) est active.
- [ ] Étant donné une ligne active, quand j'appuie sur Entrée, alors la fiche correspondante s'ouvre et la palette se ferme.
- [ ] Étant donné la palette ouverte, quand j'appuie sur Échap, alors elle se ferme et le focus revient sur le champ de la barre supérieure.
- [ ] Étant donné 7 joueurs correspondants, quand la liste s'affiche, alors seuls 5 sont rendus.

## 🧪 Tests à écrire

- [ ] GlobalSearchDialog.test.tsx : ouverture Ctrl+K et Cmd+K
- [ ] GlobalSearchDialog.test.tsx : navigation clavier circulaire
- [ ] HighlightMatch.test.tsx : échappement HTML
- [ ] SearchResultRow.test.tsx : 4 types de lignes
- [ ] Playwright search.spec.ts : ouvrir, saisir, valider

## ♿ Accessibilité et i18n

- Rôles `combobox` / `listbox` / `option`, `aria-activedescendant`
- Annonce « 5 résultats » via aria-live

## 🔗 Dépendances

À réaliser après : `ADM-WB-11` · `ADM-WB-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.9
- CDC Admin §9.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
