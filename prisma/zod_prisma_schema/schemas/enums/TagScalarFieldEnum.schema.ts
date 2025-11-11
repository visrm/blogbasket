import * as z from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id', 'name'])

export type TagScalarFieldEnum = z.infer<typeof TagScalarFieldEnumSchema>;