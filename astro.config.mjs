import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://komotegawa-edore.github.io',
  base: '/omotegawa',
  vite: { plugins: [tailwindcss()] },
});
