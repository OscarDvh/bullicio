import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Asegurar que sea "static"
  build: {
    outDir: 'dist', // Asegurar que "dist" es el directorio de salida
  },
});