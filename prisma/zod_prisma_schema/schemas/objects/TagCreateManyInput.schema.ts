import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(100).optional(),
  name: z.string().max(50),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TagCreateManyInputObjectSchema: z.ZodType<Prisma.TagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateManyInput>;
export const TagCreateManyInputObjectZodSchema = makeSchema();
