import * as z from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum(['id', 'userId', 'bio', 'profileImg', 'coverImg', 'createdAt', 'updatedAt'])

export type ProfileScalarFieldEnum = z.infer<typeof ProfileScalarFieldEnumSchema>;