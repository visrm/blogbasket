import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutCategoryInputObjectSchema as PostUpdateWithoutCategoryInputObjectSchema } from './PostUpdateWithoutCategoryInput.schema';
import { PostUncheckedUpdateWithoutCategoryInputObjectSchema as PostUncheckedUpdateWithoutCategoryInputObjectSchema } from './PostUncheckedUpdateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutCategoryInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutCategoryInputObjectSchema)])
}).strict();
export const PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutCategoryInput>;
export const PostUpdateWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
