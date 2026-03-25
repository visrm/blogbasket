import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SocialUncheckedUpdateOneWithoutProfileNestedInputObjectSchema as SocialUncheckedUpdateOneWithoutProfileNestedInputObjectSchema } from './SocialUncheckedUpdateOneWithoutProfileNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  profileImg: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverImg: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  social: z.lazy(() => SocialUncheckedUpdateOneWithoutProfileNestedInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedUpdateWithoutUserInput>;
export const ProfileUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
