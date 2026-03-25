import * as z from 'zod';
export const SocialDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  profileId: z.string(),
  profile: z.unknown(),
  youtubeUrl: z.string(),
  instagramUrl: z.string(),
  telegramUrl: z.string(),
  linkedinUrl: z.string(),
  githubUrl: z.string()
}));