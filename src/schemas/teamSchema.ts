import { z } from 'astro:content';

const teamSchema = ({ image }) =>
  z.object({
    name: z.string(),
    bio: z.string(),
    email: z.string(),
    role: z.enum(['Software', 'Design', 'Marketing']),
    avatar: image(),
  });

export default teamSchema;
