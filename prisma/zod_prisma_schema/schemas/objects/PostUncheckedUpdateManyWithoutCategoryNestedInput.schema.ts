import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostCreateWithoutCategoryInputObjectSchema as PostCreateWithoutCategoryInputObjectSchema } from './PostCreateWithoutCategoryInput.schema';
import { PostUncheckedCreateWithoutCategoryInputObjectSchema as PostUncheckedCreateWithoutCategoryInputObjectSchema } from './PostUncheckedCreateWithoutCategoryInput.schema';
import { PostCreateOrConnectWithoutCategoryInputObjectSchema as PostCreateOrConnectWithoutCategoryInputObjectSchema } from './PostCreateOrConnectWithoutCategoryInput.schema';
import { PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchema as PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { PostCreateManyCategoryInputEnvelopeObjectSchema as PostCreateManyCategoryInputEnvelopeObjectSchema } from './PostCreateManyCategoryInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchema as PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { PostUpdateManyWithWhereWithoutCategoryInputObjectSchema as PostUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './PostUpdateManyWithWhereWithoutCategoryInput.schema';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutCategoryInputObjectSchema), z.lazy(() => PostCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutCategoryInputObjectSchema), z.lazy(() => PostUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PostUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedUpdateManyWithoutCategoryNestedInput>;
export const PostUncheckedUpdateManyWithoutCategoryNestedInputObjectZodSchema = makeSchema();
