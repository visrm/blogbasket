import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialCreateWithoutProfileInputObjectSchema as SocialCreateWithoutProfileInputObjectSchema } from './SocialCreateWithoutProfileInput.schema';
import { SocialUncheckedCreateWithoutProfileInputObjectSchema as SocialUncheckedCreateWithoutProfileInputObjectSchema } from './SocialUncheckedCreateWithoutProfileInput.schema';
import { SocialCreateOrConnectWithoutProfileInputObjectSchema as SocialCreateOrConnectWithoutProfileInputObjectSchema } from './SocialCreateOrConnectWithoutProfileInput.schema';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './SocialWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SocialCreateWithoutProfileInputObjectSchema), z.lazy(() => SocialUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SocialCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => SocialWhereUniqueInputObjectSchema).optional()
}).strict();
export const SocialCreateNestedOneWithoutProfileInputObjectSchema: z.ZodType<Prisma.SocialCreateNestedOneWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialCreateNestedOneWithoutProfileInput>;
export const SocialCreateNestedOneWithoutProfileInputObjectZodSchema = makeSchema();
