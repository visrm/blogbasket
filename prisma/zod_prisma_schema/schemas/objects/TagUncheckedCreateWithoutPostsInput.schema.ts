import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();
export const TagUncheckedCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateWithoutPostsInput>;
export const TagUncheckedCreateWithoutPostsInputObjectZodSchema = makeSchema();
