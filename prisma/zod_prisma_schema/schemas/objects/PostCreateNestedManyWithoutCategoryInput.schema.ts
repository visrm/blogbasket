import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostCreateWithoutCategoryInputObjectSchema as PostCreateWithoutCategoryInputObjectSchema } from './PostCreateWithoutCategoryInput.schema';
import { PostUncheckedCreateWithoutCategoryInputObjectSchema as PostUncheckedCreateWithoutCategoryInputObjectSchema } from './PostUncheckedCreateWithoutCategoryInput.schema';
import { PostCreateOrConnectWithoutCategoryInputObjectSchema as PostCreateOrConnectWithoutCategoryInputObjectSchema } from './PostCreateOrConnectWithoutCategoryInput.schema';
import { PostCreateManyCategoryInputEnvelopeObjectSchema as PostCreateManyCategoryInputEnvelopeObjectSchema } from './PostCreateManyCategoryInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutCategoryInputObjectSchema), z.lazy(() => PostCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PostCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateNestedManyWithoutCategoryInput>;
export const PostCreateNestedManyWithoutCategoryInputObjectZodSchema = makeSchema();
