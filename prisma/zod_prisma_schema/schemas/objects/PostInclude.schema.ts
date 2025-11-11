import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TagFindManySchema as TagFindManySchema } from '../findManyTag.schema';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { PostCountOutputTypeArgsObjectSchema as PostCountOutputTypeArgsObjectSchema } from './PostCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
  category: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PostIncludeObjectSchema: z.ZodType<Prisma.PostInclude> = makeSchema() as unknown as z.ZodType<Prisma.PostInclude>;
export const PostIncludeObjectZodSchema = makeSchema();
