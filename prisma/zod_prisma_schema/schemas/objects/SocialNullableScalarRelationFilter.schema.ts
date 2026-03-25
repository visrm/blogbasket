import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './SocialWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SocialWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => SocialWhereInputObjectSchema).optional().nullable()
}).strict();
export const SocialNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.SocialNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SocialNullableScalarRelationFilter>;
export const SocialNullableScalarRelationFilterObjectZodSchema = makeSchema();
