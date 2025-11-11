import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TagUpdateManyWithoutPostsNestedInputObjectSchema as TagUpdateManyWithoutPostsNestedInputObjectSchema } from './TagUpdateManyWithoutPostsNestedInput.schema';
import { CategoryUpdateOneWithoutPostsNestedInputObjectSchema as CategoryUpdateOneWithoutPostsNestedInputObjectSchema } from './CategoryUpdateOneWithoutPostsNestedInput.schema'

const makeSchema = () => z.object({
  title: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mediaUrl: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutPostsNestedInputObjectSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutPostsNestedInputObjectSchema).optional()
}).strict();
export const PostUpdateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUpdateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithoutAuthorInput>;
export const PostUpdateWithoutAuthorInputObjectZodSchema = makeSchema();
