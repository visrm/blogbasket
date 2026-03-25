import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(100).optional()
}).strict();
export const PostWhereUniqueInputObjectSchema: z.ZodType<Prisma.PostWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PostWhereUniqueInput>;
export const PostWhereUniqueInputObjectZodSchema = makeSchema();
