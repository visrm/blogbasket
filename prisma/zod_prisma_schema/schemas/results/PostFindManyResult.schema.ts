import * as z from 'zod';
export const PostFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});