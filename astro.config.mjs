import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';

if (existsSync('.env')) process.loadEnvFile('.env');

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  site: process.env.SITE_URL || undefined,
  devToolbar: { enabled: false },
});
