import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  categoryId: z.literal(true).optional()
}).strict();
export const PostSumAggregateInputObjectSchema: z.ZodType<Prisma.PostSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PostSumAggregateInputType>;
export const PostSumAggregateInputObjectZodSchema = makeSchema();
