import * as z from 'zod';
// prettier-ignore
export const TagResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    posts: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TagResultType = z.infer<typeof TagResultSchema>;
