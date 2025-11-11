import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutCategoryInputObjectSchema as PostUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './PostUncheckedUpdateManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutCategoryInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutCategoryInput>;
export const PostUpdateManyWithWhereWithoutCategoryInputObjectZodSchema = makeSchema();
