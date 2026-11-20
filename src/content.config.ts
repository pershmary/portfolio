import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    slug,
    title: z.string().trim().min(1),
    summary: z.string().trim().min(1),
    cover: image().optional(),
    coverAlt: z.string().trim().min(1).optional(),
    tone: z.enum(['sage', 'sand', 'slate']).default('sage'),
    status: z.enum(['published', 'draft']),
    showOnHome: z.boolean().default(true),
    order: z.number().int(),
    role: z.string().optional(),
    tags: z.array(z.string()).optional(),
    year: z.number().int().optional(),
    readingTime: z.number().int().positive().optional(),
  }).refine(({ cover, coverAlt }) => !cover || Boolean(coverAlt), {
    path: ['coverAlt'],
    message: 'Добавьте описание обложки.',
  }),
});

const concepts = defineCollection({
  loader: glob({ base: './src/content/concepts', pattern: '**/*.json' }),
  schema: ({ image }) => z.object({
    slug,
    title: z.string().trim().min(1),
    summary: z.string().optional(),
    images: z.array(z.object({
      src: image().optional(),
      alt: z.string().trim().min(1).optional(),
      caption: z.string().trim().min(1),
    }).refine(({ src, alt }) => !src || Boolean(alt), {
      path: ['alt'],
      message: 'Добавьте описание изображения.',
    })).min(1),
    prototypeUrl: z.url({ protocol: /^https?$/ }).optional(),
    order: z.number().int(),
  }),
});

export const collections = { cases, concepts };
