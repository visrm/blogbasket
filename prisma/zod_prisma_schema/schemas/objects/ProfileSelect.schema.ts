import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { SocialArgsObjectSchema as SocialArgsObjectSchema } from './SocialArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  bio: z.boolean().optional(),
  profileImg: z.boolean().optional(),
  coverImg: z.boolean().optional(),
  social: z.union([z.boolean(), z.lazy(() => SocialArgsObjectSchema)]).optional()
}).strict();
export const ProfileSelectObjectSchema: z.ZodType<Prisma.ProfileSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProfileSelect>;
export const ProfileSelectObjectZodSchema = makeSchema();
