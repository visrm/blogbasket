import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema'

const makeSchema = () => z.object({
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional()
}).strict();
export const SocialIncludeObjectSchema: z.ZodType<Prisma.SocialInclude> = makeSchema() as unknown as z.ZodType<Prisma.SocialInclude>;
export const SocialIncludeObjectZodSchema = makeSchema();
