> **ADM-WB-15** · UX / Ergonomie · Priorité **P1** · Taille **S** · Phase 1 — MVP

## 🎯 Contexte

CDC §9.7 : raccourcis clavier sur les actions fréquentes, activables/désactivables selon la préférence. La palette introduit les premiers : Ctrl/Cmd+K, ↑↓, Entrée, Échap. Un registre commun évitera des écouteurs dispersés.

## ✅ Objectif

Créer un registre de raccourcis (hook + store) réutilisable par les modules suivants (modération, éditeurs).

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WB-06` — Recherche globale — résultats
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_light.webp?raw=true' width='330' alt='WB-06 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__desktop_dark.webp?raw=true' width='330' alt='WB-06 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_light.webp?raw=true' width='330' alt='WB-06 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-06_recherche-globale-resultats__tablet_dark.webp?raw=true' width='330' alt='WB-06 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « 0 échec » · « Erreurs critiques » · « −3 » · « ped » · « Esc »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-11%5D%22) · [ADM-WB-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-12%5D%22) · [ADM-WB-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-14%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-48%5D%22)

#### `WB-07` — Recherche globale — aucun résultat
_Module : Tableau de bord et recherche_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_light.webp?raw=true' width='330' alt='WB-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__desktop_dark.webp?raw=true' width='330' alt='WB-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_light.webp?raw=true' width='330' alt='WB-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WB/WB-07_recherche-globale-aucun-resultat__tablet_dark.webp?raw=true' width='330' alt='WB-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Utilisateurs actifs (J1) » · « 2 184 » · « +8,2 % » · « Signalements » · « +5 » · « File BullMQ » · « 0 échec » · « Erreurs critiques » · « −3 » · « zzzq » · « Esc »

**Composants repérés** : `avatar`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WB-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-02%5D%22) · [ADM-WB-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-11%5D%22) · [ADM-WB-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-13%5D%22) · [ADM-WB-16](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WB-16%5D%22) · [API-FOOT-48](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-48%5D%22)

## 📐 Règles de gestion

- Raccourcis livrés : `Ctrl/Cmd+K` ouvrir la recherche ; `Échap` fermer dialogues/palette ; `Ctrl/Cmd+S` enregistrer le brouillon dans une fiche (cf. WC) ; `g` puis `d` → tableau de bord, `g` puis `j` → joueurs (séquences à 1 s max).
- Ignorés quand le focus est dans un champ de saisie (sauf Ctrl/Cmd+K et Ctrl/Cmd+S).
- Préférence « Raccourcis clavier » (activé par défaut) dans un menu du profil, persistée dans `uiStore` ; Ctrl/Cmd+K reste toujours actif.
- Aide : `?` ouvre une liste des raccourcis disponibles pour la page courante.

## 🔄 Comportement et états

- Les raccourcis ne doivent pas entrer en conflit avec ceux du navigateur ou des lecteurs d'écran.
- Chaque action déclarée expose son raccourci dans `title`/`aria-keyshortcuts`.
- Sur macOS, `Ctrl` est remplacé par `⌘` dans les libellés.

## 🛠️ Tâches

- [ ] Créer `src/hooks/useHotkeys.ts` (registre, séquences, scope par route).
- [ ] Étendre `uiStore` avec `shortcutsEnabled`.
- [ ] Créer `src/components/shared/ShortcutsHelpDialog.tsx`.
- [ ] Créer `Kbd` (composant) utilisé par la barre supérieure et la palette.
- [ ] Détection plate-forme `isMac()` dans `src/lib/utils.ts`.
- [ ] Tests unitaires.

## ✔️ Critères d'acceptation

- [ ] Étant donné le focus hors champ, quand j'appuie sur Ctrl+K, alors la palette s'ouvre.
- [ ] Étant donné le focus dans un input, quand je tape « g », alors aucun raccourci ne se déclenche.
- [ ] Étant donné « Raccourcis » désactivé, quand j'appuie sur `g` `d`, alors rien ne se passe mais Ctrl+K fonctionne encore.
- [ ] Étant donné `?`, quand je l'appuie hors champ, alors la liste des raccourcis s'ouvre.

## 🧪 Tests à écrire

- [ ] useHotkeys.test.tsx : séquence g d avec timeout 1 s
- [ ] useHotkeys.test.tsx : ignore les champs de saisie
- [ ] uiStore.test.ts : préférence persistée
- [ ] Kbd.test.tsx : ⌘ sur macOS

## ♿ Accessibilité et i18n

- `aria-keyshortcuts` sur les boutons concernés

## 🔗 Dépendances

À réaliser après : `ADM-WB-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §9.7
- CDC Admin §4.9

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
