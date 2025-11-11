import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostFindManySchema as PostFindManySchema } from '../findManyPost.schema';
import { TagCountOutputTypeArgsObjectSchema as TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagIncludeObjectSchema: z.ZodType<Prisma.TagInclude> = makeSchema() as unknown as z.ZodType<Prisma.TagInclude>;
export const TagIncludeObjectZodSchema = makeSchema();
