> **ADM-ADS-20** · UX / Ergonomie · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

ZC-03 : États vides illustrés (« Aucun groupe local ici », bouton d'action), erreurs (« Pas de connexion », « Petit souci de notre côté », limite atteinte avec compte à rebours), accès/restrictions et « Bientôt disponible ». CDC §9.4 : vide différencié « aucune donnée » / « aucun résultat pour ces filtres ». `EmptyState.tsx` existe.

## ✅ Objectif

Composants EmptyState/ErrorState cohérents avec BarcaEmptyState/BarcaErrorState.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `ZC-03` — États vide, erreur et hors-ligne
_Module : Retours et états_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Mobile · Clair</th><th align='center'>Mobile · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-03_etats-vide-erreur-et-hors-ligne__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-03_etats-vide-erreur-et-hors-ligne__desktop_light.webp?raw=true' width='330' alt='ZC-03 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-03_etats-vide-erreur-et-hors-ligne__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-03_etats-vide-erreur-et-hors-ligne__desktop_dark.webp?raw=true' width='330' alt='ZC-03 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-03_etats-vide-erreur-et-hors-ligne__mobile_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-03_etats-vide-erreur-et-hors-ligne__mobile_light.webp?raw=true' width='230' alt='ZC-03 Mobile Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-03_etats-vide-erreur-et-hors-ligne__mobile_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_mobile/blob/main/docs/maquettes/design-system/ZC/ZC-03_etats-vide-erreur-et-hors-ligne__mobile_dark.webp?raw=true' width='230' alt='ZC-03 Mobile Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Composants · 09 » · « États d’écran » · « BarcaEmptyState et BarcaErrorState : illustration légère, message contextualisé, action suggérée. Jamais de message technique brut ; distinction entre erreur réseau et erreur serveur. » · « États vides » · « Vide » · « Aucun groupe local ici » · « Pourquoi ne pas en créer un ? » · « Créer un groupe » · « Aucun wallpaper pour l’instant » · « Crée ton premier fond d’écran. » · « Créer un wallpaper » · « Rien de nouveau » · « Tes notifications apparaîtront ici. » · « Régler mes préférences » · « Erreurs et hors-ligne » · « Erreur » · « Pas de connexion » · « Le défi du jour nécessite une connexion. » · « Réessayer » · « Petit souci de notre côté » · « Notre équipe est déjà dessus. » · « Doucement, champion ! » · « Limite atteinte : réessaie dans 00:42. » · « Accès, restrictions et succès » · « Statut » · « Bientôt disponible » · « Ce module sera activé prochainement. » · « Me prévenir » · « Quiz du jour terminé » · « Reviens demain pour un nouveau défi. »

**Composants repérés** : `btn`

</details>

**Issues liées sur ce même écran :** [ADM-ADS-21](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-ADS-21%5D%22)

## 📐 Règles de gestion

- EmptyState : illustration légère, titre, description, action ; variantes `no-data`, `no-results` (bouton Réinitialiser les filtres), `coming-soon`, `forbidden`.
- ErrorState : variantes `network` (« Pas de connexion »), `server` (« Petit souci de notre côté »), `rate-limit` (compte à rebours mm:ss), `not-found` ; bouton « Réessayer » ; traceId en petit.
- Jamais de message technique brut.
- Textes centralisés dans `i18n/fr.ts`.

## 🔄 Comportement et états

- Erreur réseau vs serveur distinguée via `error.response`.

## 🛠️ Tâches

- [ ] Étendre `EmptyState.tsx` et créer `ErrorState.tsx`.
- [ ] Illustrations SVG légères (`src/assets/illustrations`).
- [ ] Hook `useCountdown`.
- [ ] Mapper `AxiosError` → variante (`errorKind.ts`).
- [ ] Stories.
- [ ] Tests.

## ✔️ Critères d'acceptation

- [ ] Étant donné une erreur réseau, alors « Pas de connexion » et Réessayer sont affichés.
- [ ] Étant donné no-results, alors le bouton Réinitialiser les filtres est présent.
- [ ] Étant donné rate-limit 42 s, alors le compte à rebours décrémente.

## 🧪 Tests à écrire

- [ ] Test unitaire : errorKind
- [ ] Test composant : EmptyState variantes
- [ ] Test composant : countdown
- [ ] Test a11y : role=alert

## ♿ Accessibilité et i18n

- role=alert pour erreurs

## 🔗 Dépendances

À réaliser après : `ADM-ADS-06` · `ADM-ADS-14` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §5.2
- CDC Global §4.5

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
