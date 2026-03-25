import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialUncheckedCreateNestedOneWithoutProfileInputObjectSchema as SocialUncheckedCreateNestedOneWithoutProfileInputObjectSchema } from './SocialUncheckedCreateNestedOneWithoutProfileInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  profileImg: z.string().optional().nullable(),
  coverImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  social: z.lazy(() => SocialUncheckedCreateNestedOneWithoutProfileInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateWithoutUserInput>;
export const ProfileUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
