import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostCountOutputTypeCountTagsArgsObjectSchema as PostCountOutputTypeCountTagsArgsObjectSchema } from './PostCountOutputTypeCountTagsArgs.schema'

const makeSchema = () => z.object({
  tags: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountTagsArgsObjectSchema)]).optional()
}).strict();
export const PostCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PostCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PostCountOutputTypeSelect>;
export const PostCountOutputTypeSelectObjectZodSchema = makeSchema();
