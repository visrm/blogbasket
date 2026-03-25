import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TagUncheckedCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateWithoutPostsInput>;
export const TagUncheckedCreateWithoutPostsInputObjectZodSchema = makeSchema();
