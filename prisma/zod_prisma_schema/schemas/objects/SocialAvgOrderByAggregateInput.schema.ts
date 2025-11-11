import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional()
}).strict();
export const SocialAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SocialAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialAvgOrderByAggregateInput>;
export const SocialAvgOrderByAggregateInputObjectZodSchema = makeSchema();
