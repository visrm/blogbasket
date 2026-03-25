import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './SocialWhereUniqueInput.schema';
import { SocialCreateWithoutProfileInputObjectSchema as SocialCreateWithoutProfileInputObjectSchema } from './SocialCreateWithoutProfileInput.schema';
import { SocialUncheckedCreateWithoutProfileInputObjectSchema as SocialUncheckedCreateWithoutProfileInputObjectSchema } from './SocialUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SocialWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SocialCreateWithoutProfileInputObjectSchema), z.lazy(() => SocialUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const SocialCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.SocialCreateOrConnectWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialCreateOrConnectWithoutProfileInput>;
export const SocialCreateOrConnectWithoutProfileInputObjectZodSchema = makeSchema();
