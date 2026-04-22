import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  // Eliminamos la sección vite manual para que Astro use sus valores por defecto optimizados
});
