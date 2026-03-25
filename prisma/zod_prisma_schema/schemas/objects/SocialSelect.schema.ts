import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  profileId: z.boolean().optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  youtubeUrl: z.boolean().optional(),
  instagramUrl: z.boolean().optional(),
  telegramUrl: z.boolean().optional(),
  linkedinUrl: z.boolean().optional(),
  githubUrl: z.boolean().optional()
}).strict();
export const SocialSelectObjectSchema: z.ZodType<Prisma.SocialSelect> = makeSchema() as unknown as z.ZodType<Prisma.SocialSelect>;
export const SocialSelectObjectZodSchema = makeSchema();
