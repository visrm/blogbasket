import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagCreateNestedManyWithoutPostsInputObjectSchema as TagCreateNestedManyWithoutPostsInputObjectSchema } from './TagCreateNestedManyWithoutPostsInput.schema';
import { CategoryCreateNestedOneWithoutPostsInputObjectSchema as CategoryCreateNestedOneWithoutPostsInputObjectSchema } from './CategoryCreateNestedOneWithoutPostsInput.schema'

const makeSchema = () => z.object({
  title: z.string().max(200),
  content: z.string(),
  mediaUrl: z.string().max(255).optional().nullable(),
  published: z.boolean().optional(),
  slug: z.string().max(255),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutPostsInputObjectSchema).optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutPostsInputObjectSchema).optional()
}).strict();
export const PostCreateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostCreateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateWithoutAuthorInput>;
export const PostCreateWithoutAuthorInputObjectZodSchema = makeSchema();
