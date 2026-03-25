import * as z from 'zod';

export const SocialScalarFieldEnumSchema = z.enum(['id', 'profileId', 'youtubeUrl', 'instagramUrl', 'telegramUrl', 'linkedinUrl', 'githubUrl'])

export type SocialScalarFieldEnum = z.infer<typeof SocialScalarFieldEnumSchema>;