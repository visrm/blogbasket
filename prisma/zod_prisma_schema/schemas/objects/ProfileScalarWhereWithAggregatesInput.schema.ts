import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const profilescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProfileScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProfileScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProfileScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProfileScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProfileScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  bio: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  profileImg: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  coverImg: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable()
}).strict();
export const ProfileScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProfileScalarWhereWithAggregatesInput> = profilescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProfileScalarWhereWithAggregatesInput>;
export const ProfileScalarWhereWithAggregatesInputObjectZodSchema = profilescalarwherewithaggregatesinputSchema;
