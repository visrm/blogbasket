import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const socialwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SocialWhereInputObjectSchema), z.lazy(() => SocialWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SocialWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SocialWhereInputObjectSchema), z.lazy(() => SocialWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  profileId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  youtubeUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(200)]).optional(),
  instagramUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(200)]).optional(),
  telegramUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(200)]).optional(),
  linkedinUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(200)]).optional(),
  githubUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(200)]).optional(),
  profile: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional()
}).strict();
export const SocialWhereInputObjectSchema: z.ZodType<Prisma.SocialWhereInput> = socialwhereinputSchema as unknown as z.ZodType<Prisma.SocialWhereInput>;
export const SocialWhereInputObjectZodSchema = socialwhereinputSchema;
