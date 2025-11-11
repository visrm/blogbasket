import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutPostsInputObjectSchema as TagUpdateWithoutPostsInputObjectSchema } from './TagUpdateWithoutPostsInput.schema';
import { TagUncheckedUpdateWithoutPostsInputObjectSchema as TagUncheckedUpdateWithoutPostsInputObjectSchema } from './TagUncheckedUpdateWithoutPostsInput.schema';
import { TagCreateWithoutPostsInputObjectSchema as TagCreateWithoutPostsInputObjectSchema } from './TagCreateWithoutPostsInput.schema';
import { TagUncheckedCreateWithoutPostsInputObjectSchema as TagUncheckedCreateWithoutPostsInputObjectSchema } from './TagUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagUpdateWithoutPostsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutPostsInputObjectSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutPostsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const TagUpsertWithWhereUniqueWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutPostsInput>;
export const TagUpsertWithWhereUniqueWithoutPostsInputObjectZodSchema = makeSchema();
