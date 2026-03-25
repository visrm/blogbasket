import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TagScalarWhereWithAggregatesInput> = tagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TagScalarWhereWithAggregatesInput>;
export const TagScalarWhereWithAggregatesInputObjectZodSchema = tagscalarwherewithaggregatesinputSchema;
