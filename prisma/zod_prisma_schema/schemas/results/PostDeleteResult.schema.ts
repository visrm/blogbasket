import * as z from 'zod';
export const PostDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  mediaUrl: z.string().optional(),
  published: z.boolean(),
  slug: z.string(),
  authorId: z.string(),
  author: z.unknown(),
  tags: z.array(z.unknown()),
  categoryId: z.string(),
  category: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));