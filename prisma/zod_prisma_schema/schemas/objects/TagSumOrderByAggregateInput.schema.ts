import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const TagSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagSumOrderByAggregateInput>;
export const TagSumOrderByAggregateInputObjectZodSchema = makeSchema();
