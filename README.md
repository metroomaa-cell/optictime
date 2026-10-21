# Optictime store

This repository contains the React storefront and the Shakil Ecom admin/backend source.

## Storefront (local development)

```sh
cd storefront
npm install
npm run dev
```

The Vite development server proxies `/api` and `/uploads` to `http://127.0.0.1:4173`.

## Admin and API (local development)

Use Node.js 20 or newer. Set `ADMIN_TOKEN` and other required environment settings in `admin/.env` (never commit this file), then:

```sh
cd admin
npm install
cd web
npm install
npm run build
cd ..
npm start
```

The backend stores mutable catalog and order data under `admin/server/data`. Uploads, persistent database files, credentials, and the private Android APK are intentionally excluded from Git; keep backups of those separately.
