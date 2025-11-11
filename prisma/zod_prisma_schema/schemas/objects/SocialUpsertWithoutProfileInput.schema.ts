import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialUpdateWithoutProfileInputObjectSchema as SocialUpdateWithoutProfileInputObjectSchema } from './SocialUpdateWithoutProfileInput.schema';
import { SocialUncheckedUpdateWithoutProfileInputObjectSchema as SocialUncheckedUpdateWithoutProfileInputObjectSchema } from './SocialUncheckedUpdateWithoutProfileInput.schema';
import { SocialCreateWithoutProfileInputObjectSchema as SocialCreateWithoutProfileInputObjectSchema } from './SocialCreateWithoutProfileInput.schema';
import { SocialUncheckedCreateWithoutProfileInputObjectSchema as SocialUncheckedCreateWithoutProfileInputObjectSchema } from './SocialUncheckedCreateWithoutProfileInput.schema';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './SocialWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SocialUpdateWithoutProfileInputObjectSchema), z.lazy(() => SocialUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => SocialCreateWithoutProfileInputObjectSchema), z.lazy(() => SocialUncheckedCreateWithoutProfileInputObjectSchema)]),
  where: z.lazy(() => SocialWhereInputObjectSchema).optional()
}).strict();
export const SocialUpsertWithoutProfileInputObjectSchema: z.ZodType<Prisma.SocialUpsertWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialUpsertWithoutProfileInput>;
export const SocialUpsertWithoutProfileInputObjectZodSchema = makeSchema();
