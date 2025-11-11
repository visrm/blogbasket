import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  mediaUrl: z.string().optional().nullable(),
  published: z.boolean().optional(),
  slug: z.string(),
  authorId: z.number().int(),
  categoryId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const PostUncheckedCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateWithoutTagsInput>;
export const PostUncheckedCreateWithoutTagsInputObjectZodSchema = makeSchema();
