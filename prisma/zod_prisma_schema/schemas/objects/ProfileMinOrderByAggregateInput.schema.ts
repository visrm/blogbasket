import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  bio: SortOrderSchema.optional(),
  profileImg: SortOrderSchema.optional(),
  coverImg: SortOrderSchema.optional()
}).strict();
export const ProfileMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMinOrderByAggregateInput>;
export const ProfileMinOrderByAggregateInputObjectZodSchema = makeSchema();
