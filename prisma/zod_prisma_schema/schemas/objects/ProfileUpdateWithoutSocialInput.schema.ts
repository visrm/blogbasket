import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutProfileNestedInputObjectSchema as UserUpdateOneRequiredWithoutProfileNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProfileNestedInput.schema'

const makeSchema = () => z.object({
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  profileImg: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverImg: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProfileNestedInputObjectSchema).optional()
}).strict();
export const ProfileUpdateWithoutSocialInputObjectSchema: z.ZodType<Prisma.ProfileUpdateWithoutSocialInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateWithoutSocialInput>;
export const ProfileUpdateWithoutSocialInputObjectZodSchema = makeSchema();
