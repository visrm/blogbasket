import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { SocialCreateWithoutProfileInputObjectSchema as SocialCreateWithoutProfileInputObjectSchema } from './SocialCreateWithoutProfileInput.schema';
import { SocialUncheckedCreateWithoutProfileInputObjectSchema as SocialUncheckedCreateWithoutProfileInputObjectSchema } from './SocialUncheckedCreateWithoutProfileInput.schema';
import { SocialCreateOrConnectWithoutProfileInputObjectSchema as SocialCreateOrConnectWithoutProfileInputObjectSchema } from './SocialCreateOrConnectWithoutProfileInput.schema';
import { SocialUpsertWithoutProfileInputObjectSchema as SocialUpsertWithoutProfileInputObjectSchema } from './SocialUpsertWithoutProfileInput.schema';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './SocialWhereInput.schema';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './SocialWhereUniqueInput.schema';
import { SocialUpdateToOneWithWhereWithoutProfileInputObjectSchema as SocialUpdateToOneWithWhereWithoutProfileInputObjectSchema } from './SocialUpdateToOneWithWhereWithoutProfileInput.schema';
import { SocialUpdateWithoutProfileInputObjectSchema as SocialUpdateWithoutProfileInputObjectSchema } from './SocialUpdateWithoutProfileInput.schema';
import { SocialUncheckedUpdateWithoutProfileInputObjectSchema as SocialUncheckedUpdateWithoutProfileInputObjectSchema } from './SocialUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SocialCreateWithoutProfileInputObjectSchema), z.lazy(() => SocialUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SocialCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => SocialUpsertWithoutProfileInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => SocialWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => SocialWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => SocialWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SocialUpdateToOneWithWhereWithoutProfileInputObjectSchema), z.lazy(() => SocialUpdateWithoutProfileInputObjectSchema), z.lazy(() => SocialUncheckedUpdateWithoutProfileInputObjectSchema)]).optional()
}).strict();
export const SocialUncheckedUpdateOneWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.SocialUncheckedUpdateOneWithoutProfileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialUncheckedUpdateOneWithoutProfileNestedInput>;
export const SocialUncheckedUpdateOneWithoutProfileNestedInputObjectZodSchema = makeSchema();
