import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { TagOrderByWithRelationInputObjectSchema as TagOrderByWithRelationInputObjectSchema } from './objects/TagOrderByWithRelationInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagCountAggregateInputObjectSchema as TagCountAggregateInputObjectSchema } from './objects/TagCountAggregateInput.schema';
import { TagMinAggregateInputObjectSchema as TagMinAggregateInputObjectSchema } from './objects/TagMinAggregateInput.schema';
import { TagMaxAggregateInputObjectSchema as TagMaxAggregateInputObjectSchema } from './objects/TagMaxAggregateInput.schema';
import { TagAvgAggregateInputObjectSchema as TagAvgAggregateInputObjectSchema } from './objects/TagAvgAggregateInput.schema';
import { TagSumAggregateInputObjectSchema as TagSumAggregateInputObjectSchema } from './objects/TagSumAggregateInput.schema';

export const TagAggregateSchema: z.ZodType<Prisma.TagAggregateArgs> = z.object({ orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TagCountAggregateInputObjectSchema ]).optional(), _min: TagMinAggregateInputObjectSchema.optional(), _max: TagMaxAggregateInputObjectSchema.optional(), _avg: TagAvgAggregateInputObjectSchema.optional(), _sum: TagSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagAggregateArgs>;

export const TagAggregateZodSchema = z.object({ orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TagCountAggregateInputObjectSchema ]).optional(), _min: TagMinAggregateInputObjectSchema.optional(), _max: TagMaxAggregateInputObjectSchema.optional(), _avg: TagAvgAggregateInputObjectSchema.optional(), _sum: TagSumAggregateInputObjectSchema.optional() }).strict();