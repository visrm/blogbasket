import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    username: z.string(),
    displayName: z.string(),
    email: z.string(),
    password: z.string(),
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown()),
    posts: z.array(z.unknown()),
    profile: z.unknown().nullable(),
    role: RoleSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
