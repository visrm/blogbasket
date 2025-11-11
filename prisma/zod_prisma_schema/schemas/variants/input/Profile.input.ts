import * as z from 'zod';
// prettier-ignore
export const ProfileInputSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    user: z.unknown(),
    bio: z.string().optional().nullable(),
    profileImg: z.string().optional().nullable(),
    coverImg: z.string().optional().nullable(),
    social: z.unknown().optional().nullable()
}).strict();

export type ProfileInputType = z.infer<typeof ProfileInputSchema>;
