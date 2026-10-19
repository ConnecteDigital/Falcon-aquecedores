import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.falconaquecedores.com.br',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      serialize(item) {
        const path = new URL(item.url).pathname;
        const depth = path.split('/').filter(Boolean).length;
        item.priority = path === '/' ? 1.0 : depth === 1 ? 0.9 : 0.7;
        return item;
      },
    }),
  ],
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
