import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  youtubeUrl: z.string().max(200).optional(),
  instagramUrl: z.string().max(200).optional(),
  telegramUrl: z.string().max(200).optional(),
  linkedinUrl: z.string().max(200).optional(),
  githubUrl: z.string().max(200).optional()
}).strict();
export const SocialCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.SocialCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialCreateWithoutProfileInput>;
export const SocialCreateWithoutProfileInputObjectZodSchema = makeSchema();
