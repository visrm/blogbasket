import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TagUncheckedUpdateWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateWithoutPostsInput>;
export const TagUncheckedUpdateWithoutPostsInputObjectZodSchema = makeSchema();
