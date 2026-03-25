import * as z from 'zod';
export const TagFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  posts: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));