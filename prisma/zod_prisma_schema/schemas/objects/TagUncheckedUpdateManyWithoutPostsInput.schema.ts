import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TagUncheckedUpdateManyWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateManyWithoutPostsInput>;
export const TagUncheckedUpdateManyWithoutPostsInputObjectZodSchema = makeSchema();
