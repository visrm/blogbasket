import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutSocialInputObjectSchema as ProfileCreateNestedOneWithoutSocialInputObjectSchema } from './ProfileCreateNestedOneWithoutSocialInput.schema'

const makeSchema = () => z.object({
  youtubeUrl: z.string().max(200).optional(),
  instagramUrl: z.string().max(200).optional(),
  telegramUrl: z.string().max(200).optional(),
  linkedinUrl: z.string().max(200).optional(),
  githubUrl: z.string().max(200).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutSocialInputObjectSchema)
}).strict();
export const SocialCreateInputObjectSchema: z.ZodType<Prisma.SocialCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialCreateInput>;
export const SocialCreateInputObjectZodSchema = makeSchema();
