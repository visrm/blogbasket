import * as z from 'zod';
export const CategoryCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  posts: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});