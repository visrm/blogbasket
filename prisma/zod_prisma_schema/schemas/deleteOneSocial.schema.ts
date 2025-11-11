import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialSelectObjectSchema as SocialSelectObjectSchema } from './objects/SocialSelect.schema';
import { SocialIncludeObjectSchema as SocialIncludeObjectSchema } from './objects/SocialInclude.schema';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './objects/SocialWhereUniqueInput.schema';

export const SocialDeleteOneSchema: z.ZodType<Prisma.SocialDeleteArgs> = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), where: SocialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SocialDeleteArgs>;

export const SocialDeleteOneZodSchema = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), where: SocialWhereUniqueInputObjectSchema }).strict();