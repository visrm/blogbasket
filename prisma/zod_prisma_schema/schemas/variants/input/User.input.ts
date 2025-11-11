import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    username: z.string(),
    displayName: z.string(),
    email: z.string(),
    password: z.string(),
    posts: z.array(z.unknown()),
    profile: z.unknown().optional().nullable(),
    role: RoleSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
