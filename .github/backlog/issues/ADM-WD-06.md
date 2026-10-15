> **ADM-WD-06** · Fonctionnel · Priorité **P0** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

Les boutons « Modifier » et « Saisir le résultat » de la fiche permettent au content-manager de corriger des champs (heure, journée, stade, statut) et de saisir le score. Toute correction éditoriale d'un match d'origine API peut ensuite entrer en conflit avec la synchro : la règle de résolution (WD-03) doit donc être alimentée correctement.

## ✅ Objectif

Implémenter l'édition (PATCH /admin/matches/:id) avec validation Zod, la modale « Saisir le résultat » et la mémorisation de la valeur éditoriale pour détecter les futurs conflits.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WD-02` — Détail d’un match
_Module : Matchs et compétitions_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_light.webp?raw=true' width='330' alt='WD-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__desktop_dark.webp?raw=true' width='330' alt='WD-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_light.webp?raw=true' width='330' alt='WD-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WD/WD-02_detail-d-un-match__tablet_dark.webp?raw=true' width='330' alt='WD-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Barça – Real Madrid » · « Programmé » · « Liga · Journée 11 · Sam. 24 oct. 2026 · 21:00 CEST · Estadi Olímpic » · « Modifier » · « Saisir le résultat » · « Informations » · « Compositions » · « Événements » · « Historique des modifications »

**Composants repérés** : `avatar`, `btn`, `card`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WD-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-01%5D%22) · [ADM-WD-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-04%5D%22) · [ADM-WD-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-05%5D%22) · [ADM-WD-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-07%5D%22) · [ADM-WD-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-08%5D%22) · [ADM-WD-13](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-13%5D%22) · [ADM-WD-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WD-14%5D%22) · [API-FOOT-03](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-03%5D%22) · [API-FOOT-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-24%5D%22) · [API-FOOT-41](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-41%5D%22) · [API-FOOT-51](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-FOOT-51%5D%22)

## 📐 Règles de gestion

- « Modifier » passe le formulaire en édition ; « Annuler » demande confirmation si des champs sont modifiés ; « Enregistrer » est désactivé tant que le formulaire n'est pas valide et modifié.
- Validation : kickoffAt valide ISO UTC (saisie « JJ/MM/AAAA HH:mm » convertie), matchday 1–60 ou libellé phase (« Phase de ligue J3 »), venue ≤ 120 caractères, status dans l'énumération ; passage à « Terminé » exige un score renseigné.
- Modale « Saisir le résultat » : scoreHome et scoreAway entiers 0–30, statut forcé à « Terminé » à l'enregistrement après confirmation « Valider 2 – 1 ? ».
- Quand source=api, la modification d'un champ synchronisé (kickoffAt, score, status) enregistre editorialValue ; à la prochaine synchro, si l'API diffère, le match reçoit syncConflict {field, apiValue, editorialValue} (règle backend à implémenter).
- Chaque PATCH génère une entrée d'audit MATCH_UPDATED avec before/after des champs modifiés.

## 🔄 Comportement et états

- Succès : toast « Match mis à jour », retour en lecture, panneau synchro rafraîchi (valeurs modifiées à la main +1).
- Erreur de validation serveur (422) : messages affichés sous les champs concernés.
- Édition concurrente : si updatedAt a changé (409), message « Ce match a été modifié par quelqu'un d'autre » avec bouton « Recharger ».
- Match en direct : édition du score autorisée mais avertissement « La synchro API peut écraser cette valeur ».

## 🔌 Contrats d'API

| Méthode | Chemin | Description | Requête | Réponse |
| --- | --- | --- | --- | --- |
| `PATCH` | `/api/v1/admin/matches/:id` | Mise à jour partielle avec contrôle de version | {kickoffAt?,matchday?,venue?,status?,scoreHome?,scoreAway?,expectedUpdatedAt} | {success:true,data:Match} |

## 🗄️ Données

- Match.source, Match.syncConflict
- AuditLog (action MATCH_UPDATED, before/after)

## 🛠️ Tâches

- [ ] Compléter MatchInfoForm avec modes lecture/édition (RHF useForm + zodResolver(matchUpdateSchema)).
- [ ] Créer src/components/matches/ResultDialog.tsx (Radix Dialog) avec deux champs numériques.
- [ ] Convertir date/heure locale ↔ UTC dans src/lib/dates.ts (parseKickoffInput, toKickoffInput).
- [ ] Ajouter expectedUpdatedAt dans le payload et gérer 409 (useUpdateMatch).
- [ ] Implémenter la garde de navigation (react-router useBlocker) quand le formulaire est modifié.
- [ ] Marquer visuellement les champs « modifiés à la main » (pastille « Édité »).
- [ ] Ajouter les messages d'erreur FR dans le schéma Zod (errorMap).
- [ ] Écrire les tests de non-régression pour la conversion fuseau (heure d'été/hiver).

## ✔️ Critères d'acceptation

- [ ] Étant donné un match programmé, quand je saisis 2 et 1 puis confirme, alors le statut devient « Terminé » et le score « 2 – 1 » est affiché.
- [ ] Étant donné un formulaire modifié, quand je clique sur Annuler, alors une confirmation est demandée avant de perdre les changements.
- [ ] Étant donné un kickoff saisi « 24/10/2026 21:00 » à Paris, quand j'enregistre, alors la valeur envoyée est 2026-10-24T19:00:00Z.
- [ ] Étant donné une réponse 409, quand elle survient, alors le message de conflit de version s'affiche et aucune donnée n'est perdue.

## 🧪 Tests à écrire

- [ ] MatchInfoForm.test.tsx : Enregistrer désactivé tant que le formulaire est propre.
- [ ] ResultDialog.test.tsx : refuse un score négatif ou > 30.
- [ ] dates.test.ts : conversion CEST→UTC et CET→UTC (30 oct. / 26 oct.).
- [ ] useUpdateMatch.test.tsx : envoie expectedUpdatedAt ; gère 409.
- [ ] e2e : modifier le stade puis voir l'entrée dans l'onglet Historique.

## ♿ Accessibilité et i18n

- Erreurs liées aux champs via aria-describedby ; focus placé sur le premier champ invalide.
- Modale : focus piégé, fermeture Échap, titre aria-labelledby.

## 🔗 Dépendances

À réaliser après : `ADM-WD-05` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.3
- CDC Admin §6.3
- CDC Backend §3.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
