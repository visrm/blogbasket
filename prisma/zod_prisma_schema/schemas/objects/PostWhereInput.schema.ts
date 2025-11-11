import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TagListRelationFilterObjectSchema as TagListRelationFilterObjectSchema } from './TagListRelationFilter.schema';
import { CategoryNullableScalarRelationFilterObjectSchema as CategoryNullableScalarRelationFilterObjectSchema } from './CategoryNullableScalarRelationFilter.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const postwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PostWhereInputObjectSchema), z.lazy(() => PostWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PostWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PostWhereInputObjectSchema), z.lazy(() => PostWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(200)]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mediaUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  authorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  categoryId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  author: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  tags: z.lazy(() => TagListRelationFilterObjectSchema).optional(),
  category: z.union([z.lazy(() => CategoryNullableScalarRelationFilterObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema)]).optional()
}).strict();
export const PostWhereInputObjectSchema: z.ZodType<Prisma.PostWhereInput> = postwhereinputSchema as unknown as z.ZodType<Prisma.PostWhereInput>;
export const PostWhereInputObjectZodSchema = postwhereinputSchema;
