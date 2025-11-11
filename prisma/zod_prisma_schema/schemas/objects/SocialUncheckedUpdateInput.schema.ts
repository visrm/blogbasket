import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  profileId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  youtubeUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  instagramUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  telegramUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  linkedinUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  githubUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SocialUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SocialUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialUncheckedUpdateInput>;
export const SocialUncheckedUpdateInputObjectZodSchema = makeSchema();
