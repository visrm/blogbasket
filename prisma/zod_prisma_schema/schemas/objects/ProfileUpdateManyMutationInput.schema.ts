import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  profileImg: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  coverImg: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const ProfileUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ProfileUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateManyMutationInput>;
export const ProfileUpdateManyMutationInputObjectZodSchema = makeSchema();
