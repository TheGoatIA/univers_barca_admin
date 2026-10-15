> **ADM-WH-10** · Écran · Priorité **P1** · Taille **L** · Phase 1 — MVP

## 🎯 Contexte

AIUsageMonitorPage suit la consommation IA (CDC §4.7.1). Maquette : bouton « Modifier les quotas », bandeau « Dépassement anticipé du budget image : au rythme actuel, le quota mensuel sera atteint le 24 octobre. », deux cartes (Texte · assistant et quiz 4,2 M / 10 M tokens « Dans le budget » ; Image · wallpapers 1 240 / 1 500 générations « Risque de dépassement ») et « Plafonds par utilisateur » (40 messages/jour, 3 générations/jour, 30 questions/jour).

## ✅ Objectif

Permettre de piloter les coûts IA en comparant la consommation aux quotas et en anticipant le dépassement.

## 🖼️ Maquettes de référence

Toutes les captures ci-dessous sont les maquettes validées (clair / sombre, mobile / tablette ou bureau). Le comportement visuel, les espacements, états et libellés doivent être reproduits à l'identique ; les tokens du design system s'appliquent (aucune couleur en dur).

#### `WH-04` — Consommation IA
_Module : Supervision technique_

<table><tr><th align='center'>Bureau · Clair</th><th align='center'>Bureau · Sombre</th><th align='center'>Tablette · Clair</th><th align='center'>Tablette · Sombre</th></tr><tr><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_light.webp?raw=true' width='330' alt='WH-04 Bureau Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__desktop_dark.webp?raw=true' width='330' alt='WH-04 Bureau Sombre'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_light.webp?raw=true' width='330' alt='WH-04 Tablette Clair'></a></td><td align='center'><a href='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true'><img src='https://github.com/TheGoatIA/univers_barca_admin/blob/main/docs/maquettes/ecrans/WH/WH-04_consommation-ia__tablet_dark.webp?raw=true' width='330' alt='WH-04 Tablette Sombre'></a></td></tr></table>

<details><summary>Éléments relevés dans la maquette</summary>

**Textes visibles** : « Usage IA » · « Consommation IA » · « Texte (assistant, quiz) et image (wallpapers) · comparée aux quotas configurés » · « Modifier les quotas » · « Dépassement anticipé du budget image » · « : au rythme actuel, le quota mensuel sera atteint le 24 octobre. » · « Texte · assistant et quiz » · « Dans le budget » · « 4,2 M » · « / 10 M tokens » · « Image · wallpapers »

**Composants repérés** : `avatar`, `btn`, `card`

</details>

**Issues liées sur ce même écran :** [ADM-WH-01](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-01%5D%22) · [ADM-WH-02](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-02%5D%22) · [ADM-WH-15](https://github.com/TheGoatIA/univers_barca_admin/issues?q=is%3Aissue%20%22%5BADM-WH-15%5D%22)

## 📐 Règles de gestion

- Barre de progression par budget : garnet < alerte, or entre le seuil d'alerte (80 % par défaut, configurable en WI-06) et 100 %, rouge ≥ 100 %.
- Courbe cumulée du mois + diagonale pointillée = trajectoire linéaire du budget ; date de dépassement estimée = extrapolation au rythme des 7 derniers jours.
- Badges : « Dans le budget » (vert), « Risque de dépassement » (jaune), « Dépassé » (rouge).
- Plafonds par utilisateur en lecture seule (valeurs de /admin/config/ai-quotas) ; bouton « Modifier les quotas » → /configuration/quotas-ia.
- Coupure d'urgence : lien vers le feature flag wallpapers_module_enabled (CDC §4.8.1) quand le budget image est dépassé.

## 🔄 Comportement et états

- Sélecteur de période : mois courant (défaut), mois précédent.
- Chargement : skeleton ; erreur : ErrorState ; données absentes en début de mois : « Pas encore de consommation ».
- Bandeau d'alerte masqué quand aucune prévision de dépassement.

## 🛠️ Tâches

- [ ] Créer `pages/AIUsageMonitorPage.tsx`, `components/BudgetCard.tsx`, `UsageProgress.tsx`, `UserCapsPanel.tsx`.
- [ ] Composant `ForecastLine` (Recharts Composed Area + ReferenceLine pointillé).
- [ ] Util `forecastExhaustionDate(series, budget)` testé.
- [ ] Formatage tokens « 4,2 M » via Intl compact fr-FR.
- [ ] Lien conditionnel vers flags selon rôle (super-admin only de toute façon).
- [ ] Connecter `useAiUsage(period)` + `useAiQuotas()` (réutilisé par WI-06).

## ✔️ Critères d'acceptation

- [ ] Étant donné 4,2 M/10 M, alors la barre est à 42 % avec badge « Dans le budget ».
- [ ] Étant donné 1 240/1 500 (83 %) avec alerte à 80 %, alors la barre est or et le badge « Risque de dépassement ».
- [ ] Étant donné une trajectoire dépassant 1 500 le 24 octobre, alors le bandeau le mentionne.
- [ ] Étant donné un dépassement, alors le lien vers le flag wallpapers apparaît.

## 🧪 Tests à écrire

- [ ] Test unitaire : forecastExhaustionDate
- [ ] Test composant : BudgetCard seuils
- [ ] Test page : bandeau de prévision
- [ ] Test composant : format « 4,2 M »
- [ ] Test axe : barres de progression avec role=progressbar et valeurs

## ♿ Accessibilité et i18n

- role=progressbar aria-valuenow/min/max, libellé « Texte 42 % consommé »

## 🔗 Dépendances

À réaliser après : `ADM-WH-02` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §4.7.1
- CDC Backend §6.3 (coûts IA), §11.2, §11.3
- CDC Global §3 (maîtrise des coûts IA)

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
