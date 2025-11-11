import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const CategoryWhereUniqueInputObjectSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryWhereUniqueInput>;
export const CategoryWhereUniqueInputObjectZodSchema = makeSchema();
