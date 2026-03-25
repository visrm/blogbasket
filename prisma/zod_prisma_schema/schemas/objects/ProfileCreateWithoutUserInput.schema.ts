import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialCreateNestedOneWithoutProfileInputObjectSchema as SocialCreateNestedOneWithoutProfileInputObjectSchema } from './SocialCreateNestedOneWithoutProfileInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(100).optional(),
  bio: z.string().optional().nullable(),
  profileImg: z.string().max(255).optional().nullable(),
  coverImg: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  social: z.lazy(() => SocialCreateNestedOneWithoutProfileInputObjectSchema).optional()
}).strict();
export const ProfileCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateWithoutUserInput>;
export const ProfileCreateWithoutUserInputObjectZodSchema = makeSchema();
