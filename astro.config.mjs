import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kazuyoshi.omotegawa.com',
  vite: { plugins: [tailwindcss()] },
});
