import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  youtubeUrl: SortOrderSchema.optional(),
  instagramUrl: SortOrderSchema.optional(),
  telegramUrl: SortOrderSchema.optional(),
  linkedinUrl: SortOrderSchema.optional(),
  githubUrl: SortOrderSchema.optional()
}).strict();
export const SocialCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SocialCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialCountOrderByAggregateInput>;
export const SocialCountOrderByAggregateInputObjectZodSchema = makeSchema();
