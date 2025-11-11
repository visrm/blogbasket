import * as z from 'zod';
export const TagUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  posts: z.array(z.unknown())
});