import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  profileId: z.number().int(),
  youtubeUrl: z.string().max(200).optional(),
  instagramUrl: z.string().max(200).optional(),
  telegramUrl: z.string().max(200).optional(),
  linkedinUrl: z.string().max(200).optional(),
  githubUrl: z.string().max(200).optional()
}).strict();
export const SocialCreateManyInputObjectSchema: z.ZodType<Prisma.SocialCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialCreateManyInput>;
export const SocialCreateManyInputObjectZodSchema = makeSchema();
