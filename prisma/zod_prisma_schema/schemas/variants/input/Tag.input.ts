import * as z from 'zod';
// prettier-ignore
export const TagInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    posts: z.array(z.unknown())
}).strict();

export type TagInputType = z.infer<typeof TagInputSchema>;
