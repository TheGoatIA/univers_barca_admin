> **ADM-WF-16** · Écran · Priorité **P0** · Taille **M** · Phase 1 — MVP

## 🎯 Contexte

WF-05 affiche la file en arrière-plan assombri et la modale « Rejeter cette question ? » : « Le motif est conservé pour améliorer le prompt de génération. », quatre choix radio (« Ambiguë ou plusieurs bonnes réponses » sélectionné par défaut, « Factuellement incorrecte », « Trop facile / trop difficile », « Doublon d'une question existante »), un champ « Commentaire (facultatif) » (exemple « Deux options sont acceptables. ») et les boutons « Annuler » / « Rejeter la question » (rouge avec croix). Le CDC Admin §4.5.1 prévoit un motif facultatif conservé.

## ✅ Objectif

Implémenter la modale de rejet et l'enregistrement structuré du motif.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WF-05` — Rejet d’une question IA
_Module : Questions de quiz_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_light.webp?raw=true' width='330' alt='WF-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__desktop_dark.webp?raw=true' width='330' alt='WF-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_light.webp?raw=true' width='330' alt='WF-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WF/WF-05_rejet-d-une-question-ia__tablet_dark.webp?raw=true' width='330' alt='WF-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Léa Martin » · « Content-manager » · « Validation IA » · « File de validation IA » · « 12 questions en attente » · « Généré par IA » · « Niv. 2 » · « il y a 12 min » · « Quel joueur a remporté le Trophée Pichichi en 2021-22 ? » · « Aucun » · « Memphis Depay » · « Robert Lewandowski » · « Ousmane Dembélé » · « Approuver » · « Corriger puis approuver » · « Rejeter » · « Niv. 3 » · « il y a 34 min » · « Dans quel stade s’est jouée la finale de 2011 ? » · « Wembley » · « Rome » · « Bernabéu » · « Camp Nou » · « Rejeter cette question ? »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WF-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-02%5D%22) · [ADM-WF-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-13%5D%22) · [ADM-WF-17](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-17%5D%22) · [ADM-WF-22](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-22%5D%22) · [ADM-WF-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WF-23%5D%22) · [API-JEUX-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-JEUX-27%5D%22)

## 📐 Règles de gestion

- Motifs normalisés (`rejectionReason`) : `ambiguous`, `factually-incorrect`, `difficulty`, `duplicate` ; aucun n'est coché au départ dans le CDC, mais la maquette présélectionne « Ambiguë » : choix retenu = présélection du premier motif (l'administrateur peut en choisir un autre ; au moins un motif est toujours envoyé).
- Commentaire facultatif de 0 à 300 caractères (« Commentaire (facultatif) »), compteur affiché à partir de 250 ; enregistré dans `rejectionComment`.
- Si le motif est « Doublon d'une question existante », un champ de recherche facultatif permet de lier la question existante (`duplicateOfId`).
- Bouton « Rejeter la question » en variante danger, `loading` pendant l'envoi ; fermeture `Échap`/croix/« Annuler » sans effet ; le titre rappelle l'énoncé tronqué dans un sous-titre lisible par lecteur d'écran.
- Réussite : toast « Question rejetée · motif enregistré », carte retirée de la file et compteur décrémenté ; la question passe en `rejected`.
- Les motifs agrégés alimentent un indicateur d'amélioration du prompt (export des motifs dans l'issue de supervision IA, hors périmètre) : le motif reste stocké structuré, pas uniquement en texte libre.

## 🛠️ Tâches

- [ ] Créer `src/components/quiz/RejectQuestionDialog.tsx` (Radix Dialog, RadioGroup, Textarea, boutons).
- [ ] Définir `REJECTION_REASONS` dans `src/lib/quiz.ts` avec libellés exacts de la maquette.
- [ ] Implémenter `useRejectQuestion()` : `POST /:id/reject {reason, comment, duplicateOfId?}`.
- [ ] Créer le schéma Zod `rejectQuestionSchema` (reason requis, comment ≤ 300).
- [ ] Gérer `Entrée` (soumission seulement hors textarea), focus initial sur le premier radio.
- [ ] Brancher l'ouverture depuis le bouton « Rejeter » et le raccourci `R`.
- [ ] Ajouter le rendu clair/sombre et tablette.
- [ ] Tests de la modale.

## ✔️ Critères d'acceptation

- [ ] Étant donné un clic sur « Rejeter », quand la modale s'ouvre, alors « Ambiguë ou plusieurs bonnes réponses » est présélectionné.
- [ ] Étant donné le motif « Factuellement incorrecte » et un commentaire, quand je confirme, alors `reason='factually-incorrect'` et le commentaire sont envoyés.
- [ ] Étant donné un commentaire de 301 caractères, quand je valide, alors l'erreur est affichée et rien n'est envoyé.
- [ ] Étant donné un succès, quand la modale se ferme, alors la carte disparaît et le compteur diminue.
- [ ] Étant donné `Échap`, quand la modale est ouverte, alors elle se ferme sans appel réseau.

## 🧪 Tests à écrire

- [ ] RejectQuestionDialog.test.tsx : motifs, commentaire, envoi.
- [ ] rejectQuestionSchema.test.ts.
- [ ] useRejectQuestion.test.tsx : corps et invalidations.
- [ ] RejectQuestionDialog.a11y.test.tsx : radiogroup et focus.
- [ ] e2e : rejeter avec motif.

## ♿ Accessibilité et i18n

- Groupe `role='radiogroup'` `aria-labelledby` ; modale `role='alertdialog'` ; sous-titre de contexte `sr-only` mentionnant la question.

## 🔗 Dépendances

À réaliser après : `ADM-WF-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.5.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
