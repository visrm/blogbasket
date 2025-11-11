import * as z from 'zod';
export const TagUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  posts: z.array(z.unknown())
}));