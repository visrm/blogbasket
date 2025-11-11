import * as z from 'zod';
// prettier-ignore
export const ProfileModelSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    user: z.unknown(),
    bio: z.string().nullable(),
    profileImg: z.string().nullable(),
    coverImg: z.string().nullable(),
    social: z.unknown().nullable()
}).strict();

export type ProfilePureType = z.infer<typeof ProfileModelSchema>;
