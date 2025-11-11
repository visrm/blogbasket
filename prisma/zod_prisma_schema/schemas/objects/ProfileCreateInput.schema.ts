import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { UserCreateNestedOneWithoutProfileInputObjectSchema as UserCreateNestedOneWithoutProfileInputObjectSchema } from './UserCreateNestedOneWithoutProfileInput.schema';
import { SocialCreateNestedOneWithoutProfileInputObjectSchema as SocialCreateNestedOneWithoutProfileInputObjectSchema } from './SocialCreateNestedOneWithoutProfileInput.schema'

const makeSchema = () => z.object({
  bio: z.string().optional().nullable(),
  profileImg: z.string().max(255).optional().nullable(),
  coverImg: z.string().max(255).optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema),
  social: z.lazy(() => SocialCreateNestedOneWithoutProfileInputObjectSchema).optional()
}).strict();
export const ProfileCreateInputObjectSchema: z.ZodType<Prisma.ProfileCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateInput>;
export const ProfileCreateInputObjectZodSchema = makeSchema();
