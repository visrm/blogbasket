import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const TagSumAggregateInputObjectSchema: z.ZodType<Prisma.TagSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagSumAggregateInputType>;
export const TagSumAggregateInputObjectZodSchema = makeSchema();
