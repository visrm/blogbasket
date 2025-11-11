import * as z from 'zod';
export const SocialGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  profileId: z.number().int(),
  youtubeUrl: z.string(),
  instagramUrl: z.string(),
  telegramUrl: z.string(),
  linkedinUrl: z.string(),
  githubUrl: z.string(),
  _count: z.object({
    id: z.number(),
    profileId: z.number(),
    profile: z.number(),
    youtubeUrl: z.number(),
    instagramUrl: z.number(),
    telegramUrl: z.number(),
    linkedinUrl: z.number(),
    githubUrl: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    profileId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    profileId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    profileId: z.number().int().nullable(),
    youtubeUrl: z.string().nullable(),
    instagramUrl: z.string().nullable(),
    telegramUrl: z.string().nullable(),
    linkedinUrl: z.string().nullable(),
    githubUrl: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    profileId: z.number().int().nullable(),
    youtubeUrl: z.string().nullable(),
    instagramUrl: z.string().nullable(),
    telegramUrl: z.string().nullable(),
    linkedinUrl: z.string().nullable(),
    githubUrl: z.string().nullable()
  }).nullable().optional()
}));