import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CategoryUncheckedCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateWithoutPostsInput>;
export const CategoryUncheckedCreateWithoutPostsInputObjectZodSchema = makeSchema();
