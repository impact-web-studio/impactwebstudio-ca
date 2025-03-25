// src/types/layout.ts
import { z } from 'astro:content';

/**
 * Zod schema for validating SEO-related layout props
 */
export const SeoPropsSchema = z
	.object({
		/**
		 * Page title - appears in browser tab and as primary SEO title
		 * @default 'Impact Web Studio Inc.'
		 */
		title: z.string().max(70).default('Impact Web Studio Inc.'),

		/**
		 * Page description - critical for SEO and social sharing
		 * @default 'Business process automation and web development services in Canada and the United States.'
		 */
		description: z
			.string()
			.min(10)
			.max(160)
			.default(
				'Business process automation and web development services in Canada and the United States.'
			),

		/**
		 * Canonical URL for the page - helps prevent duplicate content issues
		 */
		canonicalUrl: z.string().url().optional(),

		/**
		 * Open Graph image URL for social media sharing
		 */
		ogImage: z.string().url().optional(),

		/**
		 * Robots meta tag instruction for search engines
		 * @default 'index, follow'
		 */
		robots: z.string().optional(),

		/**
		 * Article publication date (for blog posts or time-sensitive content)
		 */
		publishDate: z.string().optional(),

		/**
		 * Custom keywords
		 */
		keywords: z.array(z.string()).optional(),
	})
	.passthrough();

/**
 * Inferred TypeScript type from Zod schema
 */
export type SeoProps = z.infer<typeof SeoPropsSchema>;
