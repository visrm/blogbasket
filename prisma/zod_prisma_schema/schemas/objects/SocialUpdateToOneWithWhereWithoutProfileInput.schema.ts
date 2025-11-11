import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './SocialWhereInput.schema';
import { SocialUpdateWithoutProfileInputObjectSchema as SocialUpdateWithoutProfileInputObjectSchema } from './SocialUpdateWithoutProfileInput.schema';
import { SocialUncheckedUpdateWithoutProfileInputObjectSchema as SocialUncheckedUpdateWithoutProfileInputObjectSchema } from './SocialUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SocialWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SocialUpdateWithoutProfileInputObjectSchema), z.lazy(() => SocialUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
export const SocialUpdateToOneWithWhereWithoutProfileInputObjectSchema: z.ZodType<Prisma.SocialUpdateToOneWithWhereWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialUpdateToOneWithWhereWithoutProfileInput>;
export const SocialUpdateToOneWithWhereWithoutProfileInputObjectZodSchema = makeSchema();
