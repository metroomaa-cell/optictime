# Optictime store

This repository contains the React storefront and the Shakil Ecom admin/backend source.

## Storefront (local development)

```sh
cd storefront
npm install
npm run dev
```

The Vite development server proxies `/api` and `/uploads` to `http://127.0.0.1:4173`.

## Admin, API, and Hostinger Node deployment

Use Node.js 20 or newer. For a Hostinger Node.js app, set its root directory to `admin`, build command to `npm run build`, and start command to `npm start`. Configure `ADMIN_TOKEN`, `PUBLIC_SITE_URL=https://optictime.shop`, and `PERSISTENT_DATA_DIR=~/optictime-data` as app environment variables. Keep production credentials and data outside Git.

For local development, copy `admin/.env.example` to `admin/.env`, set a private `ADMIN_TOKEN`, then:

```sh
cd admin
npm install
cd web
npm install
npm run build
cd ..
npm start
```

The backend stores mutable catalog and order data under `PERSISTENT_DATA_DIR` when configured. Uploads, persistent database files, credentials, and the private Android APK are intentionally excluded from Git; keep backups of those separately.

## Connect the existing Android app

Shakil Ecom APK v2.4.4 can connect to multiple websites without rebuilding. Add the site URL (for example, `https://optictime.shop`) in the app, then sign in with an admin account from that site's API. Each website needs this Node backend deployed at its own domain for URL-based login to work.

## Admin app release

The admin APK is available at dmin/releases/ShakilEcom-2.4.4.apk (version 2.4.4). This repository is public, so anyone can download it. SHA-256: 9457aeb21690488154273e4f82dee3262ee26eea3620f24d5bd634cc6402aeff.

