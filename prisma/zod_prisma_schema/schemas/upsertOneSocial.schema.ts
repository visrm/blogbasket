import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialSelectObjectSchema as SocialSelectObjectSchema } from './objects/SocialSelect.schema';
import { SocialIncludeObjectSchema as SocialIncludeObjectSchema } from './objects/SocialInclude.schema';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './objects/SocialWhereUniqueInput.schema';
import { SocialCreateInputObjectSchema as SocialCreateInputObjectSchema } from './objects/SocialCreateInput.schema';
import { SocialUncheckedCreateInputObjectSchema as SocialUncheckedCreateInputObjectSchema } from './objects/SocialUncheckedCreateInput.schema';
import { SocialUpdateInputObjectSchema as SocialUpdateInputObjectSchema } from './objects/SocialUpdateInput.schema';
import { SocialUncheckedUpdateInputObjectSchema as SocialUncheckedUpdateInputObjectSchema } from './objects/SocialUncheckedUpdateInput.schema';

export const SocialUpsertOneSchema: z.ZodType<Prisma.SocialUpsertArgs> = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), where: SocialWhereUniqueInputObjectSchema, create: z.union([ SocialCreateInputObjectSchema, SocialUncheckedCreateInputObjectSchema ]), update: z.union([ SocialUpdateInputObjectSchema, SocialUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SocialUpsertArgs>;

export const SocialUpsertOneZodSchema = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), where: SocialWhereUniqueInputObjectSchema, create: z.union([ SocialCreateInputObjectSchema, SocialUncheckedCreateInputObjectSchema ]), update: z.union([ SocialUpdateInputObjectSchema, SocialUncheckedUpdateInputObjectSchema ]) }).strict();