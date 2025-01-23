import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const blogs = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		// type: z.enum(['Space Probe', 'Mars Rover', 'Comet Lander']),
		// launch_date: z.date(),
		// status: z.enum(['Active', 'Inactive', 'Decommissioned']),
		// destination: z.string(),
		// operator: z.string(),
		// notable_discoveries: z.array(z.string()),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/project' }),
	schema: z.object({
		title: z.string(),
		// launch_date: z.date(),
		// status: z.enum(['Active', 'Inactive', 'Decommissioned']),
		// destination: z.string(),
		// operator: z.string(),
		// notable_discoveries: z.array(z.string()),
	}),
});

export const collections = { blogs, projects };
