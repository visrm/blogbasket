import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema as PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string(),
  displayName: z.string(),
  email: z.string(),
  password: z.string(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutProfileInput>;
export const UserUncheckedCreateWithoutProfileInputObjectZodSchema = makeSchema();
