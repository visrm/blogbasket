import * as z from 'zod';
// prettier-ignore
export const PostInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    mediaUrl: z.string().optional().nullable(),
    published: z.boolean(),
    slug: z.string(),
    authorId: z.string(),
    author: z.unknown(),
    tags: z.array(z.unknown()),
    categoryId: z.string(),
    category: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PostInputType = z.infer<typeof PostInputSchema>;
