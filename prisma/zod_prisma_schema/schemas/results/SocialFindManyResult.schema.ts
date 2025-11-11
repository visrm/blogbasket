import * as z from 'zod';
export const SocialFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  profileId: z.number().int(),
  profile: z.unknown(),
  youtubeUrl: z.string(),
  instagramUrl: z.string(),
  telegramUrl: z.string(),
  linkedinUrl: z.string(),
  githubUrl: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});