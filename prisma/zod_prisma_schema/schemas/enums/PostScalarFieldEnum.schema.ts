import * as z from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id', 'title', 'content', 'mediaUrl', 'published', 'slug', 'authorId', 'categoryId', 'createdAt', 'updatedAt'])

export type PostScalarFieldEnum = z.infer<typeof PostScalarFieldEnumSchema>;