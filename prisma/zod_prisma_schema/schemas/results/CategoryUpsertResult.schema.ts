import * as z from 'zod';
export const CategoryUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  posts: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});