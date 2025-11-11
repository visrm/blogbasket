import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  profileId: z.literal(true).optional()
}).strict();
export const SocialSumAggregateInputObjectSchema: z.ZodType<Prisma.SocialSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SocialSumAggregateInputType>;
export const SocialSumAggregateInputObjectZodSchema = makeSchema();
