import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PostUpdateManyWithoutTagsNestedInputObjectSchema as PostUpdateManyWithoutTagsNestedInputObjectSchema } from './PostUpdateManyWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  posts: z.lazy(() => PostUpdateManyWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const TagUpdateInputObjectSchema: z.ZodType<Prisma.TagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateInput>;
export const TagUpdateInputObjectZodSchema = makeSchema();
