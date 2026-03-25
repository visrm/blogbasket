import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { SocialArgsObjectSchema as SocialArgsObjectSchema } from './SocialArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  social: z.union([z.boolean(), z.lazy(() => SocialArgsObjectSchema)]).optional()
}).strict();
export const ProfileIncludeObjectSchema: z.ZodType<Prisma.ProfileInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProfileInclude>;
export const ProfileIncludeObjectZodSchema = makeSchema();
