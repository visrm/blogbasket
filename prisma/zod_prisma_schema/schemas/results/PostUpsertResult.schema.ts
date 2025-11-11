import * as z from 'zod';
export const PostUpsertResultSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  mediaUrl: z.string().optional(),
  published: z.boolean(),
  slug: z.string(),
  authorId: z.number().int(),
  author: z.unknown(),
  tags: z.array(z.unknown()),
  categoryId: z.number().int(),
  category: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});