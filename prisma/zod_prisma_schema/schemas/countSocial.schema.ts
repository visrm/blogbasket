import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialOrderByWithRelationInputObjectSchema as SocialOrderByWithRelationInputObjectSchema } from './objects/SocialOrderByWithRelationInput.schema';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './objects/SocialWhereInput.schema';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './objects/SocialWhereUniqueInput.schema';
import { SocialCountAggregateInputObjectSchema as SocialCountAggregateInputObjectSchema } from './objects/SocialCountAggregateInput.schema';

export const SocialCountSchema: z.ZodType<Prisma.SocialCountArgs> = z.object({ orderBy: z.union([SocialOrderByWithRelationInputObjectSchema, SocialOrderByWithRelationInputObjectSchema.array()]).optional(), where: SocialWhereInputObjectSchema.optional(), cursor: SocialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SocialCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SocialCountArgs>;

export const SocialCountZodSchema = z.object({ orderBy: z.union([SocialOrderByWithRelationInputObjectSchema, SocialOrderByWithRelationInputObjectSchema.array()]).optional(), where: SocialWhereInputObjectSchema.optional(), cursor: SocialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SocialCountAggregateInputObjectSchema ]).optional() }).strict();