import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialCreateNestedOneWithoutProfileInputObjectSchema as SocialCreateNestedOneWithoutProfileInputObjectSchema } from './SocialCreateNestedOneWithoutProfileInput.schema'

const makeSchema = () => z.object({
  bio: z.string().optional().nullable(),
  profileImg: z.string().max(255).optional().nullable(),
  coverImg: z.string().max(255).optional().nullable(),
  social: z.lazy(() => SocialCreateNestedOneWithoutProfileInputObjectSchema).optional()
}).strict();
export const ProfileCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateWithoutUserInput>;
export const ProfileCreateWithoutUserInputObjectZodSchema = makeSchema();
