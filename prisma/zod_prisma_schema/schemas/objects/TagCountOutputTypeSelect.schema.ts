import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagCountOutputTypeCountPostsArgsObjectSchema as TagCountOutputTypeCountPostsArgsObjectSchema } from './TagCountOutputTypeCountPostsArgs.schema'

const makeSchema = () => z.object({
  posts: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeCountPostsArgsObjectSchema)]).optional()
}).strict();
export const TagCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagCountOutputTypeSelect>;
export const TagCountOutputTypeSelectObjectZodSchema = makeSchema();
