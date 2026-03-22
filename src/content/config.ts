import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    translationKey: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['ja', 'en']),
    tags: z.array(z.string()).default([])
  })
});

const external = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['ja', 'en']),
    source: z.enum(['qiita', 'zenn', 'note', 'devto']),
    url: z.string().url(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog, external };
