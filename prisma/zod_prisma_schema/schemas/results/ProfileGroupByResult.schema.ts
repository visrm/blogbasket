import * as z from 'zod';
export const ProfileGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  userId: z.number().int(),
  bio: z.string(),
  profileImg: z.string(),
  coverImg: z.string(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    bio: z.number(),
    profileImg: z.number(),
    coverImg: z.number(),
    social: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    userId: z.number().int().nullable(),
    bio: z.string().nullable(),
    profileImg: z.string().nullable(),
    coverImg: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    userId: z.number().int().nullable(),
    bio: z.string().nullable(),
    profileImg: z.string().nullable(),
    coverImg: z.string().nullable()
  }).nullable().optional()
}));