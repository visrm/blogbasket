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
export const ProfileCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProfileCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCountOrderByAggregateInput>;
export const ProfileCountOrderByAggregateInputObjectZodSchema = makeSchema();
