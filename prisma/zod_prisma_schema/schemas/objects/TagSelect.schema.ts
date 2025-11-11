import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostFindManySchema as PostFindManySchema } from '../findManyPost.schema';
import { TagCountOutputTypeArgsObjectSchema as TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagSelectObjectSchema: z.ZodType<Prisma.TagSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagSelect>;
export const TagSelectObjectZodSchema = makeSchema();
