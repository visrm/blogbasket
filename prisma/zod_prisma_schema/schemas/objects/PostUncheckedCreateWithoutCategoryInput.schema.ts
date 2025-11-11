import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagUncheckedCreateNestedManyWithoutPostsInputObjectSchema as TagUncheckedCreateNestedManyWithoutPostsInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutPostsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  mediaUrl: z.string().optional().nullable(),
  published: z.boolean().optional(),
  slug: z.string(),
  authorId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutPostsInputObjectSchema).optional()
}).strict();
export const PostUncheckedCreateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateWithoutCategoryInput>;
export const PostUncheckedCreateWithoutCategoryInputObjectZodSchema = makeSchema();
