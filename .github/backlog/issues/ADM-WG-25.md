> **ADM-WG-25** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

La file de modération a une fraîcheur critique : `staleTime` de 30 s (CDC Admin §2.4) et « prochaine vérification automatique dans quelques minutes » (WG-07). Le modérateur doit voir arriver un signalement urgent sans recharger, sans que la liste ne change sous ses doigts pendant qu'il lit.

## ✅ Objectif

Implémenter un polling économe et une bannière « N nouveaux signalements » non intrusive.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-01` — File de signalements
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_light.webp?raw=true' width='330' alt='WG-01 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__desktop_dark.webp?raw=true' width='330' alt='WG-01 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_light.webp?raw=true' width='330' alt='WG-01 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-01_file-de-signalements__tablet_dark.webp?raw=true' width='330' alt='WG-01 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 18 en attente · 6 urgents · tri par gravité automatique » · « Raccourcis clavier » · « Historique » · « En attente » · « En cours » · « Traités » · « Ignorés » · « Rechercher… » · « Type de contenu » · « Gravité » · « Période » · « Auto-évaluation indicative · décision finale humaine » · « Gravité auto » · « Type » · « Origine » · « Contenu signalé » · « Auteur » · « Motif » · « Il y a » · « Urgent »

**Composants repérés** : `avatar`, `btn`, `chip`, `input`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-04](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-04%5D%22) · [ADM-WG-05](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-05%5D%22) · [ADM-WG-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-06%5D%22) · [ADM-WG-07](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-07%5D%22) · [ADM-WG-09](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-09%5D%22) · [ADM-WG-24](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-24%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-01](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-01%5D%22) · [API-MODER-06](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-06%5D%22) · [API-MODER-07](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-07%5D%22) · [API-MODER-08](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-08%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-23](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-23%5D%22) · [API-MODER-24](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-24%5D%22) · [API-MODER-26](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-26%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-29](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-29%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

#### `WG-07` — File de modération vide
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_light.webp?raw=true' width='330' alt='WG-07 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__desktop_dark.webp?raw=true' width='330' alt='WG-07 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_light.webp?raw=true' width='330' alt='WG-07 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-07_file-de-moderation-vide__tablet_dark.webp?raw=true' width='330' alt='WG-07 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « File de signalements » · « 0 en attente » · « File vide, bravo ! » · « Tous les signalements ont été traités. Prochaine vérification automatique dans quelques minutes. » · « Voir l’historique des décisions »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WG-06](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-06%5D%22) · [ADM-WG-23](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-23%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-09](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-09%5D%22) · [API-MODER-21](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-21%5D%22) · [API-MODER-27](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-27%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Polling des compteurs toutes les 60 s (onglet visible) ; la liste n'est rechargée automatiquement que si l'utilisateur est en page 1 sans sélection active ; sinon une bannière « 2 nouveaux signalements · Afficher » apparaît au-dessus du tableau.
- Nouveau signalement urgent : pastille rouge « Nouveau » sur la ligne pendant 30 s et annonce `aria-live` « Nouveau signalement urgent » ; titre d'onglet du navigateur préfixé « (18) » ; aucune notification sonore par défaut.
- Backoff : après 3 échecs de polling consécutifs, passage à 5 minutes avec bandeau « Actualisation interrompue · Réessayer » ; reprise automatique au retour de focus.
- Pas de polling en arrière-plan (`refetchIntervalInBackground=false`) ; arrêt à la déconnexion/expiration de session.
- Respect du plafond de requêtes de l'API (120 req/min/utilisateur, CDC Backend §10.2) : le polling consomme au plus 2 requêtes/min.

## 🛠️ Tâches

- [ ] Créer `src/hooks/useQueuePolling.ts` (compteurs + détection de nouveaux éléments par comparaison d'ids).
- [ ] Créer `src/components/moderation/NewReportsBanner.tsx` et `NewBadge.tsx`.
- [ ] Gérer le titre de document (`useDocumentTitle`) avec compteur.
- [ ] Implémenter le backoff et la visibilité (`document.visibilityState`).
- [ ] Ajouter l'annonce `aria-live` (région dédiée dans `QueueHeader`).
- [ ] Tests avec fake timers.
- [ ] Documenter la consommation de requêtes.

## ✔️ Critères d'acceptation

- [ ] Étant donné un nouveau signalement urgent, quand le polling s'exécute, alors la bannière « 1 nouveau signalement » apparaît et la liste n'est pas déplacée.
- [ ] Étant donné un clic sur « Afficher », quand la liste se recharge, alors le nouveau signalement est en tête (gravité urgente).
- [ ] Étant donné 3 échecs consécutifs, quand l'état est évalué, alors le bandeau « Actualisation interrompue » s'affiche et l'intervalle passe à 5 minutes.
- [ ] Étant donné l'onglet masqué, quand 60 secondes s'écoulent, alors aucune requête de polling n'est émise.

## 🧪 Tests à écrire

- [ ] useQueuePolling.test.tsx : détection, backoff, visibilité.
- [ ] NewReportsBanner.test.tsx : pluriel et action.
- [ ] useDocumentTitle.test.ts.
- [ ] e2e : réception d'un nouveau signalement simulé.
- [ ] Test de consommation (≤ 2 requêtes/min).

## ♿ Accessibilité et i18n

- Annonce polie (`aria-live='polite'`) pour les nouveaux signalements ; la bannière est focusable et ne vole pas le focus.

## 🔗 Dépendances

À réaliser après : `ADM-WG-06` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §2.4
- CDC Backend §10.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
