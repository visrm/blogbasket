import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PostUncheckedUpdateManyWithoutTagsNestedInputObjectSchema as PostUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  posts: z.lazy(() => PostUncheckedUpdateManyWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const TagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateInput>;
export const TagUncheckedUpdateInputObjectZodSchema = makeSchema();
