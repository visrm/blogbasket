import { initTRPC } from '@trpc/server';
import { cache } from 'react';
import superjson from "superjson";


export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return { userId: undefined };
});

const trpc = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
});

// Base router and procedure helpers
export const router = trpc.router;
export const createCallerFactory = trpc.createCallerFactory;
export const procedure = trpc.procedure;