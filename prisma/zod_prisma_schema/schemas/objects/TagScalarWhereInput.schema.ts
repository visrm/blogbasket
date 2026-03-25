import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const tagscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereInputObjectSchema), z.lazy(() => TagScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereInputObjectSchema), z.lazy(() => TagScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TagScalarWhereInputObjectSchema: z.ZodType<Prisma.TagScalarWhereInput> = tagscalarwhereinputSchema as unknown as z.ZodType<Prisma.TagScalarWhereInput>;
export const TagScalarWhereInputObjectZodSchema = tagscalarwhereinputSchema;
