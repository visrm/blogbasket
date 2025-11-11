import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  youtubeUrl: SortOrderSchema.optional(),
  instagramUrl: SortOrderSchema.optional(),
  telegramUrl: SortOrderSchema.optional(),
  linkedinUrl: SortOrderSchema.optional(),
  githubUrl: SortOrderSchema.optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SocialOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SocialOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialOrderByWithRelationInput>;
export const SocialOrderByWithRelationInputObjectZodSchema = makeSchema();
