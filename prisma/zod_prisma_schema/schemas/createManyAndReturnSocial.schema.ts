import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialSelectObjectSchema as SocialSelectObjectSchema } from './objects/SocialSelect.schema';
import { SocialCreateManyInputObjectSchema as SocialCreateManyInputObjectSchema } from './objects/SocialCreateManyInput.schema';

export const SocialCreateManyAndReturnSchema: z.ZodType<Prisma.SocialCreateManyAndReturnArgs> = z.object({ select: SocialSelectObjectSchema.optional(), data: z.union([ SocialCreateManyInputObjectSchema, z.array(SocialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SocialCreateManyAndReturnArgs>;

export const SocialCreateManyAndReturnZodSchema = z.object({ select: SocialSelectObjectSchema.optional(), data: z.union([ SocialCreateManyInputObjectSchema, z.array(SocialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();