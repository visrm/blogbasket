import * as z from 'zod';
export const SocialGroupByResultSchema = z.array(z.object({
  id: z.string(),
  profileId: z.string(),
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
  _min: z.object({
    id: z.string().nullable(),
    profileId: z.string().nullable(),
    youtubeUrl: z.string().nullable(),
    instagramUrl: z.string().nullable(),
    telegramUrl: z.string().nullable(),
    linkedinUrl: z.string().nullable(),
    githubUrl: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    profileId: z.string().nullable(),
    youtubeUrl: z.string().nullable(),
    instagramUrl: z.string().nullable(),
    telegramUrl: z.string().nullable(),
    linkedinUrl: z.string().nullable(),
    githubUrl: z.string().nullable()
  }).nullable().optional()
}));