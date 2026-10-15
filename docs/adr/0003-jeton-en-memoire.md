# ADR 0003 — Jeton d'accès en mémoire

- **Statut** : acceptée
- **Décision** : l'access token n'est jamais écrit dans le stockage navigateur ; le refresh vit dans un cookie httpOnly SameSite=Strict. Un seul refresh à la fois (file d'attente) pour éviter les conditions de course.
