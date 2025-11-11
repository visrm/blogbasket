import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  mediaUrl: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const PostCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCountOrderByAggregateInput>;
export const PostCountOrderByAggregateInputObjectZodSchema = makeSchema();
