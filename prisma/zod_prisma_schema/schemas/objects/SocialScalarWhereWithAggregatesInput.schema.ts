import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const socialscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SocialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SocialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SocialScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SocialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SocialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  profileId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  youtubeUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(200)]).optional(),
  instagramUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(200)]).optional(),
  telegramUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(200)]).optional(),
  linkedinUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(200)]).optional(),
  githubUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(200)]).optional()
}).strict();
export const SocialScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SocialScalarWhereWithAggregatesInput> = socialscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SocialScalarWhereWithAggregatesInput>;
export const SocialScalarWhereWithAggregatesInputObjectZodSchema = socialscalarwherewithaggregatesinputSchema;
