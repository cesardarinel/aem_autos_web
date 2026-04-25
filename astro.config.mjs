import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aemautos.com',
  integrations: [
    react(),
    sitemap()
  ],
  redirects: {
    // Ejemplo de redirección: '/antigua-pagina': { status: 301, destination: '/nueva-pagina' }
  }
});
