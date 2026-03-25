import * as z from 'zod';
// prettier-ignore
export const TagInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    posts: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TagInputType = z.infer<typeof TagInputSchema>;
