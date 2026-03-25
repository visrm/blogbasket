import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { UserCreateNestedOneWithoutProfileInputObjectSchema as UserCreateNestedOneWithoutProfileInputObjectSchema } from './UserCreateNestedOneWithoutProfileInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(100).optional(),
  bio: z.string().optional().nullable(),
  profileImg: z.string().max(255).optional().nullable(),
  coverImg: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema)
}).strict();
export const ProfileCreateWithoutSocialInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutSocialInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateWithoutSocialInput>;
export const ProfileCreateWithoutSocialInputObjectZodSchema = makeSchema();
