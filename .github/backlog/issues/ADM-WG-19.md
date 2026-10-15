> **ADM-WG-19** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 2 — Communautaire & compétitif

## 🎯 Contexte

Les boutons « Valider » et « Refuser » des groupes en attente (WG-05) appliquent la règle RG-MAP-04 : la création d'un groupe local est soumise à validation (manuelle sous le seuil). Le modèle `CommunityGroup` a `status` pending|active|archived ; l'API `POST /admin/community-groups/:id/validate` est à créer.

## ✅ Objectif

Implémenter la validation et le refus avec confirmation, motif et notification du créateur.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WG-05` — Gestion des groupes locaux
_Module : Modération communautaire_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_light.webp?raw=true' width='330' alt='WG-05 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__desktop_dark.webp?raw=true' width='330' alt='WG-05 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_light.webp?raw=true' width='330' alt='WG-05 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WG/WG-05_gestion-des-groupes-locaux__tablet_dark.webp?raw=true' width='330' alt='WG-05 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Karim Benali » · « Modérateur » · « 212 groupes · 4 en attente de validation » · « Règle de validation » · « En attente » · « Actifs » · « Archivés » · « Groupe » · « Ville » · « Créateur » · « Membres » · « Statut » · « Actions » · « Culés Bafoussam » · « Bafoussam, CM » · « Boris T. » · « Valider » · « Refuser » · « Barça Lyon 69 » · « Lyon, FR » · « Sofía R. » · « Peña de Dakar » · « Dakar, SN »

**Composants repérés** : `avatar`, `btn`

</details>

**Issues liées sur ce même écran :** [ADM-WG-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-01%5D%22) · [ADM-WG-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-02%5D%22) · [ADM-WG-03](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-03%5D%22) · [ADM-WG-18](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-18%5D%22) · [ADM-WG-20](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-20%5D%22) · [ADM-WG-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-21%5D%22) · [ADM-WG-26](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-26%5D%22) · [ADM-WG-27](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WG-27%5D%22) · [API-MODER-16](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-16%5D%22) · [API-MODER-32](https://github.com/TheGoatIA/univers_barca_api/issues?q=is%3Aissue%20%22%5BAPI-MODER-32%5D%22)

## 📐 Règles de gestion

- Valider : `decision='approve'` → `status='active'` ; le groupe devient visible sur la carte communautaire et dans la recherche ; toast « Culés Bafoussam validé » ; compteur « En attente » décrémenté.
- Refuser : ouvre une modale avec motif obligatoire (liste : Doublon d'un groupe existant, Nom inapproprié, Localisation incohérente, Autre) et commentaire facultatif (≤ 300 caractères) ; `decision='reject'` → `status='archived'` avec `archivedReason` ; le créateur est notifié du motif général par le backend.
- Contrôle de doublon : avant validation, l'interface affiche un avertissement jaune si un groupe actif existe dans la même ville avec un nom proche (« Un groupe similaire existe : Culés Douala · 486 membres ») ; la validation reste possible.
- Les groupes avec moins de 3 membres sont signalés « Peu actif » (infobulle) ; aucune règle bloquante (la règle chiffrée exacte est à affiner, CDC Global RG-MAP-04).
- Confirmation serveur obligatoire, pas d'optimistic update ; 409 si un autre modérateur a déjà décidé ; audit `GROUP_APPROVED`, `GROUP_REJECTED` avec motif.
- Contenu soumis à modération (RG-MAP-05) : la validation n'exonère pas les messages du groupe, qui restent signalables.

## 🛠️ Tâches

- [ ] Créer `src/components/groups/ApproveGroupDialog.tsx` (confirmation légère avec avertissement de doublon) et `RejectGroupDialog.tsx` (motif + commentaire).
- [ ] Implémenter `useGroupDecision()` (approve/reject/archive/restore) avec invalidations `['groups']`.
- [ ] Implémenter la détection de proximité de nom (`similarity` de `src/lib/text.ts`) pour l'avertissement de doublon.
- [ ] Créer `REJECT_REASONS` (groupe) dans `src/lib/moderation.ts`.
- [ ] Gérer 409/403/404 et messages d'erreur.
- [ ] Afficher le badge « Peu actif » (< 3 membres) dans la table.
- [ ] Tests des dialogues.

## ✔️ Critères d'acceptation

- [ ] Étant donné un clic sur « Valider » puis confirmation, quand l'API répond 200, alors le groupe passe dans l'onglet « Actifs » et le compteur « En attente » diminue.
- [ ] Étant donné « Refuser » sans motif, quand je tente de confirmer, alors le bouton est désactivé.
- [ ] Étant donné un groupe au nom proche d'un groupe actif, quand la confirmation s'ouvre, alors l'avertissement de doublon est affiché.
- [ ] Étant donné un 409, quand un autre modérateur a déjà décidé, alors un message l'indique et la ligne est rafraîchie.
- [ ] Étant donné un refus, quand il réussit, alors le groupe apparaît dans l'onglet « Archivés ».

## 🧪 Tests à écrire

- [ ] ApproveGroupDialog.test.tsx : avertissement de doublon.
- [ ] RejectGroupDialog.test.tsx : motif obligatoire.
- [ ] useGroupDecision.test.tsx : invalidations.
- [ ] text.test.ts : `similarity`.
- [ ] e2e : valider un groupe de 3 membres.

## ♿ Accessibilité et i18n

- Dialogues `alertdialog` ; avertissement de doublon en `role='status'` ; boutons nommés avec le groupe.

## 🔗 Dépendances

À réaliser après : `ADM-WG-18` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.6
- CDC Global §2.16 (RG-MAP-04, RG-MAP-05)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
