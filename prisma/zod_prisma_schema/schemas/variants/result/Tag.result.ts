import * as z from 'zod';
// prettier-ignore
export const TagResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    posts: z.array(z.unknown())
}).strict();

export type TagResultType = z.infer<typeof TagResultSchema>;
