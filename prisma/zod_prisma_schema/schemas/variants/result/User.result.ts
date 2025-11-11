import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.number().int(),
    username: z.string(),
    displayName: z.string(),
    email: z.string(),
    password: z.string(),
    posts: z.array(z.unknown()),
    profile: z.unknown().nullable(),
    role: RoleSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
