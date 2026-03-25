import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialSelectObjectSchema as SocialSelectObjectSchema } from './SocialSelect.schema';
import { SocialIncludeObjectSchema as SocialIncludeObjectSchema } from './SocialInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SocialSelectObjectSchema).optional(),
  include: z.lazy(() => SocialIncludeObjectSchema).optional()
}).strict();
export const SocialArgsObjectSchema = makeSchema();
export const SocialArgsObjectZodSchema = makeSchema();
