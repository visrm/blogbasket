import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TagUpdateWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagUpdateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateWithoutPostsInput>;
export const TagUpdateWithoutPostsInputObjectZodSchema = makeSchema();
