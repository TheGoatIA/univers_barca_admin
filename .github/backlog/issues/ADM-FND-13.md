> **ADM-FND-13** · Fonctionnel · Priorité **P0** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Les modules WC (joueurs), WF (performance des questions), WI (listes administrateurs/utilisateurs/signalements, rapports) et WH (journal d'audit) exposent un bouton « Exporter » ; WI et WH réfèrent déjà à des hooks partagés `useExport` et `useCsvExport` « (FND) ». Le CDC Admin §6.5 prévoit l'export CSV/Excel des principales listes, restreint aux rôles autorisés ; le CDC Global impose la minimisation des données pour tout export contenant des données personnelles.

## ✅ Objectif

Fournir le socle d'export : génération CSV côté client pour les petites vues, téléchargement d'exports serveur pour les grosses collections, nom de fichier, sécurité et états.

## 📐 Règles de gestion

- Deux modes : (1) `useCsvExport(rows, columns)` génère le fichier dans le navigateur (≤ 5 000 lignes déjà en mémoire) ; (2) `useExport(resource, format, params)` appelle `GET /admin/exports/:resource?format=csv|xlsx|pdf&…filtres` (réponse blob + `Content-Disposition`) pour les volumes plus importants (plafond serveur 5 000 à 10 000 lignes selon ressource, 413/422 au-delà).
- Format CSV : UTF-8 avec BOM (compatibilité Excel), séparateur `;` (locale française) ou `,` au choix, fin de ligne CRLF, guillemets doubles échappés par doublement (RFC 4180), dates ISO 8601, nombres sans séparateur de milliers, booléens « oui/non ».
- Neutralisation des injections de formules (CSV injection) : toute valeur **texte** commençant par `=`, `+`, `-`, `@`, tabulation ou retour chariot est préfixée par une apostrophe `'` ; les nombres négatifs typés (`number`) ne sont pas modifiés.
- Nom de fichier : `<ressource>-AAAA-MM-JJ.csv` (ex. `joueurs-2026-10-15.csv`) ; le nom du serveur (`Content-Disposition: filename*`) prime ; caractères interdits remplacés ; extension toujours en minuscules.
- État : `idle → preparing → downloading(progress) → done|error|cancelled` ; bouton en chargement, annulation par `AbortController`, timeout 120 s ; toast « joueurs-2026-10-15.csv téléchargé » ; erreur 403 → « Vous n'avez pas le droit d'exporter cette ressource », 413 → « Trop de lignes : affinez les filtres ».
- RGPD : les exports de données personnelles (utilisateurs, signalements) demandent une justification (dialogue WI) et sont audités `EXPORT_<RESSOURCE>` ; les colonnes sont limitées au strict nécessaire ; les exports de contenu public (joueurs, questions) n'exigent aucune justification.

## 🛠️ Tâches

- [ ] Créer `src/lib/export/csv.ts` (`toCsv(rows, columns, options)`, `neutralizeFormula`, `escapeCell`) et `src/lib/export/download.ts` (`saveBlob(blob, filename)` via `URL.createObjectURL` + révocation).
- [ ] Créer `src/lib/export/filename.ts` (`buildFileName(resource, ext, now)`, `parseContentDisposition`).
- [ ] Créer `src/hooks/useCsvExport.ts` (génération locale) et `src/hooks/useExport.ts` (appel serveur, progression `onDownloadProgress`, annulation).
- [ ] Définir le type `ExportColumn<T> { key, header, format?: (v)=>string }` et les helpers de formatage (utilise `format.ts`).
- [ ] Créer `src/components/shared/ExportButton.tsx` (menu CSV/Excel/PDF selon `formats`, état de chargement, toasts).
- [ ] Ajouter les handlers MSW pour `/admin/exports/*` et un jeu de fichiers de référence (`tests/fixtures/export-*.csv`).
- [ ] Documenter dans `docs/ARCHITECTURE.md` le contrat `GET /admin/exports/:resource` (à créer côté API) et la politique de justification.
- [ ] Tests unitaires et de composant.

## ✔️ Critères d'acceptation

- [ ] Étant donné une valeur « =SUM(A1) », quand le CSV est généré, alors la cellule contient « '=SUM(A1) ».
- [ ] Étant donné un nombre -5 typé `number`, quand le CSV est généré, alors il reste « -5 » sans apostrophe.
- [ ] Étant donné une valeur avec guillemets et point-virgule, quand le CSV est généré, alors elle est entourée de guillemets et les guillemets internes sont doublés.
- [ ] Étant donné une réponse serveur avec `Content-Disposition: filename*=UTF-8''joueurs-2026-10-15.csv`, quand le téléchargement se termine, alors ce nom est utilisé.
- [ ] Étant donné un clic sur « Annuler » pendant le téléchargement, quand l'export est annulé, alors aucun fichier n'est enregistré.

## 🧪 Tests à écrire

- [ ] csv.test.ts : BOM, séparateur, CRLF, échappement, accents.
- [ ] neutralizeFormula.test.ts : `=`, `+`, `-`, `@`, tabulation, nombres typés.
- [ ] filename.test.ts : `parseContentDisposition` (RFC 5987), caractères interdits.
- [ ] useExport.test.tsx (MSW) : progression, annulation, 403/413.
- [ ] ExportButton.test.tsx : menu, états, toasts.

## ♿ Accessibilité et i18n

- Bouton avec `aria-busy` pendant l'export ; résultat annoncé via `aria-live='polite'` ; menu Radix navigable au clavier.

## 📚 Références

- CDC Admin §6.5, §6.4
- CDC Global §2.14

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
