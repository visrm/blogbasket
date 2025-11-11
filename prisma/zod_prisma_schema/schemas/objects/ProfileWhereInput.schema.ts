import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { SocialNullableScalarRelationFilterObjectSchema as SocialNullableScalarRelationFilterObjectSchema } from './SocialNullableScalarRelationFilter.schema';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './SocialWhereInput.schema'

const profilewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProfileWhereInputObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProfileWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProfileWhereInputObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  bio: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  profileImg: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  coverImg: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  social: z.union([z.lazy(() => SocialNullableScalarRelationFilterObjectSchema), z.lazy(() => SocialWhereInputObjectSchema)]).optional()
}).strict();
export const ProfileWhereInputObjectSchema: z.ZodType<Prisma.ProfileWhereInput> = profilewhereinputSchema as unknown as z.ZodType<Prisma.ProfileWhereInput>;
export const ProfileWhereInputObjectZodSchema = profilewhereinputSchema;
