import { defineCollection } from 'astro:content';

import postSchema from '@/schemas/postSchema.ts';
import serviceSchema from '@/schemas/serviceSchema.ts';
import teamSchema from '@/schemas/teamSchema.ts';
import featureSchema from '@/schemas/featureSchema.ts';

// posts collection
const posts = defineCollection({
  schema: postSchema,
});

// team collection
const team = defineCollection({
  schema: teamSchema,
});

// service collection
const services = defineCollection({
  schema: serviceSchema,
});

// features collection
const features = defineCollection({
  schema: featureSchema,
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts,
  team,
  services,
  features,
};
