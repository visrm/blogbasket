import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutSocialInputObjectSchema as ProfileCreateWithoutSocialInputObjectSchema } from './ProfileCreateWithoutSocialInput.schema';
import { ProfileUncheckedCreateWithoutSocialInputObjectSchema as ProfileUncheckedCreateWithoutSocialInputObjectSchema } from './ProfileUncheckedCreateWithoutSocialInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutSocialInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutSocialInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutSocialInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutSocialInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutSocialInput>;
export const ProfileCreateOrConnectWithoutSocialInputObjectZodSchema = makeSchema();
