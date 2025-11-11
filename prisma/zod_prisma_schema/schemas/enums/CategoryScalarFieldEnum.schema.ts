import * as z from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id', 'name', 'slug', 'createdAt', 'updatedAt'])

export type CategoryScalarFieldEnum = z.infer<typeof CategoryScalarFieldEnumSchema>;