import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { ProfileUpdateWithoutSocialInputObjectSchema as ProfileUpdateWithoutSocialInputObjectSchema } from './ProfileUpdateWithoutSocialInput.schema';
import { ProfileUncheckedUpdateWithoutSocialInputObjectSchema as ProfileUncheckedUpdateWithoutSocialInputObjectSchema } from './ProfileUncheckedUpdateWithoutSocialInput.schema';
import { ProfileCreateWithoutSocialInputObjectSchema as ProfileCreateWithoutSocialInputObjectSchema } from './ProfileCreateWithoutSocialInput.schema';
import { ProfileUncheckedCreateWithoutSocialInputObjectSchema as ProfileUncheckedCreateWithoutSocialInputObjectSchema } from './ProfileUncheckedCreateWithoutSocialInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutSocialInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutSocialInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutSocialInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutSocialInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutSocialInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutSocialInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutSocialInput>;
export const ProfileUpsertWithoutSocialInputObjectZodSchema = makeSchema();
