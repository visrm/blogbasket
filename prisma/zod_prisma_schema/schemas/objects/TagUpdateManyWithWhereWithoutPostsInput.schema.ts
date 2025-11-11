import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagScalarWhereInputObjectSchema as TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema';
import { TagUpdateManyMutationInputObjectSchema as TagUpdateManyMutationInputObjectSchema } from './TagUpdateManyMutationInput.schema';
import { TagUncheckedUpdateManyWithoutPostsInputObjectSchema as TagUncheckedUpdateManyWithoutPostsInputObjectSchema } from './TagUncheckedUpdateManyWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputObjectSchema), z.lazy(() => TagUncheckedUpdateManyWithoutPostsInputObjectSchema)])
}).strict();
export const TagUpdateManyWithWhereWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateManyWithWhereWithoutPostsInput>;
export const TagUpdateManyWithWhereWithoutPostsInputObjectZodSchema = makeSchema();
