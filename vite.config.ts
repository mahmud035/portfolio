import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Canonical origin for index.html (%VITE_SITE_URL%). Fail the build rather
  // than ship a literal placeholder or a non-apex URL into SEO/OG tags.
  const { VITE_SITE_URL } = loadEnv(mode, '.', 'VITE_');
  if (
    !VITE_SITE_URL ||
    !/^https:\/\/[^/]+$/.test(VITE_SITE_URL) ||
    VITE_SITE_URL.startsWith('https://www.')
  ) {
    throw new Error(
      `VITE_SITE_URL must be an apex https origin with no trailing slash (got "${VITE_SITE_URL ?? ''}").`,
    );
  }

  return {
    plugins: [react(), tailwindcss()],
  };
});
