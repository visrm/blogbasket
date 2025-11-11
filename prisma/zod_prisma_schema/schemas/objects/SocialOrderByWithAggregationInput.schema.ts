import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SocialCountOrderByAggregateInputObjectSchema as SocialCountOrderByAggregateInputObjectSchema } from './SocialCountOrderByAggregateInput.schema';
import { SocialAvgOrderByAggregateInputObjectSchema as SocialAvgOrderByAggregateInputObjectSchema } from './SocialAvgOrderByAggregateInput.schema';
import { SocialMaxOrderByAggregateInputObjectSchema as SocialMaxOrderByAggregateInputObjectSchema } from './SocialMaxOrderByAggregateInput.schema';
import { SocialMinOrderByAggregateInputObjectSchema as SocialMinOrderByAggregateInputObjectSchema } from './SocialMinOrderByAggregateInput.schema';
import { SocialSumOrderByAggregateInputObjectSchema as SocialSumOrderByAggregateInputObjectSchema } from './SocialSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  youtubeUrl: SortOrderSchema.optional(),
  instagramUrl: SortOrderSchema.optional(),
  telegramUrl: SortOrderSchema.optional(),
  linkedinUrl: SortOrderSchema.optional(),
  githubUrl: SortOrderSchema.optional(),
  _count: z.lazy(() => SocialCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SocialAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SocialMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SocialMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SocialSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SocialOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SocialOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialOrderByWithAggregationInput>;
export const SocialOrderByWithAggregationInputObjectZodSchema = makeSchema();
