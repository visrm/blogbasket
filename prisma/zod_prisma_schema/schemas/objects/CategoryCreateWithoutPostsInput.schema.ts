import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(50),
  slug: z.string().max(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CategoryCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryCreateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateWithoutPostsInput>;
export const CategoryCreateWithoutPostsInputObjectZodSchema = makeSchema();
