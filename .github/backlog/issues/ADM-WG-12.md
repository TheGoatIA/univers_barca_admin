> **ADM-WG-12** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

La carte « Actions » de WG-02 propose cinq boutons. Les trois premiers (Ignorer, Masquer le contenu, Avertir) ne demandent pas de justification obligatoire (« Justification obligatoire pour Suspendre et Bannir »). Chaque action est journalisée de façon immuable (CDC Admin §4.6, Backend §3.11) et, pour Avertir, déclenche une notification à l'utilisateur avec le motif général, sans identité du rapporteur (§4.6.3).

## ✅ Objectif

Implémenter les trois actions légères avec confirmation, état de chargement, effets de statut et audit.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-02` — Détail d’un signalement
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_light.webp?raw=true' width='330' alt='WG-02 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__desktop_dark.webp?raw=true' width='330' alt='WG-02 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_light.webp?raw=true' width='330' alt='WG-02 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-02_detail-d-un-signalement__tablet_dark.webp?raw=true' width='330' alt='WG-02 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « Signalements » · « #R-20418 » · « Signalement #R-20418 » · « Urgent » · « En attente » · « Message de groupe » · « Menace » · « Signalé il y a 12 min · motif déclaré : « Harcèlement ou menaces » » · « Contexte (messages précédents) » · « Aïcha N. » · « Le Clásico ce samedi, qui vient ? » · « Mamadou D. » · « On se retrouve au Relais à 19h30 » · « ultras_bcn » · « · il y a 14 min » · « « … (propos menaçants — contenu sensible masqué par défaut) … » » · « Afficher le contenu » · « Actions » · « Ignorer » · « Masquer le contenu » · « Avertir »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-08](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-08%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-10](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-10%5D%22) · [ADM-WG-11](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-11%5D%22) · [ADM-WG-14](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-14%5D%22) · [ADM-WG-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-15%5D%22) · [ADM-WG-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-24%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-10](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-10%5D%22) · [API-MODER-12](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-12%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-30](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-30%5D%22) · [API-MODER-31](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-31%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Ignorer (« non fondé ») : le signalement passe en `ignored` ; ConfirmDialog léger « Ignorer ce signalement ? Il sera classé comme non fondé. » ; commentaire facultatif (≤ 200 caractères) ; aucune notification utilisateur.
- Masquer le contenu : `hide` — le contenu devient invisible pour les autres utilisateurs (flag côté API), le signalement passe en `resolved` ; ConfirmDialog « Masquer ce contenu ? L'auteur n'est pas sanctionné. » ; réversible par `unban`-like `unhide` depuis l'historique (hors périmètre).
- Avertir : `warn` — choix du motif général communiqué (liste : Propos déplacés, Harcèlement, Contenu discriminatoire, Spam, Autre), gravité retenue obligatoire (Faible/Moyenne/Élevée, pré-suggérée par le barème), justification interne facultative ; la notification explicative est envoyée par le backend ; le compteur « Avertissements » de l'auteur est incrémenté.
- Chaque action envoie `POST /reports/:id/action`, enregistre `severity` et `recidivismRank` (CDC §4.6.2b) et attend la réponse serveur (pas d'optimistic update, sauf retrait local de la ligne pour `ignore`).
- Succès : toast « Signalement traité · Avertissement envoyé à ultras_bcn » ; bandeau « Traité par Karim B. » ; enchaînement éventuel vers le suivant (`fn-navigation-signalements-adjacents`) ; 409 `ALREADY_PROCESSED` : « Déjà traité par Camille D. » avec rechargement.
- Audit : `REPORT_IGNORED`, `CONTENT_HIDDEN`, `USER_WARNED` avec avant/après du statut du signalement.

## 🛠️ Tâches

- [ ] Créer `src/components/moderation/IgnoreReportDialog.tsx`, `HideContentDialog.tsx`, `WarnUserDialog.tsx` basés sur `ConfirmDialog` (ADS).
- [ ] Utiliser `ModerationActionMenu` (ADS) ou `ReportActionsCard` pour déclencher les dialogues.
- [ ] Implémenter `useApplyAction()` (hooks modération) avec gestion des codes d'erreur.
- [ ] Créer `GENERAL_REASONS` (liste des motifs généraux) dans `src/lib/moderation.ts`.
- [ ] Créer `src/components/moderation/SeveritySegmented.tsx` (contrôle segmenté Faible/Moyenne/Élevée) partagé avec le dialogue de bannissement.
- [ ] Afficher le toast de résultat et mettre à jour le détail depuis la réponse serveur (`setQueryData` après succès).
- [ ] Gérer l'idempotence (désactiver tous les boutons pendant l'envoi).
- [ ] Tests des trois dialogues.

## ✔️ Critères d'acceptation

- [ ] Étant donné un clic sur « Ignorer » puis confirmation, quand l'API répond 200, alors le signalement est classé « Ignoré » et la zone d'actions est remplacée par le bandeau de traitement.
- [ ] Étant donné « Avertir » avec le motif « Propos déplacés » et la gravité « Faible », quand je confirme, alors la requête contient `type='warn'`, `severity='low'` et le toast mentionne l'avertissement.
- [ ] Étant donné un 409, quand l'API répond `ALREADY_PROCESSED`, alors le message « Déjà traité par … » s'affiche et le détail est rechargé.
- [ ] Étant donné un clic sur « Masquer le contenu », quand je confirme, alors le contenu est marqué masqué et l'auteur n'est pas sanctionné.
- [ ] Étant donné une erreur réseau, quand l'action échoue, alors le dialogue reste ouvert avec un message et le bouton redevient actif.

## 🧪 Tests à écrire

- [ ] IgnoreReportDialog.test.tsx : commentaire et confirmation.
- [ ] WarnUserDialog.test.tsx : motif, gravité, corps de la requête.
- [ ] useModerationActions.test.tsx : 200, 409, 422, absence d'optimistic update.
- [ ] SeveritySegmented.test.tsx : clavier (flèches).
- [ ] e2e : avertir depuis un signalement (parcours CDC §7.5).

## ♿ Accessibilité et i18n

- Dialogues `alertdialog` avec focus sur « Annuler » ; contrôle segmenté en `role='radiogroup'` ; résultat annoncé en `aria-live`.

## 🔗 Dépendances

À réaliser après : `ADM-WG-08` · `ADM-WG-03` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6, §4.6.2b, §4.6.3, §7.5
- CDC Backend §3.11

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
