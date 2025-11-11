import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutPostsInputObjectSchema as TagCreateWithoutPostsInputObjectSchema } from './TagCreateWithoutPostsInput.schema';
import { TagUncheckedCreateWithoutPostsInputObjectSchema as TagUncheckedCreateWithoutPostsInputObjectSchema } from './TagUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagCreateWithoutPostsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const TagCreateOrConnectWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateOrConnectWithoutPostsInput>;
export const TagCreateOrConnectWithoutPostsInputObjectZodSchema = makeSchema();
