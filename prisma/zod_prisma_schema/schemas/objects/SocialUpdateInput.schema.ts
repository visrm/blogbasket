import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutSocialNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutSocialNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutSocialNestedInput.schema'

const makeSchema = () => z.object({
  youtubeUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  instagramUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  telegramUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  linkedinUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  githubUrl: z.union([z.string().max(200), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutSocialNestedInputObjectSchema).optional()
}).strict();
export const SocialUpdateInputObjectSchema: z.ZodType<Prisma.SocialUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialUpdateInput>;
export const SocialUpdateInputObjectZodSchema = makeSchema();
