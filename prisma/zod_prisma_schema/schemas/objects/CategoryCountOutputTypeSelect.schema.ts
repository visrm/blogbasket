import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { CategoryCountOutputTypeCountPostsArgsObjectSchema as CategoryCountOutputTypeCountPostsArgsObjectSchema } from './CategoryCountOutputTypeCountPostsArgs.schema'

const makeSchema = () => z.object({
  posts: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeCountPostsArgsObjectSchema)]).optional()
}).strict();
export const CategoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCountOutputTypeSelect>;
export const CategoryCountOutputTypeSelectObjectZodSchema = makeSchema();
