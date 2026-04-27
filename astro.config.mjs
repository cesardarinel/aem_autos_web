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
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    // Solo aplicamos el drop de consoles si NO estamos en modo desarrollo
    esbuild: process.env.NODE_ENV === 'production' ? {
      drop: ['console', 'debugger'],
    } : {},
  },
  redirects: {
    // Ejemplo de redirección: '/antigua-pagina': { status: 301, destination: '/nueva-pagina' }
  }
});
