import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  profileId: z.literal(true).optional()
}).strict();
export const SocialAvgAggregateInputObjectSchema: z.ZodType<Prisma.SocialAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SocialAvgAggregateInputType>;
export const SocialAvgAggregateInputObjectZodSchema = makeSchema();
