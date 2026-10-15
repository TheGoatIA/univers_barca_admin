# ADR 0002 — nginx plutôt qu'Apache

- **Statut** : acceptée
- **Décision** : servir la SPA avec nginx non-root (conforme au cahier des charges, image plus légère) au lieu d'Apache. Fallback SPA, en-têtes de sécurité (CSP) et proxy `/api` y sont configurés. Aucun WebSocket n'étant utilisé à ce stade, `/socket.io` n'est pas proxifié (à ajouter avec la fonctionnalité temps réel).
