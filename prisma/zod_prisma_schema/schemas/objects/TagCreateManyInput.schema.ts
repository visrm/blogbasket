import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(50)
}).strict();
export const TagCreateManyInputObjectSchema: z.ZodType<Prisma.TagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateManyInput>;
export const TagCreateManyInputObjectZodSchema = makeSchema();
