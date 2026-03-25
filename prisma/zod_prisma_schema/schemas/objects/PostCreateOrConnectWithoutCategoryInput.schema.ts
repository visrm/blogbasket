import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutCategoryInputObjectSchema as PostCreateWithoutCategoryInputObjectSchema } from './PostCreateWithoutCategoryInput.schema';
import { PostUncheckedCreateWithoutCategoryInputObjectSchema as PostUncheckedCreateWithoutCategoryInputObjectSchema } from './PostUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutCategoryInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutCategoryInput>;
export const PostCreateOrConnectWithoutCategoryInputObjectZodSchema = makeSchema();
