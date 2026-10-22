# Deployment data persistence

Optictime's Node service stores mutable catalog, orders, settings, and backups under `PERSISTENT_DATA_DIR` (Hostinger should keep it set to `~/optictime-data`). This directory must stay outside the Git checkout and Hostinger's versioned release folders.

Application deployments should leave this directory untouched. Keep an independent Hostinger backup before maintenance.
