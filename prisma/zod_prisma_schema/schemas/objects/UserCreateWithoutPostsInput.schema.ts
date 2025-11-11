import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { ProfileCreateNestedOneWithoutUserInputObjectSchema as ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  username: z.string().max(30),
  displayName: z.string().max(30),
  email: z.string().max(100),
  password: z.string().max(100),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutPostsInput>;
export const UserCreateWithoutPostsInputObjectZodSchema = makeSchema();
