import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

// Configuración de Vite enfocada a producción para reducir tamaño de JS
export default defineConfig(({ mode }) => {
	const isProd = mode === 'production' || process.env.NODE_ENV === 'production';
	const plugins = [];

	if (isProd) {
		// Genera .gz y .br junto a los archivos estáticos para que el servidor pueda servirlos directamente
		plugins.push(
			viteCompression({
				algorithm: 'gzip',
				ext: '.gz',
				threshold: 1024,
				deleteOriginFile: false,
			}),
			viteCompression({
				algorithm: 'brotliCompress',
				ext: '.br',
				threshold: 1024,
				deleteOriginFile: false,
			})
		);
	}

	return {
		plugins,
		build: {
			// Usar terser para mejores opciones de minificación (drop console, compact)
			minify: isProd ? 'terser' : 'esbuild',
			sourcemap: false,
			terserOptions: isProd
				? {
						compress: {
							drop_console: true,
							drop_debugger: true,
							passes: 2,
						},
						format: {
							comments: false,
						},
					}
				: {},
			rollupOptions: {
				output: {
					// Extraer vendor (react/react-dom) en chunk separado
					manualChunks: {
						vendor: ['react', 'react-dom'],
					},
				},
			},
			// Reduce el target si tu público usa navegadores modernos (opcional)
			target: 'es2018',
		},
	};
});
