import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const TagAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagAvgOrderByAggregateInput>;
export const TagAvgOrderByAggregateInputObjectZodSchema = makeSchema();
