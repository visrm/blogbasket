import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TagFindManySchema as TagFindManySchema } from '../findManyTag.schema';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { PostCountOutputTypeArgsObjectSchema as PostCountOutputTypeArgsObjectSchema } from './PostCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  mediaUrl: z.boolean().optional(),
  published: z.boolean().optional(),
  slug: z.boolean().optional(),
  authorId: z.boolean().optional(),
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
  categoryId: z.boolean().optional(),
  category: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PostSelectObjectSchema: z.ZodType<Prisma.PostSelect> = makeSchema() as unknown as z.ZodType<Prisma.PostSelect>;
export const PostSelectObjectZodSchema = makeSchema();
