// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	// base: '/docs',
	// trailingSlash: 'always',
	site: import.meta.env.DOMAIN,

	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
