import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostCreateNestedManyWithoutTagsInputObjectSchema as PostCreateNestedManyWithoutTagsInputObjectSchema } from './PostCreateNestedManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(100).optional(),
  name: z.string().max(50),
  createdAt: z.coerce.date().optional(),
  posts: z.lazy(() => PostCreateNestedManyWithoutTagsInputObjectSchema)
}).strict();
export const TagCreateInputObjectSchema: z.ZodType<Prisma.TagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateInput>;
export const TagCreateInputObjectZodSchema = makeSchema();
