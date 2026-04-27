import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://valdiba.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});