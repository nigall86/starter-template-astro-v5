import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import advancedLottie from '@advanced-astro/lottie';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  integrations: [icon(), react(), advancedLottie(), db()],
  devToolbar: {
    enabled: false,
  },
  output: 'hybrid',
  adapter: netlify(),
});
