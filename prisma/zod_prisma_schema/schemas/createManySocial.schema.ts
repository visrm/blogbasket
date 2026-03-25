import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialCreateManyInputObjectSchema as SocialCreateManyInputObjectSchema } from './objects/SocialCreateManyInput.schema';

export const SocialCreateManySchema: z.ZodType<Prisma.SocialCreateManyArgs> = z.object({ data: z.union([ SocialCreateManyInputObjectSchema, z.array(SocialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SocialCreateManyArgs>;

export const SocialCreateManyZodSchema = z.object({ data: z.union([ SocialCreateManyInputObjectSchema, z.array(SocialCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();