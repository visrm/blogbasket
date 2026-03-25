import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialSelectObjectSchema as SocialSelectObjectSchema } from './objects/SocialSelect.schema';
import { SocialIncludeObjectSchema as SocialIncludeObjectSchema } from './objects/SocialInclude.schema';
import { SocialUpdateInputObjectSchema as SocialUpdateInputObjectSchema } from './objects/SocialUpdateInput.schema';
import { SocialUncheckedUpdateInputObjectSchema as SocialUncheckedUpdateInputObjectSchema } from './objects/SocialUncheckedUpdateInput.schema';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './objects/SocialWhereUniqueInput.schema';

export const SocialUpdateOneSchema: z.ZodType<Prisma.SocialUpdateArgs> = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), data: z.union([SocialUpdateInputObjectSchema, SocialUncheckedUpdateInputObjectSchema]), where: SocialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SocialUpdateArgs>;

export const SocialUpdateOneZodSchema = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), data: z.union([SocialUpdateInputObjectSchema, SocialUncheckedUpdateInputObjectSchema]), where: SocialWhereUniqueInputObjectSchema }).strict();