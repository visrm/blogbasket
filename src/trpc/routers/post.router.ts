import { procedure, router } from "@/trpc/init";
import { z } from "zod";
import { PrismaClient } from "@base/prisma/generated/prisma/client";
import { PostCreateInputObjectZodSchema } from "@base/prisma/zod_prisma_schema/schemas";

const prisma = new PrismaClient();

export const postRouter = router({
  //  To create blog-post
  create: procedure
    .input(
      PostCreateInputObjectZodSchema.omit({
        createdAt: true,
        updatedAt: true,
      })
    )
    .mutation(async ({ input }) => {
      try {
        const newPost = await prisma.post.create({ data: input });
        return {
          message: "Post created successfully",
          success: true,
          post: newPost,
        };
      } catch (error) {
        console.error(error);
        return {
          message: "Internal server error in post.router.ts at post.create()",
          success: false,
        };
      } finally {
        await prisma.$disconnect();
      }
    }),

  // To get blog-post by id
  getById: procedure.input(z.string()).query(async ({ input }) => {
    try {
      const post = await prisma.post.findUnique({
        where: {
          id: input,
        },
      });
      return {
        message: "Post fetched successfully",
        success: true,
        post: post,
      };
    } catch (error) {
      console.error(error);
      return {
        message: "Internal server error in post.router.ts at post.getById()",
        success: false,
      };
    } finally {
      await prisma.$disconnect();
    }
  }),

  // To get all blog-posts
  getAll: procedure.query(async () => {
    try {
      const posts = await prisma.post.findMany();
      return {
        message: "Posts fetched successfully",
        success: true,
        posts: posts,
      };
    } catch (error) {
      console.error(error);
      return {
        message: "Internal server error in post.router.ts at post.getAll()",
        success: false,
      };
    } finally {
      await prisma.$disconnect();
    }
  }),
});

// export type definition of API
export type PostRouter = typeof postRouter;
