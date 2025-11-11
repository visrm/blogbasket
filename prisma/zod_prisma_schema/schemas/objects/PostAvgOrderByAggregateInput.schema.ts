import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional()
}).strict();
export const PostAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostAvgOrderByAggregateInput>;
export const PostAvgOrderByAggregateInputObjectZodSchema = makeSchema();
