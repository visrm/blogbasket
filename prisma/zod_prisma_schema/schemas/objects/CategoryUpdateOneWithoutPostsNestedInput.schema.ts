import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { CategoryCreateWithoutPostsInputObjectSchema as CategoryCreateWithoutPostsInputObjectSchema } from './CategoryCreateWithoutPostsInput.schema';
import { CategoryUncheckedCreateWithoutPostsInputObjectSchema as CategoryUncheckedCreateWithoutPostsInputObjectSchema } from './CategoryUncheckedCreateWithoutPostsInput.schema';
import { CategoryCreateOrConnectWithoutPostsInputObjectSchema as CategoryCreateOrConnectWithoutPostsInputObjectSchema } from './CategoryCreateOrConnectWithoutPostsInput.schema';
import { CategoryUpsertWithoutPostsInputObjectSchema as CategoryUpsertWithoutPostsInputObjectSchema } from './CategoryUpsertWithoutPostsInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateToOneWithWhereWithoutPostsInputObjectSchema as CategoryUpdateToOneWithWhereWithoutPostsInputObjectSchema } from './CategoryUpdateToOneWithWhereWithoutPostsInput.schema';
import { CategoryUpdateWithoutPostsInputObjectSchema as CategoryUpdateWithoutPostsInputObjectSchema } from './CategoryUpdateWithoutPostsInput.schema';
import { CategoryUncheckedUpdateWithoutPostsInputObjectSchema as CategoryUncheckedUpdateWithoutPostsInputObjectSchema } from './CategoryUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutPostsInputObjectSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutPostsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CategoryUpdateToOneWithWhereWithoutPostsInputObjectSchema), z.lazy(() => CategoryUpdateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputObjectSchema)]).optional()
}).strict();
export const CategoryUpdateOneWithoutPostsNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutPostsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateOneWithoutPostsNestedInput>;
export const CategoryUpdateOneWithoutPostsNestedInputObjectZodSchema = makeSchema();
