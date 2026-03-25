import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  profileId: z.literal(true).optional(),
  youtubeUrl: z.literal(true).optional(),
  instagramUrl: z.literal(true).optional(),
  telegramUrl: z.literal(true).optional(),
  linkedinUrl: z.literal(true).optional(),
  githubUrl: z.literal(true).optional()
}).strict();
export const SocialMinAggregateInputObjectSchema: z.ZodType<Prisma.SocialMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SocialMinAggregateInputType>;
export const SocialMinAggregateInputObjectZodSchema = makeSchema();
