import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { UserCountOutputTypeCountPostsArgsObjectSchema as UserCountOutputTypeCountPostsArgsObjectSchema } from './UserCountOutputTypeCountPostsArgs.schema'

const makeSchema = () => z.object({
  posts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPostsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
