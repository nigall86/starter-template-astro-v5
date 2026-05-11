import { defineConfig, fontProviders } from 'astro/config';

// libraries
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import db from '@astrojs/db';
// import advancedLottie from '@advanced-astro/lottie';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react(), db()],
  devToolbar: {
    enabled: false,
  },
  adapter: netlify(),
  output: 'server',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: [400, 700],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 700],
    },
  ],
});
