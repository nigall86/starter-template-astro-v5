import postSchema from '@schemas/postSchema';
import serviceSchema from '@schemas/serviceSchema';
import teamSchema from '@schemas/teamSchema';
import featureSchema from '@schemas/featureSchema';
import { defineCollection } from 'astro:content';

// posts collection
const posts = defineCollection({
  type: 'content',
  schema: postSchema,
});

// team collection
const team = defineCollection({
  type: 'data',
  schema: teamSchema,
});

// service collection
const services = defineCollection({
  type: 'data',
  schema: serviceSchema,
});

// features collection
const features = defineCollection({
  type: 'data',
  schema: featureSchema,
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts,
  team,
  services,
  features,
};
