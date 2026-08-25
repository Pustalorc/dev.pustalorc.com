import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import robotsTxt from 'astro-robots-txt';

import internalLinks from './src/data/links/internal.ts';
import { defaultLocale, locales } from './src/utils/i18n.ts';

// Full BCP-47 tag per locale, for the sitemap's hreflang entries. Add an entry
// here whenever a new locale is added to src/lang/ (and to `locales` above).
const sitemapLocaleTags = {
  en: 'en-US'
};

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  site: internalLinks.base,
  i18n: {
    defaultLocale,
    locales
  },
  build: {
    format: 'file'
  },
  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale,
        locales: sitemapLocaleTags
      }
    }),
    robotsTxt({
      sitemap: [`${internalLinks.base}/sitemap-index.xml`]
    })
  ],
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  }
});
