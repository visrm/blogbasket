import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { PostCreateNestedManyWithoutAuthorInputObjectSchema as PostCreateNestedManyWithoutAuthorInputObjectSchema } from './PostCreateNestedManyWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  username: z.string().max(30),
  displayName: z.string().max(30),
  email: z.string().max(100),
  password: z.string().max(100),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutProfileInput>;
export const UserCreateWithoutProfileInputObjectZodSchema = makeSchema();
