import { z } from 'astro:content';

const featureSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().refine((val) => val.startsWith('icon')),
});

export default featureSchema;
