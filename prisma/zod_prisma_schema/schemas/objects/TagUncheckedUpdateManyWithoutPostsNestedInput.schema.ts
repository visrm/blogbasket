import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagCreateWithoutPostsInputObjectSchema as TagCreateWithoutPostsInputObjectSchema } from './TagCreateWithoutPostsInput.schema';
import { TagUncheckedCreateWithoutPostsInputObjectSchema as TagUncheckedCreateWithoutPostsInputObjectSchema } from './TagUncheckedCreateWithoutPostsInput.schema';
import { TagCreateOrConnectWithoutPostsInputObjectSchema as TagCreateOrConnectWithoutPostsInputObjectSchema } from './TagCreateOrConnectWithoutPostsInput.schema';
import { TagUpsertWithWhereUniqueWithoutPostsInputObjectSchema as TagUpsertWithWhereUniqueWithoutPostsInputObjectSchema } from './TagUpsertWithWhereUniqueWithoutPostsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithWhereUniqueWithoutPostsInputObjectSchema as TagUpdateWithWhereUniqueWithoutPostsInputObjectSchema } from './TagUpdateWithWhereUniqueWithoutPostsInput.schema';
import { TagUpdateManyWithWhereWithoutPostsInputObjectSchema as TagUpdateManyWithWhereWithoutPostsInputObjectSchema } from './TagUpdateManyWithWhereWithoutPostsInput.schema';
import { TagScalarWhereInputObjectSchema as TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutPostsInputObjectSchema), z.lazy(() => TagCreateWithoutPostsInputObjectSchema).array(), z.lazy(() => TagUncheckedCreateWithoutPostsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutPostsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutPostsInputObjectSchema), z.lazy(() => TagCreateOrConnectWithoutPostsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagUpsertWithWhereUniqueWithoutPostsInputObjectSchema), z.lazy(() => TagUpsertWithWhereUniqueWithoutPostsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagUpdateWithWhereUniqueWithoutPostsInputObjectSchema), z.lazy(() => TagUpdateWithWhereUniqueWithoutPostsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagUpdateManyWithWhereWithoutPostsInputObjectSchema), z.lazy(() => TagUpdateManyWithWhereWithoutPostsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagScalarWhereInputObjectSchema), z.lazy(() => TagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagUncheckedUpdateManyWithoutPostsNestedInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutPostsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateManyWithoutPostsNestedInput>;
export const TagUncheckedUpdateManyWithoutPostsNestedInputObjectZodSchema = makeSchema();
