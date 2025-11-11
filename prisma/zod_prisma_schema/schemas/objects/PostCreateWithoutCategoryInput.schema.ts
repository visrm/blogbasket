import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { UserCreateNestedOneWithoutPostsInputObjectSchema as UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema';
import { TagCreateNestedManyWithoutPostsInputObjectSchema as TagCreateNestedManyWithoutPostsInputObjectSchema } from './TagCreateNestedManyWithoutPostsInput.schema'

const makeSchema = () => z.object({
  title: z.string().max(200),
  content: z.string(),
  mediaUrl: z.string().max(255).optional().nullable(),
  published: z.boolean().optional(),
  slug: z.string().max(255),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutPostsInputObjectSchema).optional()
}).strict();
export const PostCreateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostCreateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateWithoutCategoryInput>;
export const PostCreateWithoutCategoryInputObjectZodSchema = makeSchema();
