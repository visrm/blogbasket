import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  youtubeUrl: z.string().optional(),
  instagramUrl: z.string().optional(),
  telegramUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  githubUrl: z.string().optional()
}).strict();
export const SocialUncheckedCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.SocialUncheckedCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialUncheckedCreateWithoutProfileInput>;
export const SocialUncheckedCreateWithoutProfileInputObjectZodSchema = makeSchema();
