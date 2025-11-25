import { reference, z } from 'astro:content';

const serviceSchema = z.object({
  title: z.string(),
  description: z.string(),
  contact: reference('team'),
  available: z.boolean(),
  tags: z.array(z.enum(['b2b', 'b2c', 'saas', 'ecommerce'])),
});

export default serviceSchema;
