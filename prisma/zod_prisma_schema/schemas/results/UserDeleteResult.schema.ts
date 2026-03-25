import * as z from 'zod';
export const UserDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  username: z.string(),
  displayName: z.string(),
  email: z.string(),
  password: z.string(),
  accounts: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  posts: z.array(z.unknown()),
  profile: z.unknown().optional(),
  role: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));