import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagCreateWithoutPostsInputObjectSchema as TagCreateWithoutPostsInputObjectSchema } from './TagCreateWithoutPostsInput.schema';
import { TagUncheckedCreateWithoutPostsInputObjectSchema as TagUncheckedCreateWithoutPostsInputObjectSchema } from './TagUncheckedCreateWithoutPostsInput.schema';
import { TagCreateOrConnectWithoutPostsInputObjectSchema as TagCreateOrConnectWithoutPostsInputObjectSchema } from './TagCreateOrConnectWithoutPostsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutPostsInputObjectSchema), z.lazy(() => TagCreateWithoutPostsInputObjectSchema).array(), z.lazy(() => TagUncheckedCreateWithoutPostsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutPostsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutPostsInputObjectSchema), z.lazy(() => TagCreateOrConnectWithoutPostsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagUncheckedCreateNestedManyWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutPostsInput>;
export const TagUncheckedCreateNestedManyWithoutPostsInputObjectZodSchema = makeSchema();
