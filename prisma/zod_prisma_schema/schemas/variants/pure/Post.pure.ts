import * as z from 'zod';
// prettier-ignore
export const PostModelSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    mediaUrl: z.string().nullable(),
    published: z.boolean(),
    slug: z.string(),
    authorId: z.string(),
    author: z.unknown(),
    tags: z.array(z.unknown()),
    categoryId: z.string(),
    category: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PostPureType = z.infer<typeof PostModelSchema>;
