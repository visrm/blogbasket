import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { PostCreateManyCategoryInputObjectSchema as PostCreateManyCategoryInputObjectSchema } from './PostCreateManyCategoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PostCreateManyCategoryInputObjectSchema), z.lazy(() => PostCreateManyCategoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PostCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.PostCreateManyCategoryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyCategoryInputEnvelope>;
export const PostCreateManyCategoryInputEnvelopeObjectZodSchema = makeSchema();
