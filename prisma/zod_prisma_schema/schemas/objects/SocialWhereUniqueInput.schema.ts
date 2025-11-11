import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  profileId: z.number().int().optional()
}).strict();
export const SocialWhereUniqueInputObjectSchema: z.ZodType<Prisma.SocialWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SocialWhereUniqueInput>;
export const SocialWhereUniqueInputObjectZodSchema = makeSchema();
