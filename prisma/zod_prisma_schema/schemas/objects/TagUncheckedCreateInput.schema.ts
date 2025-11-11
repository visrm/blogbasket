import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostUncheckedCreateNestedManyWithoutTagsInputObjectSchema as PostUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(50),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
}).strict();
export const TagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateInput>;
export const TagUncheckedCreateInputObjectZodSchema = makeSchema();
