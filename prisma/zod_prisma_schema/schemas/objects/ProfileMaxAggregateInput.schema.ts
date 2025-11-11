import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  bio: z.literal(true).optional(),
  profileImg: z.literal(true).optional(),
  coverImg: z.literal(true).optional()
}).strict();
export const ProfileMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMaxAggregateInputType>;
export const ProfileMaxAggregateInputObjectZodSchema = makeSchema();
