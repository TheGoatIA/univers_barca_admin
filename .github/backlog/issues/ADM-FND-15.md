> **ADM-FND-15** · Fonctionnel · Priorité **P2** · Taille **M** · Phase 0 — Socle technique

## 🎯 Contexte

Le périmètre admin demande des exports CSV, Excel et PDF (rapport hebdomadaire §6.5, tableaux de bord, statistiques de performance des questions WF-04, journal d'audit). Le CDC Admin §6.5 mentionne un rapport synthétique ; le PDF sert aux comptes rendus lisibles et imprimables. La génération doit rester paresseuse et gérer les caractères hors Latin-1 présents dans les noms de joueurs (Rakitić).

## ✅ Objectif

Fournir un générateur PDF de rapports tabulaires et de synthèses KPI chargé à la demande.

## 📐 Règles de gestion

- Bibliothèque : `jspdf` + `jspdf-autotable` chargées par `import()` dynamique (chunk `export-pdf`), jamais dans le bundle initial ; polices Inter (texte) et Barlow Condensed (titres) intégrées en sous-ensemble TTF Latin étendu pour couvrir « ć », « š », « ñ ».
- Mise en page A4 paysage pour les tableaux (portrait pour les synthèses) : en-tête « UNIVERS BARÇA · ADMIN » avec logo vectoriel, titre du rapport, date et heure de génération, administrateur (prénom + initiale), filtres actifs ; pied « Page 1 / 3 » et mention « Document interne — Diffusion restreinte ».
- Tableaux : en-tête répété à chaque page, lignes alternées, texte tronqué avec ellipse ou retour à la ligne, alignement numérique à droite ; plafond 500 lignes côté client (au-delà : export serveur ou message « Utilisez l'export CSV/Excel »).
- Synthèses KPI (ex. page Performance des questions) : cartes de chiffres clés (« Réussite moyenne 63 % ») ; les graphiques sont ajoutés comme image PNG rasterisée du SVG Recharts (`svg → canvas`), résolution 2×.
- Données personnelles : mêmes règles de justification et d'audit que les autres exports (`EXPORT_<RESSOURCE>_PDF`) ; aucun jeton ni identifiant technique dans le document ; métadonnées PDF : titre, auteur « Univers Barça Admin ».
- Nom de fichier : `<ressource>-AAAA-MM-JJ.pdf` ; type `application/pdf`.

## 🛠️ Tâches

- [ ] Ajouter `jspdf`, `jspdf-autotable` et créer `src/lib/export/pdf.ts` (`toPdf({title, columns, rows, meta, orientation})`).
- [ ] Créer `src/lib/export/pdfFonts.ts` (chargement paresseux des polices en base64 depuis `public/fonts/`).
- [ ] Créer `src/lib/export/svgToPng.ts` pour insérer un graphique Recharts.
- [ ] Créer `src/lib/export/pdfLayout.ts` (en-tête, pied, pagination).
- [ ] Étendre `ExportButton` avec l'option « PDF » (selon `formats`).
- [ ] Mesurer le chunk `export-pdf` et l'intégrer au budget (≤ 150 Ko gzip, chargé à la demande).
- [ ] Écrire des tests de structure (nombre de pages, texte extrait avec `pdfjs-dist` en test).
- [ ] Documenter les limites (500 lignes) dans `docs/ARCHITECTURE.md`.

## ✔️ Critères d'acceptation

- [ ] Étant donné un tableau de 60 lignes, quand le PDF est généré, alors l'en-tête de colonnes est répété sur chaque page et le pied indique « Page n / N ».
- [ ] Étant donné le nom « Ivan Rakitić », quand le PDF est généré, alors le « ć » est rendu correctement.
- [ ] Étant donné la première utilisation, quand j'exporte, alors le chunk PDF est chargé à la demande.
- [ ] Étant donné plus de 500 lignes, quand j'exporte en PDF, alors un message propose CSV/Excel ou l'export serveur.
- [ ] Étant donné un export de données personnelles, quand il est généré, alors la justification est demandée et l'audit est créé.

## 🧪 Tests à écrire

- [ ] pdf.test.ts : pagination, en-tête répété, métadonnées.
- [ ] pdfFonts.test.ts : chargement et repli.
- [ ] svgToPng.test.ts : conversion (canvas mocké).
- [ ] Test de chargement dynamique (hors entrée).
- [ ] ExportButton.test.tsx : option PDF.

## ♿ Accessibilité et i18n

- Le PDF est généré avec titre et langue (`fr`) dans les métadonnées ; l'export reste une alternative, pas la seule voie d'accès à l'information.

## 🔗 Dépendances

À réaliser après : `ADM-FND-13` (rechercher le code entre crochets dans le titre des issues).

## 📚 Références

- CDC Admin §6.5, §9.1

## 📦 Définition de terminé

`npm run lint`, `format:check`, `typecheck` et `test` verts ; rendu vérifié en clair/sombre, bureau/tablette ; rôles autorisés testés ; PR vers `dev` avec captures ; CI verte.
