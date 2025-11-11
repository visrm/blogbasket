import * as z from 'zod';
export const CategoryFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  posts: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));