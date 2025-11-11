import * as z from 'zod';
// prettier-ignore
export const SocialInputSchema = z.object({
    id: z.number().int(),
    profileId: z.number().int(),
    profile: z.unknown(),
    youtubeUrl: z.string(),
    instagramUrl: z.string(),
    telegramUrl: z.string(),
    linkedinUrl: z.string(),
    githubUrl: z.string()
}).strict();

export type SocialInputType = z.infer<typeof SocialInputSchema>;
