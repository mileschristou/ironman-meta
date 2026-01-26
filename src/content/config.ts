import { defineCollection, z } from 'astro:content';

const guideSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.enum(['progression', 'skilling', 'supplies', 'guides']),
  subcategory: z.string(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  // For SEO
  quickAnswer: z.string().optional(),
});

const progression = defineCollection({
  type: 'content',
  schema: guideSchema,
});

const skilling = defineCollection({
  type: 'content',
  schema: guideSchema,
});

const supplies = defineCollection({
  type: 'content',
  schema: guideSchema,
});

const guides = defineCollection({
  type: 'content',
  schema: guideSchema,
});

export const collections = {
  progression,
  skilling,
  supplies,
  guides,
};
