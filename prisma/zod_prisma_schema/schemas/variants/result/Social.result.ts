import * as z from 'zod';
// prettier-ignore
export const SocialResultSchema = z.object({
    id: z.string(),
    profileId: z.string(),
    profile: z.unknown(),
    youtubeUrl: z.string(),
    instagramUrl: z.string(),
    telegramUrl: z.string(),
    linkedinUrl: z.string(),
    githubUrl: z.string()
}).strict();

export type SocialResultType = z.infer<typeof SocialResultSchema>;
