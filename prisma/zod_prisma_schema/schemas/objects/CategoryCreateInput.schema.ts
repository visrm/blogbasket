import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostCreateNestedManyWithoutCategoryInputObjectSchema as PostCreateNestedManyWithoutCategoryInputObjectSchema } from './PostCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(50),
  slug: z.string().max(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  posts: z.lazy(() => PostCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const CategoryCreateInputObjectSchema: z.ZodType<Prisma.CategoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateInput>;
export const CategoryCreateInputObjectZodSchema = makeSchema();
