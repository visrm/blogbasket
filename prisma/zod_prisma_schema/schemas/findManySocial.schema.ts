import type { Prisma } from '../../generated/prisma/client';
import * as z from 'zod';
import { SocialIncludeObjectSchema as SocialIncludeObjectSchema } from './objects/SocialInclude.schema';
import { SocialOrderByWithRelationInputObjectSchema as SocialOrderByWithRelationInputObjectSchema } from './objects/SocialOrderByWithRelationInput.schema';
import { SocialWhereInputObjectSchema as SocialWhereInputObjectSchema } from './objects/SocialWhereInput.schema';
import { SocialWhereUniqueInputObjectSchema as SocialWhereUniqueInputObjectSchema } from './objects/SocialWhereUniqueInput.schema';
import { SocialScalarFieldEnumSchema } from './enums/SocialScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SocialFindManySelectSchema: z.ZodType<Prisma.SocialSelect> = z.object({
    id: z.boolean().optional(),
    profileId: z.boolean().optional(),
    profile: z.boolean().optional(),
    youtubeUrl: z.boolean().optional(),
    instagramUrl: z.boolean().optional(),
    telegramUrl: z.boolean().optional(),
    linkedinUrl: z.boolean().optional(),
    githubUrl: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SocialSelect>;

export const SocialFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    profileId: z.boolean().optional(),
    profile: z.boolean().optional(),
    youtubeUrl: z.boolean().optional(),
    instagramUrl: z.boolean().optional(),
    telegramUrl: z.boolean().optional(),
    linkedinUrl: z.boolean().optional(),
    githubUrl: z.boolean().optional()
  }).strict();

export const SocialFindManySchema: z.ZodType<Prisma.SocialFindManyArgs> = z.object({ select: SocialFindManySelectSchema.optional(), include: z.lazy(() => SocialIncludeObjectSchema.optional()), orderBy: z.union([SocialOrderByWithRelationInputObjectSchema, SocialOrderByWithRelationInputObjectSchema.array()]).optional(), where: SocialWhereInputObjectSchema.optional(), cursor: SocialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SocialScalarFieldEnumSchema, SocialScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SocialFindManyArgs>;

export const SocialFindManyZodSchema = z.object({ select: SocialFindManySelectSchema.optional(), include: z.lazy(() => SocialIncludeObjectSchema.optional()), orderBy: z.union([SocialOrderByWithRelationInputObjectSchema, SocialOrderByWithRelationInputObjectSchema.array()]).optional(), where: SocialWhereInputObjectSchema.optional(), cursor: SocialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SocialScalarFieldEnumSchema, SocialScalarFieldEnumSchema.array()]).optional() }).strict();