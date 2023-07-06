import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
      watch: {
        usePolling: true,
      },
    },
    build: {
      outDir: 'build',
    },
    plugins: [
      react({
        include: '**/*.jsx',
      }),
    ],
  };
});
