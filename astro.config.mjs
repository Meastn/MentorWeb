// @ts-check
import { defineConfig } from 'astro/config';

// REF: MG-2026-ASTRO-CONFIG-01
// https://astro.build/config
export default defineConfig({
  site: 'https://www.mentorgroup.com.tr',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  }
});
