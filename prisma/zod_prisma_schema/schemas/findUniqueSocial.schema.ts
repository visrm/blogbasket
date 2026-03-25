import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialSelectObjectSchema as SocialSelectObjectSchema } from './objects/SocialSelect.schema';
import { SocialIncludeObjectSchema as SocialIncludeObjectSchema } from './objects/SocialInclude.schema';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './objects/SocialWhereUniqueInput.schema';

export const SocialFindUniqueSchema: z.ZodType<Prisma.SocialFindUniqueArgs> = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), where: SocialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SocialFindUniqueArgs>;

export const SocialFindUniqueZodSchema = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), where: SocialWhereUniqueInputObjectSchema }).strict();