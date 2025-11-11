import * as z from 'zod';
// prettier-ignore
export const TagModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    posts: z.array(z.unknown())
}).strict();

export type TagPureType = z.infer<typeof TagModelSchema>;
