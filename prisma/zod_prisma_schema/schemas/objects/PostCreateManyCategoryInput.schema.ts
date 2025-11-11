import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string().max(200),
  content: z.string(),
  mediaUrl: z.string().max(255).optional().nullable(),
  published: z.boolean().optional(),
  slug: z.string().max(255),
  authorId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const PostCreateManyCategoryInputObjectSchema: z.ZodType<Prisma.PostCreateManyCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyCategoryInput>;
export const PostCreateManyCategoryInputObjectZodSchema = makeSchema();
