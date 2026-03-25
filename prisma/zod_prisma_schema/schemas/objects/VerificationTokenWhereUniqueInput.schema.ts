import * as z from 'zod';
import type { Prisma } from '../../../generated/prisma/client';
import { VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema as VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema } from './VerificationTokenIdentifierTokenCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema).optional()
}).strict();
export const VerificationTokenWhereUniqueInputObjectSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationTokenWhereUniqueInput>;
export const VerificationTokenWhereUniqueInputObjectZodSchema = makeSchema();
