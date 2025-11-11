import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { CategoryUpdateWithoutPostsInputObjectSchema as CategoryUpdateWithoutPostsInputObjectSchema } from './CategoryUpdateWithoutPostsInput.schema';
import { CategoryUncheckedUpdateWithoutPostsInputObjectSchema as CategoryUncheckedUpdateWithoutPostsInputObjectSchema } from './CategoryUncheckedUpdateWithoutPostsInput.schema';
import { CategoryCreateWithoutPostsInputObjectSchema as CategoryCreateWithoutPostsInputObjectSchema } from './CategoryCreateWithoutPostsInput.schema';
import { CategoryUncheckedCreateWithoutPostsInputObjectSchema as CategoryUncheckedCreateWithoutPostsInputObjectSchema } from './CategoryUncheckedCreateWithoutPostsInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CategoryUpdateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema)]),
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional()
}).strict();
export const CategoryUpsertWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUpsertWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpsertWithoutPostsInput>;
export const CategoryUpsertWithoutPostsInputObjectZodSchema = makeSchema();
