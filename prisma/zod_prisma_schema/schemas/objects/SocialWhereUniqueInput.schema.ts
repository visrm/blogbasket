import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(100).optional(),
  profileId: z.string().optional()
}).strict();
export const SocialWhereUniqueInputObjectSchema: z.ZodType<Prisma.SocialWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialWhereUniqueInput>;
export const SocialWhereUniqueInputObjectZodSchema = makeSchema();
