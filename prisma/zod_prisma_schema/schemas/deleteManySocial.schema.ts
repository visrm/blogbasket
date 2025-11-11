import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './objects/SocialWhereInput.schema';

export const SocialDeleteManySchema: z.ZodType<Prisma.SocialDeleteManyArgs> = z.object({ where: SocialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SocialDeleteManyArgs>;

export const SocialDeleteManyZodSchema = z.object({ where: SocialWhereInputObjectSchema.optional() }).strict();