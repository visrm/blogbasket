import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialSelectObjectSchema as SocialSelectObjectSchema } from './objects/SocialSelect.schema';
import { SocialIncludeObjectSchema as SocialIncludeObjectSchema } from './objects/SocialInclude.schema';
import { SocialCreateInputObjectSchema as SocialCreateInputObjectSchema } from './objects/SocialCreateInput.schema';
import { SocialUncheckedCreateInputObjectSchema as SocialUncheckedCreateInputObjectSchema } from './objects/SocialUncheckedCreateInput.schema';

export const SocialCreateOneSchema: z.ZodType<Prisma.SocialCreateArgs> = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), data: z.union([SocialCreateInputObjectSchema, SocialUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SocialCreateArgs>;

export const SocialCreateOneZodSchema = z.object({ select: SocialSelectObjectSchema.optional(), include: SocialIncludeObjectSchema.optional(), data: z.union([SocialCreateInputObjectSchema, SocialUncheckedCreateInputObjectSchema]) }).strict();