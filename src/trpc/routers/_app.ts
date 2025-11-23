import { z } from 'zod';
import { router } from '@/trpc/init';
import { postRouter } from './post.router';
import { categoryRouter } from './category.router';
import { tagRouter } from './tag.router';
import { profileRouter } from './profile.router';

export const appRouter = router({
  profile: profileRouter,
  post: postRouter,
  category: categoryRouter,
  tag: tagRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;