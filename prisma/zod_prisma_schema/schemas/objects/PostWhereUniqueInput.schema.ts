import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const PostWhereUniqueInputObjectSchema: z.ZodType<Prisma.PostWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PostWhereUniqueInput>;
export const PostWhereUniqueInputObjectZodSchema = makeSchema();
