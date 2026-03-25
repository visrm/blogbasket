import * as z from 'zod';
// prettier-ignore
export const ProfileResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    bio: z.string().nullable(),
    profileImg: z.string().nullable(),
    coverImg: z.string().nullable(),
    social: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProfileResultType = z.infer<typeof ProfileResultSchema>;
