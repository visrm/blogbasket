import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { SocialUncheckedUpdateOneWithoutProfileNestedInputObjectSchema as SocialUncheckedUpdateOneWithoutProfileNestedInputObjectSchema } from './SocialUncheckedUpdateOneWithoutProfileNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  profileImg: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverImg: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  social: z.lazy(() => SocialUncheckedUpdateOneWithoutProfileNestedInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedUpdateInput>;
export const ProfileUncheckedUpdateInputObjectZodSchema = makeSchema();
