import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialSelectObjectSchema as SocialSelectObjectSchema } from './objects/SocialSelect.schema';
import { SocialUpdateManyMutationInputObjectSchema as SocialUpdateManyMutationInputObjectSchema } from './objects/SocialUpdateManyMutationInput.schema';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './objects/SocialWhereInput.schema';

export const SocialUpdateManyAndReturnSchema: z.ZodType<Prisma.SocialUpdateManyAndReturnArgs> = z.object({ select: SocialSelectObjectSchema.optional(), data: SocialUpdateManyMutationInputObjectSchema, where: SocialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SocialUpdateManyAndReturnArgs>;

export const SocialUpdateManyAndReturnZodSchema = z.object({ select: SocialSelectObjectSchema.optional(), data: SocialUpdateManyMutationInputObjectSchema, where: SocialWhereInputObjectSchema.optional() }).strict();