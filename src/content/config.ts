import { z, defineCollection, reference } from 'astro:content';

// posts collection
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(60, {
      message: 'Title must be 60 characters or less.',
    }),
    description: z.string().max(160, {
      message: 'Description must be 160 characters or less.',
    }),
    date: z.date(),
    author: reference('team'),
    relatedPosts: z.array(reference('posts')).optional(),
  }),
});

// team collection
const teamsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string(),
      email: z.string(),
      role: z.enum(['Software', 'Design', 'Marketing']),
      headshot: image(),
    }),
});

// service collection
const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    contact: reference('team'),
    available: z.boolean(),
    tags: z.array(z.enum(['b2b', 'b2c', 'saas', 'ecommerce'])),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  team: teamsCollection,
  services: servicesCollection,
};
