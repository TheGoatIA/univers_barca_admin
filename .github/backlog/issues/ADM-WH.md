> **ADM-WH** · Épopée · Phase 1 — MVP

## 🎯 Objectif

Donner au super-admin une vision temps quasi réel de la santé du système (API, services, files BullMQ, logs, consommation IA) et une piste d'audit immuable des actions d'administration, pour détecter et traiter un incident sans accès serveur.

## 📦 Périmètre

- SystemHealthPage (WH-01) : statut agrégé, KPI, latence p50/p95/p99, services, alertes actives
- QueuesMonitorPage (WH-02) : état des files BullMQ, dead letter, relance manuelle et « marquer traité »
- LogsExplorerPage (WH-03) : recherche filtrée (service, niveau, plage, traceId) avec masquage des données personnelles
- AIUsageMonitorPage (WH-04) : consommation texte/image vs quotas, prévision de dépassement
- Journal d'audit (WH-05) : filtres, pagination serveur, export CSV
- Couche api/hooks du module `observability` et routes réservées au rôle super-admin

## 🚫 Hors périmètre

- Implémentation des endpoints /admin/observability/* et du journal d'audit côté API (dépôt API)
- Édition des quotas IA et des feature flags (groupe WI)
- Déploiement de Prometheus/Grafana/Graylog (dépôt API / infra)
- Alerting par e-mail/webhook (côté backend)

## 📚 Références

- CDC Admin §4.7, §4.7.1, §4.7.2
- CDC Admin §6.3, §6.4 (audit)
- CDC Backend §6.1 à §6.4 (observabilité), §7 / §7.1 (BullMQ, dead letter), §11.2/11.3 (IA)
- CDC Global §3.6 Observabilité

## 🧩 Issues de l'épopée (15)

{{CHILDREN}}
