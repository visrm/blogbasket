import * as z from 'zod';
// prettier-ignore
export const CategoryModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    posts: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CategoryPureType = z.infer<typeof CategoryModelSchema>;
