import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as PostUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(50),
  slug: z.string().max(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const CategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateInput>;
export const CategoryUncheckedCreateInputObjectZodSchema = makeSchema();
