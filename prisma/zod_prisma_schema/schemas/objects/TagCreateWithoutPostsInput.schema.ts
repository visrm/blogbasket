import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(50)
}).strict();
export const TagCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagCreateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateWithoutPostsInput>;
export const TagCreateWithoutPostsInputObjectZodSchema = makeSchema();
