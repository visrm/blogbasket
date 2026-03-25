import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialUncheckedCreateNestedOneWithoutProfileInputObjectSchema as SocialUncheckedCreateNestedOneWithoutProfileInputObjectSchema } from './SocialUncheckedCreateNestedOneWithoutProfileInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(100).optional(),
  userId: z.string(),
  bio: z.string().optional().nullable(),
  profileImg: z.string().max(255).optional().nullable(),
  coverImg: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  social: z.lazy(() => SocialUncheckedCreateNestedOneWithoutProfileInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateInput>;
export const ProfileUncheckedCreateInputObjectZodSchema = makeSchema();
