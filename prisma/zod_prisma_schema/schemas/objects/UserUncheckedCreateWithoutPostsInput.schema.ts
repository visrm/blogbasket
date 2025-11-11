import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema as ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ProfileUncheckedCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string(),
  displayName: z.string(),
  email: z.string(),
  password: z.string(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput>;
export const UserUncheckedCreateWithoutPostsInputObjectZodSchema = makeSchema();
