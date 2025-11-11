import * as z from 'zod';
export const PostAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    content: z.number(),
    mediaUrl: z.number(),
    published: z.number(),
    slug: z.number(),
    authorId: z.number(),
    author: z.number(),
    tags: z.number(),
    categoryId: z.number(),
    category: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    authorId: z.number().nullable(),
    categoryId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    authorId: z.number().nullable(),
    categoryId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable(),
    mediaUrl: z.string().nullable(),
    slug: z.string().nullable(),
    authorId: z.number().int().nullable(),
    categoryId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable(),
    mediaUrl: z.string().nullable(),
    slug: z.string().nullable(),
    authorId: z.number().int().nullable(),
    categoryId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});