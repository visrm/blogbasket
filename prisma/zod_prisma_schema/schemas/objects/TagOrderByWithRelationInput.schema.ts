import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PostOrderByRelationAggregateInputObjectSchema as PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  posts: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagOrderByWithRelationInput>;
export const TagOrderByWithRelationInputObjectZodSchema = makeSchema();
