import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { ProfileCreateWithoutSocialInputObjectSchema as ProfileCreateWithoutSocialInputObjectSchema } from './ProfileCreateWithoutSocialInput.schema';
import { ProfileUncheckedCreateWithoutSocialInputObjectSchema as ProfileUncheckedCreateWithoutSocialInputObjectSchema } from './ProfileUncheckedCreateWithoutSocialInput.schema';
import { ProfileCreateOrConnectWithoutSocialInputObjectSchema as ProfileCreateOrConnectWithoutSocialInputObjectSchema } from './ProfileCreateOrConnectWithoutSocialInput.schema';
import { ProfileUpsertWithoutSocialInputObjectSchema as ProfileUpsertWithoutSocialInputObjectSchema } from './ProfileUpsertWithoutSocialInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutSocialInputObjectSchema as ProfileUpdateToOneWithWhereWithoutSocialInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutSocialInput.schema';
import { ProfileUpdateWithoutSocialInputObjectSchema as ProfileUpdateWithoutSocialInputObjectSchema } from './ProfileUpdateWithoutSocialInput.schema';
import { ProfileUncheckedUpdateWithoutSocialInputObjectSchema as ProfileUncheckedUpdateWithoutSocialInputObjectSchema } from './ProfileUncheckedUpdateWithoutSocialInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutSocialInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutSocialInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutSocialInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutSocialInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutSocialInputObjectSchema), z.lazy(() => ProfileUpdateWithoutSocialInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutSocialInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutSocialNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutSocialNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutSocialNestedInput>;
export const ProfileUpdateOneRequiredWithoutSocialNestedInputObjectZodSchema = makeSchema();
