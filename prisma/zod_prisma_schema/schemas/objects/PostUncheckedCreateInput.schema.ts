import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagUncheckedCreateNestedManyWithoutPostsInputObjectSchema as TagUncheckedCreateNestedManyWithoutPostsInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutPostsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(100).optional(),
  title: z.string().max(200),
  content: z.string(),
  mediaUrl: z.string().max(255).optional().nullable(),
  published: z.boolean().optional(),
  slug: z.string().max(255),
  authorId: z.string(),
  categoryId: z.string(),
  createdAt: z.coerce.date().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutPostsInputObjectSchema)
}).strict();
export const PostUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateInput>;
export const PostUncheckedCreateInputObjectZodSchema = makeSchema();
