import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialUpdateManyMutationInputObjectSchema as SocialUpdateManyMutationInputObjectSchema } from './objects/SocialUpdateManyMutationInput.schema';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './objects/SocialWhereInput.schema';

export const SocialUpdateManySchema: z.ZodType<Prisma.SocialUpdateManyArgs> = z.object({ data: SocialUpdateManyMutationInputObjectSchema, where: SocialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SocialUpdateManyArgs>;

export const SocialUpdateManyZodSchema = z.object({ data: SocialUpdateManyMutationInputObjectSchema, where: SocialWhereInputObjectSchema.optional() }).strict();