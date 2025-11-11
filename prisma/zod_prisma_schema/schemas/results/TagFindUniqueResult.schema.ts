import * as z from 'zod';
export const TagFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  posts: z.array(z.unknown())
}));