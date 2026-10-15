> **ADM-WG-13** · Écran · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

WG-03 affiche la modale « Bannir définitivement ultras_bcn ? » : « L'utilisateur perdra l'accès à son compte et sera notifié du motif général, sans identité du rapporteur. », une « Gravité retenue » en contrôle segmenté (Faible / Moyenne / Élevée sélectionnée), un encadré jaune « Barème indicatif : menace ou contenu illégal → bannissement immédiat (récidive rang 2). », un champ « Justification * » (« Menaces explicites envers d'autres membres du groupe Culés Paris, après avertissement du 3 oct. ») et les boutons « Annuler » / « Bannir définitivement » (rouge, icône interdit).

## ✅ Objectif

Implémenter la modale de bannissement fidèle à la maquette, avec confirmation serveur avant toute mise à jour.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-03` — Action — bannir avec justification
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_light.webp?raw=true' width='330' alt='WG-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__desktop_dark.webp?raw=true' width='330' alt='WG-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_light.webp?raw=true' width='330' alt='WG-03 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-03_action-bannir-avec-justification__tablet_dark.webp?raw=true' width='330' alt='WG-03 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-14%5D%22) · [ADM-WG-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-15%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-02](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-02%5D%22) · [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-11](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-11%5D%22) · [API-MODER-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-12%5D%22) · [API-MODER-22](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-22%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Justification obligatoire (CDC §4.6.4) : 10 à 1 000 caractères, texte brut ; le bouton « Bannir définitivement » est désactivé tant qu'elle est vide ou trop courte ; compteur discret « 0 / 1000 ».
- Gravité retenue : trois choix ; pré-sélection = gravité suggérée par le barème selon la gravité automatique (urgent → Élevée) ; l'administrateur peut la modifier ; l'encadré jaune reflète le barème pour la gravité choisie et le rang de récidive (« récidive rang 2 »).
- Écart avec le barème : si la gravité retenue est Faible ou Moyenne alors que l'action est un bannissement immédiat, un avertissement jaune « Écart avec le barème indicatif : le bannissement immédiat est prévu pour la gravité Élevée » s'affiche mais ne bloque pas (le barème reste indicatif, CDC §4.6.2).
- Confirmation serveur obligatoire : aucune mise à jour optimiste d'un bannissement (CDC Admin §2.4) ; bouton en `loading`, modale non fermable par clic extérieur pendant l'envoi.
- Effets : `POST /reports/:id/action {type:'ban', severity:'high', justification}` ; statut utilisateur `banned`, tous ses jetons de rafraîchissement sont révoqués côté API, notification explicative envoyée avec le motif général (jamais l'identité du rapporteur), signalement `resolved`.
- Audit immuable `USER_BANNED` avec gravité, rang de récidive et justification ; réservée aux rôles moderator et super-admin.

## 🛠️ Tâches

- [ ] Créer `src/components/moderation/BanDialog.tsx` (Radix Dialog, `SeveritySegmented`, `SanctionHint`, Textarea, boutons).
- [ ] Créer `src/components/moderation/SanctionHint.tsx` (encadré jaune alimenté par `sanctionScale.ts`).
- [ ] Utiliser/étendre `src/lib/sanctionScale.ts` (créé par WJ `fn-sanctions-utilisateur`) : `suggestSanction(severity, rank)` retournant type, durée et texte.
- [ ] Définir `banSchema` Zod (`justification` 10-1000, `severity` requise).
- [ ] Brancher `useApplyAction()` (`type:'ban'`) et le message d'erreur 409/422 dans la modale.
- [ ] Gérer la fermeture (`Échap`, croix, « Annuler ») et le piège de focus ; focus initial sur la gravité retenue.
- [ ] Appliquer styles clair/sombre et tablette.
- [ ] Tests de la modale.

## ✔️ Critères d'acceptation

- [ ] Étant donné la modale ouverte, quand la justification est vide, alors « Bannir définitivement » est désactivé.
- [ ] Étant donné la gravité « Élevée » et le rang 2, quand la modale s'affiche, alors l'encadré indique « menace ou contenu illégal → bannissement immédiat (récidive rang 2) ».
- [ ] Étant donné la gravité « Faible », quand je tente de bannir, alors l'avertissement d'écart au barème est visible sans bloquer l'action.
- [ ] Étant donné une justification valide, quand je confirme et que l'API répond 200, alors le signalement est traité et l'auteur apparaît « Banni ».
- [ ] Étant donné une réponse 422 `JUSTIFICATION_REQUIRED`, quand elle arrive, alors l'erreur s'affiche sous le champ.
- [ ] Étant donné `Échap` pendant l'envoi, quand la modale est active, alors elle reste ouverte jusqu'à la réponse.

## 🧪 Tests à écrire

- [ ] BanDialog.test.tsx : validations, gravité, envoi.
- [ ] SanctionHint.test.tsx : texte selon gravité et rang.
- [ ] sanctionScale.test.ts : suggestions.
- [ ] useModerationActions.test.tsx : bannissement sans optimistic update.
- [ ] BanDialog.a11y.test.tsx : focus et rôles.
- [ ] e2e : bannir avec justification.

## ♿ Accessibilité et i18n

- `role='alertdialog'`, `aria-describedby` sur le texte d'explication ; textarea avec libellé « Justification (obligatoire) » ; contrôle segmenté navigable aux flèches.

## 🔗 Dépendances

À réaliser après : `ADM-WG-12` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6, §4.6.2, §4.6.2b, §4.6.3, §4.6.4, §6.4

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
