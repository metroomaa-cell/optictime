import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Keep the storefront's root /assets namespace separate from the admin app.
  base: '/admin-assets/',
  build: { outDir: 'dist', emptyOutDir: true },
});
