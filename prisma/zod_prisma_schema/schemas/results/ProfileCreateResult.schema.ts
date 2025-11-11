import * as z from 'zod';
export const ProfileCreateResultSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  user: z.unknown(),
  bio: z.string().optional(),
  profileImg: z.string().optional(),
  coverImg: z.string().optional(),
  social: z.unknown().optional()
});