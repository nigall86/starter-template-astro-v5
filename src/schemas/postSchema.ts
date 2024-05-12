import { reference, z } from 'astro:content';

const postSchema = z.object({
  title: z.string().max(60, {
    message: 'Title must be 60 characters or less.',
  }),
  description: z.string().max(160, {
    message: 'Description must be 160 characters or less.',
  }),
  date: z.date(),
  author: reference('team'),
  relatedPosts: z.array(reference('posts')).optional(),
});

export default postSchema;
