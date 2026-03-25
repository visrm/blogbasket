import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { PostCreateNestedManyWithoutAuthorInputObjectSchema as PostCreateNestedManyWithoutAuthorInputObjectSchema } from './PostCreateNestedManyWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(100).optional(),
  username: z.string().max(30),
  displayName: z.string().max(30).optional(),
  email: z.string().max(100),
  password: z.string().max(100),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutProfileInput>;
export const UserCreateWithoutProfileInputObjectZodSchema = makeSchema();
