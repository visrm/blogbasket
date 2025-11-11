import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagCountOrderByAggregateInputObjectSchema as TagCountOrderByAggregateInputObjectSchema } from './TagCountOrderByAggregateInput.schema';
import { TagAvgOrderByAggregateInputObjectSchema as TagAvgOrderByAggregateInputObjectSchema } from './TagAvgOrderByAggregateInput.schema';
import { TagMaxOrderByAggregateInputObjectSchema as TagMaxOrderByAggregateInputObjectSchema } from './TagMaxOrderByAggregateInput.schema';
import { TagMinOrderByAggregateInputObjectSchema as TagMinOrderByAggregateInputObjectSchema } from './TagMinOrderByAggregateInput.schema';
import { TagSumOrderByAggregateInputObjectSchema as TagSumOrderByAggregateInputObjectSchema } from './TagSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TagAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TagSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagOrderByWithAggregationInput>;
export const TagOrderByWithAggregationInputObjectZodSchema = makeSchema();
