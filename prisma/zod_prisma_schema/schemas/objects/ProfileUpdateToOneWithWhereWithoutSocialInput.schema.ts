import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutSocialInputObjectSchema as ProfileUpdateWithoutSocialInputObjectSchema } from './ProfileUpdateWithoutSocialInput.schema';
import { ProfileUncheckedUpdateWithoutSocialInputObjectSchema as ProfileUncheckedUpdateWithoutSocialInputObjectSchema } from './ProfileUncheckedUpdateWithoutSocialInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutSocialInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutSocialInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutSocialInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutSocialInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutSocialInput>;
export const ProfileUpdateToOneWithWhereWithoutSocialInputObjectZodSchema = makeSchema();
