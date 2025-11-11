import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { UserCreateNestedOneWithoutPostsInputObjectSchema as UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema';
import { CategoryCreateNestedOneWithoutPostsInputObjectSchema as CategoryCreateNestedOneWithoutPostsInputObjectSchema } from './CategoryCreateNestedOneWithoutPostsInput.schema'

const makeSchema = () => z.object({
  title: z.string().max(200),
  content: z.string(),
  mediaUrl: z.string().max(255).optional().nullable(),
  published: z.boolean().optional(),
  slug: z.string().max(255),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutPostsInputObjectSchema).optional()
}).strict();
export const PostCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.PostCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateWithoutTagsInput>;
export const PostCreateWithoutTagsInputObjectZodSchema = makeSchema();
