import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { CategoryUpdateWithoutPostsInputObjectSchema as CategoryUpdateWithoutPostsInputObjectSchema } from './CategoryUpdateWithoutPostsInput.schema';
import { CategoryUncheckedUpdateWithoutPostsInputObjectSchema as CategoryUncheckedUpdateWithoutPostsInputObjectSchema } from './CategoryUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CategoryUpdateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputObjectSchema)])
}).strict();
export const CategoryUpdateToOneWithWhereWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutPostsInput>;
export const CategoryUpdateToOneWithWhereWithoutPostsInputObjectZodSchema = makeSchema();
