import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  youtubeUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  instagramUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  telegramUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  linkedinUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  githubUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SocialUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.SocialUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialUpdateManyMutationInput>;
export const SocialUpdateManyMutationInputObjectZodSchema = makeSchema();
