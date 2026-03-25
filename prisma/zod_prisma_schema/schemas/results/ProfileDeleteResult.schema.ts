import * as z from 'zod';
export const ProfileDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  bio: z.string().optional(),
  profileImg: z.string().optional(),
  coverImg: z.string().optional(),
  social: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));