import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'username', 'displayName', 'email', 'password', 'role', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;