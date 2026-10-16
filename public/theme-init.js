// Applique le thème sauvegardé avant le premier rendu (évite le flash). Fichier externe : la CSP interdit les scripts inline.
try {
  var t = JSON.parse(localStorage.getItem('ub-ui') || '{}').state?.theme;
  if (t === 'dark' || (t !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches))
    document.documentElement.setAttribute('data-theme', 'dark');
} catch (e) {}
