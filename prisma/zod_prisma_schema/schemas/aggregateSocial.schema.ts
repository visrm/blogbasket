import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialOrderByWithRelationInputObjectSchema as SocialOrderByWithRelationInputObjectSchema } from './objects/SocialOrderByWithRelationInput.schema';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './objects/SocialWhereInput.schema';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './objects/SocialWhereUniqueInput.schema';
import { SocialCountAggregateInputObjectSchema as SocialCountAggregateInputObjectSchema } from './objects/SocialCountAggregateInput.schema';
import { SocialMinAggregateInputObjectSchema as SocialMinAggregateInputObjectSchema } from './objects/SocialMinAggregateInput.schema';
import { SocialMaxAggregateInputObjectSchema as SocialMaxAggregateInputObjectSchema } from './objects/SocialMaxAggregateInput.schema';
import { SocialAvgAggregateInputObjectSchema as SocialAvgAggregateInputObjectSchema } from './objects/SocialAvgAggregateInput.schema';
import { SocialSumAggregateInputObjectSchema as SocialSumAggregateInputObjectSchema } from './objects/SocialSumAggregateInput.schema';

export const SocialAggregateSchema: z.ZodType<Prisma.SocialAggregateArgs> = z.object({ orderBy: z.union([SocialOrderByWithRelationInputObjectSchema, SocialOrderByWithRelationInputObjectSchema.array()]).optional(), where: SocialWhereInputObjectSchema.optional(), cursor: SocialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SocialCountAggregateInputObjectSchema ]).optional(), _min: SocialMinAggregateInputObjectSchema.optional(), _max: SocialMaxAggregateInputObjectSchema.optional(), _avg: SocialAvgAggregateInputObjectSchema.optional(), _sum: SocialSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SocialAggregateArgs>;

export const SocialAggregateZodSchema = z.object({ orderBy: z.union([SocialOrderByWithRelationInputObjectSchema, SocialOrderByWithRelationInputObjectSchema.array()]).optional(), where: SocialWhereInputObjectSchema.optional(), cursor: SocialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SocialCountAggregateInputObjectSchema ]).optional(), _min: SocialMinAggregateInputObjectSchema.optional(), _max: SocialMaxAggregateInputObjectSchema.optional(), _avg: SocialAvgAggregateInputObjectSchema.optional(), _sum: SocialSumAggregateInputObjectSchema.optional() }).strict();