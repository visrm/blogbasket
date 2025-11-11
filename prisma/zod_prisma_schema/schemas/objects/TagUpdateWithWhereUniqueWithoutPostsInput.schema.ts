import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutPostsInputObjectSchema as TagUpdateWithoutPostsInputObjectSchema } from './TagUpdateWithoutPostsInput.schema';
import { TagUncheckedUpdateWithoutPostsInputObjectSchema as TagUncheckedUpdateWithoutPostsInputObjectSchema } from './TagUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagUpdateWithoutPostsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutPostsInputObjectSchema)])
}).strict();
export const TagUpdateWithWhereUniqueWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutPostsInput>;
export const TagUpdateWithWhereUniqueWithoutPostsInputObjectZodSchema = makeSchema();
