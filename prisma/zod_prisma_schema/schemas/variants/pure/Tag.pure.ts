import * as z from 'zod';
// prettier-ignore
export const TagModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    posts: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TagPureType = z.infer<typeof TagModelSchema>;
