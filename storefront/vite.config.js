import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const apiTarget = process.env.VITE_API_TARGET;

export default defineConfig({
  plugins: [react()],
  server: {
    ...(apiTarget ? {
      proxy: {
        '/api': apiTarget,
        '/uploads': apiTarget,
      },
    } : {}),
  },
});
