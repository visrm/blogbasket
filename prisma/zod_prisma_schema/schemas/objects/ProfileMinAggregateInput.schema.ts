import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  bio: z.literal(true).optional(),
  profileImg: z.literal(true).optional(),
  coverImg: z.literal(true).optional()
}).strict();
export const ProfileMinAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMinAggregateInputType>;
export const ProfileMinAggregateInputObjectZodSchema = makeSchema();
