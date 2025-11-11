import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  username: z.string(),
  displayName: z.string(),
  email: z.string(),
  password: z.string(),
  posts: z.array(z.unknown()),
  profile: z.unknown().optional(),
  role: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));