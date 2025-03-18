import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es', 'umd'],
      name: 'ChatbotWidget',
      fileName: 'index',
    },
  },
  define: { 'process.env.NODE_ENV': '"production"' },
});
