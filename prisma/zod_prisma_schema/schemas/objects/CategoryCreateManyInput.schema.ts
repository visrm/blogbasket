import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(50),
  slug: z.string().max(100),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CategoryCreateManyInputObjectSchema: z.ZodType<Prisma.CategoryCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateManyInput>;
export const CategoryCreateManyInputObjectZodSchema = makeSchema();
