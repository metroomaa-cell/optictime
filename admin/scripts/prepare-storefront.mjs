import { cpSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const adminRoot = resolve(scriptDir, '..');
const repositoryRoot = resolve(adminRoot, '..');
const sourceIndex = resolve(repositoryRoot, 'index.html');
const sourceAssets = resolve(repositoryRoot, 'assets');
const sourceBranding = resolve(repositoryRoot, 'storefront', 'public', 'branding');

if (!existsSync(sourceIndex) || !existsSync(sourceAssets)) {
  throw new Error('Storefront index.html or assets directory is missing from the repository root.');
}

mkdirSync(adminRoot, { recursive: true });
copyFileSync(sourceIndex, resolve(adminRoot, 'index.html'));
cpSync(sourceAssets, resolve(adminRoot, 'assets'), { recursive: true, force: true });
if (existsSync(sourceBranding)) {
  cpSync(sourceBranding, resolve(adminRoot, 'branding'), { recursive: true, force: true });
}
console.log('Prepared storefront files for the Hostinger admin app root.');
