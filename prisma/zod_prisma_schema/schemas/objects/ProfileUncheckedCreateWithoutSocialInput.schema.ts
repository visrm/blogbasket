import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  bio: z.string().optional().nullable(),
  profileImg: z.string().optional().nullable(),
  coverImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProfileUncheckedCreateWithoutSocialInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutSocialInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateWithoutSocialInput>;
export const ProfileUncheckedCreateWithoutSocialInputObjectZodSchema = makeSchema();
