import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  bio: z.string().optional().nullable(),
  profileImg: z.string().optional().nullable(),
  coverImg: z.string().optional().nullable()
}).strict();
export const ProfileUncheckedCreateWithoutSocialInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutSocialInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateWithoutSocialInput>;
export const ProfileUncheckedCreateWithoutSocialInputObjectZodSchema = makeSchema();
