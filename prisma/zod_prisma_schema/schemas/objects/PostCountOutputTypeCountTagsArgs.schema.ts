import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereInputObjectSchema).optional()
}).strict();
export const PostCountOutputTypeCountTagsArgsObjectSchema = makeSchema();
export const PostCountOutputTypeCountTagsArgsObjectZodSchema = makeSchema();
