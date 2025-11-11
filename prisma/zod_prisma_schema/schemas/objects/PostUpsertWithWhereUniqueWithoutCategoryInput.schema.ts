import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutCategoryInputObjectSchema as PostUpdateWithoutCategoryInputObjectSchema } from './PostUpdateWithoutCategoryInput.schema';
import { PostUncheckedUpdateWithoutCategoryInputObjectSchema as PostUncheckedUpdateWithoutCategoryInputObjectSchema } from './PostUncheckedUpdateWithoutCategoryInput.schema';
import { PostCreateWithoutCategoryInputObjectSchema as PostCreateWithoutCategoryInputObjectSchema } from './PostCreateWithoutCategoryInput.schema';
import { PostUncheckedCreateWithoutCategoryInputObjectSchema as PostUncheckedCreateWithoutCategoryInputObjectSchema } from './PostUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutCategoryInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutCategoryInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutCategoryInput>;
export const PostUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
