import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PostUncheckedUpdateManyWithoutTagsNestedInputObjectSchema as PostUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  posts: z.lazy(() => PostUncheckedUpdateManyWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const TagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateInput>;
export const TagUncheckedUpdateInputObjectZodSchema = makeSchema();
