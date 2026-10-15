> **ADM-FND-10** · Fonctionnel · Priorité **P1** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Le CDC Admin §9.7 demande trois conforts : mémorisation des derniers filtres par module et par administrateur (stockage local), mode dense optionnel des tables et raccourcis activables. Aujourd'hui `uiStore` ne persiste que `theme` et `sidebarCollapsed` sous une clé unique `ub-ui`, partagée par tous les comptes d'un même navigateur. Les groupes WC/WF/WG utilisent `tableDensity`, `shortcutsEnabled`, `filterMemory` et « passer au suivant après action ».

## ✅ Objectif

Fournir un magasin de préférences versionné, cloisonné par administrateur et purgeable.

## 📐 Règles de gestion

- Clé de stockage `ub:prefs:<adminId>` (JSON versionné `{v:1, …}`) : `theme`, `sidebarCollapsed`, `tableDensity: Record<moduleKey,'comfortable'|'dense'>`, `shortcutsEnabled`, `autoNextAfterAction`, `lastFilters: Record<moduleKey, Record<string,string>>` ; le thème reste aussi dans `ub-ui` (global, nécessaire avant connexion).
- Migrations : chaque évolution incrémente `v` ; une fonction `migrate(prev)` convertit ; une structure invalide est ignorée (retour aux défauts) sans erreur.
- Cloisonnement : les préférences d'un administrateur ne sont jamais lues par un autre ; elles sont conservées à la déconnexion (confort) ; un bouton « Réinitialiser mes préférences » les efface ; le thème reste aussi dans `ub-ui` (global, nécessaire avant connexion).
- Données : uniquement des préférences d'affichage ; aucune donnée personnelle de supporter ni jeton n'est stockée (RGPD, minimisation) ; taille totale plafonnée à 50 Ko avec purge des plus anciens filtres.
- API : `usePrefs(selector)` (Zustand, sélecteurs pour limiter les rendus), `useModulePrefs(moduleKey)` ; écriture débouncée (300 ms) ; accès `localStorage` protégé par try/catch (navigation privée, stockage bloqué) avec repli mémoire.
- Synchronisation multi-onglets : événement `storage` → mise à jour du store.

## 🛠️ Tâches

- [ ] Créer `src/store/prefsStore.ts` (Zustand `persist` avec `storage` personnalisé cloisonné par `adminId`, `version`, `migrate`).
- [ ] Créer `src/lib/safeStorage.ts` (get/set/remove avec try/catch et repli mémoire) et l'utiliser partout (`filterMemory`, `drafts`).
- [ ] Migrer `sidebarCollapsed` de `uiStore` vers `prefsStore` (compatibilité : lecture de l'ancienne clé).
- [ ] Créer `useModulePrefs` et exposer `tableDensity`, `lastFilters` aux hooks de filtres (WC/WF/WG).
- [ ] Implémenter la synchro `storage` et le plafond de taille.
- [ ] Ajouter une page de préférences minimale dans le menu utilisateur : densité par défaut, raccourcis, « Réinitialiser mes préférences ».
- [ ] Tests de migration et de cloisonnement.

## ✔️ Critères d'acceptation

- [ ] Étant donné deux administrateurs sur le même navigateur, quand le second se connecte, alors il ne voit pas la densité ni les filtres du premier.
- [ ] Étant donné un état stocké invalide, quand l'application démarre, alors les valeurs par défaut sont utilisées sans erreur.
- [ ] Étant donné `localStorage` bloqué, quand je change la densité, alors le changement s'applique pour la session sans exception.
- [ ] Étant donné deux onglets ouverts, quand je change la densité dans l'un, alors l'autre se met à jour.
- [ ] Étant donné « Réinitialiser mes préférences », quand je confirme, alors tous les réglages reviennent aux valeurs par défaut.

## 🧪 Tests à écrire

- [ ] prefsStore.test.ts : migrations, cloisonnement, plafond.
- [ ] safeStorage.test.ts : exceptions et repli.
- [ ] useModulePrefs.test.tsx : sélecteurs.
- [ ] Test de synchro `storage` (événement simulé).
- [ ] e2e : densité conservée après rechargement.

## ♿ Accessibilité et i18n

- Interrupteurs de préférences avec `role='switch'` et libellés explicites.

## 📚 Références

- CDC Admin §9.7, §5.2

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
