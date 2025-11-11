import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { SocialOrderByWithRelationInputObjectSchema as SocialOrderByWithRelationInputObjectSchema } from './SocialOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  bio: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  profileImg: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  coverImg: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  social: z.lazy(() => SocialOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProfileOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProfileOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileOrderByWithRelationInput>;
export const ProfileOrderByWithRelationInputObjectZodSchema = makeSchema();
