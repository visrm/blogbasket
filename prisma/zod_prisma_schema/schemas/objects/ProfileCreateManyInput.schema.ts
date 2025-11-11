import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  bio: z.string().optional().nullable(),
  profileImg: z.string().max(255).optional().nullable(),
  coverImg: z.string().max(255).optional().nullable()
}).strict();
export const ProfileCreateManyInputObjectSchema: z.ZodType<Prisma.ProfileCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateManyInput>;
export const ProfileCreateManyInputObjectZodSchema = makeSchema();
