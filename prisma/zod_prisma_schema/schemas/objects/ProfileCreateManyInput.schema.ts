import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(100).optional(),
  userId: z.string(),
  bio: z.string().optional().nullable(),
  profileImg: z.string().max(255).optional().nullable(),
  coverImg: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProfileCreateManyInputObjectSchema: z.ZodType<Prisma.ProfileCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateManyInput>;
export const ProfileCreateManyInputObjectZodSchema = makeSchema();
