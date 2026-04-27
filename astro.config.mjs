import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aemautos.com',
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    build: {
      target: 'esnext'
    },
    esbuild: process.env.NODE_ENV === 'production' ? {
      drop: ['console', 'debugger'],
    } : {},
  },
  redirects: {
  }
});
