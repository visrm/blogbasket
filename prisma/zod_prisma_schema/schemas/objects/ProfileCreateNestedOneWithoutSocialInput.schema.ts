import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { ProfileCreateWithoutSocialInputObjectSchema as ProfileCreateWithoutSocialInputObjectSchema } from './ProfileCreateWithoutSocialInput.schema';
import { ProfileUncheckedCreateWithoutSocialInputObjectSchema as ProfileUncheckedCreateWithoutSocialInputObjectSchema } from './ProfileUncheckedCreateWithoutSocialInput.schema';
import { ProfileCreateOrConnectWithoutSocialInputObjectSchema as ProfileCreateOrConnectWithoutSocialInputObjectSchema } from './ProfileCreateOrConnectWithoutSocialInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutSocialInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutSocialInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutSocialInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutSocialInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutSocialInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutSocialInput>;
export const ProfileCreateNestedOneWithoutSocialInputObjectZodSchema = makeSchema();
