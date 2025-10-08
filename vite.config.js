import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        exemple: resolve(__dirname, 'pages/detail/exemple.html'),
      },
    },
  },
});