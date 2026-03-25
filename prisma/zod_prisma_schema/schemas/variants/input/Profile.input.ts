import * as z from 'zod';
// prettier-ignore
export const ProfileInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    bio: z.string().optional().nullable(),
    profileImg: z.string().optional().nullable(),
    coverImg: z.string().optional().nullable(),
    social: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProfileInputType = z.infer<typeof ProfileInputSchema>;
