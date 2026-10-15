> **ADM-WE-05** · Écran · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Page /contenu/:id et /contenu/nouveau, fil d'Ariane « Contenu › Contenu historique › Le but de Koeman à Wembley », titre en majuscules avec badge « Prêt à publier » et ligne « Diffusion planifiée le lundi 19 octobre 2026 à 06:00 ». Boutons « Planifier » et « Publier ». Colonne principale : champ Titre, éditeur Texte * trilingue (compteur 171 / 600), bloc image « Choisir dans la médiathèque » (zone en pointillés), Date de diffusion (19/10/2026) et Catégorie (« Histoire du club »). Colonne droite : Aperçu mobile.

## ✅ Objectif

Implémenter le formulaire complet d'édition/création d'une anecdote avec sauvegarde, validation et état de complétion.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WE-02` — Éditeur trilingue et aperçu mobile
_Module : Contenu éditorial_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_light.webp?raw=true' width='330' alt='WE-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__desktop_dark.webp?raw=true' width='330' alt='WE-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_light.webp?raw=true' width='330' alt='WE-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WE/WE-02_editeur-trilingue-et-apercu-mobile__tablet_dark.webp?raw=true' width='330' alt='WE-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Le but de Koeman à Wembley » · « Prêt à publier » · « Diffusion planifiée le lundi 19 octobre 2026 à 06:00 » · « Planifier » · « Publier » · « Titre » · « Texte » · « FR · Français » · « EN · English » · « ES · Español » · « Le 20 mai 1992, Ronald Koeman inscrit sur coup franc le but qui offre au Barça sa première Coupe d’Europe des clubs champions, face à la Sampdoria. » · « Les 3 langues sont complètes — prêt à publier » · « 171 / 600 » · « Image d’illustration » · « Choisir dans la médiathèque » · « Date de diffusion » · « 19/10/2026 » · « Catégorie » · « Histoire du club » · « Aperçu mobile » · « Clair » · « Sombre »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WE-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-01%5D%22) · [ADM-WE-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-04%5D%22) · [ADM-WE-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-06%5D%22) · [ADM-WE-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-07%5D%22) · [ADM-WE-12](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-12%5D%22) · [ADM-WE-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-13%5D%22) · [ADM-WE-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WE-14%5D%22) · [API-FOOT-04](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-04%5D%22) · [API-FOOT-05](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-05%5D%22) · [API-FOOT-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-10%5D%22) · [API-FOOT-45](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-45%5D%22) · [API-FOOT-47](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-47%5D%22)

## 📐 Règles de gestion

- Titre obligatoire ≤ 120 caractères, trilingue (même TrilingualTextEditor en mode monoligne).
- Texte obligatoire ≤ 600 caractères par langue ; message « Les 3 langues sont complètes — prêt à publier ».
- Date de diffusion : format JJ/MM/AAAA, ne peut pas être dans le passé pour un contenu non publié ; l'heure de diffusion est 06:00 (heure de Paris), non éditable.
- Catégorie : liste fermée (Histoire du club, Joueurs, Matchs, Légendes, Stade) ; image : facultative, choisie dans la médiathèque (clé imageKey).
- Sauvegarde automatique du brouillon toutes les 30 s en cas de modification valide (localStorage en repli) et bouton « Enregistrer le brouillon ».

## 🔄 Comportement et états

- Chargement : squelette de l'éditeur.
- Création : statut Brouillon, titre de page « Nouvelle anecdote ».
- Une date déjà occupée par une autre anecdote déclenche un avertissement « Une anecdote est déjà planifiée ce jour » avec lien (non bloquant).
- Sortie avec modifications : confirmation (useBlocker).
- Erreur 422 : messages sous les champs et pastille rouge sur l'onglet de langue concerné.

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/admin/history-content/:id` | Charge l'anecdote | — | Anecdote |
| `POST` | `/api/v1/admin/history-content` | Création | {titleI18n,bodyI18n,category,publishOn,imageKey?} | Anecdote |

## 🗄️ Données

- Anecdote.titleI18n, bodyI18n, category, publishOn, imageKey, status

## 🛠️ Tâches

- [ ] Créer src/pages/content/AnecdoteEditorPage.tsx et les routes /contenu/nouveau et /contenu/:id.
- [ ] Créer src/components/content/AnecdoteForm.tsx (RHF + zodResolver(anecdoteSchema)).
- [ ] Intégrer TrilingualTextEditor pour titre et texte.
- [ ] Créer src/components/content/CategorySelect.tsx et DatePickerField.tsx (JJ/MM/AAAA).
- [ ] Créer le bandeau d'état (badge + « Diffusion planifiée le … ») dans AnecdoteHeader.tsx.
- [ ] Implémenter l'autosave du brouillon (useAutosave, debounce 30 s).
- [ ] Détecter le conflit de date (GET /admin/history-content?publishOn=).
- [ ] Ajouter useBlocker et la modale de confirmation.
- [ ] Intégrer le bloc image (ouvre la modale médiathèque, voir fct-selecteur-media).

## ✔️ Critères d'acceptation

- [ ] Étant donné les 3 langues du texte renseignées, quand j'ouvre l'éditeur, alors le badge « Prêt à publier » est affiché.
- [ ] Étant donné le titre vide, quand je clique « Publier », alors l'erreur « Titre obligatoire » s'affiche.
- [ ] Étant donné une date passée, quand je valide, alors l'erreur « La date de diffusion doit être future » s'affiche.
- [ ] Étant donné une modification non enregistrée, quand je quitte la page, alors une confirmation est demandée.
- [ ] Étant donné une date déjà occupée, quand je la choisis, alors un avertissement non bloquant apparaît.

## 🧪 Tests à écrire

- [ ] AnecdoteForm.test.tsx : validations titre/texte/date.
- [ ] useAutosave.test.ts : sauvegarde après 30 s (fake timers).
- [ ] AnecdoteEditorPage.test.tsx : chargement et sauvegarde.
- [ ] e2e : création complète d'une anecdote trilingue.

## ♿ Accessibilité et i18n

- Libellés visibles pour chaque champ, astérisque rouge + aria-required.
- Focus géré sur la première erreur.

## 🔗 Dépendances

À réaliser après : `ADM-WE-04` · `ADM-WE-01` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.4
- CDC Admin §5.3

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
