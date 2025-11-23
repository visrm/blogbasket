import { TagCreateInputObjectZodSchema } from "@base/prisma/zod_prisma_schema/schemas";
import { procedure, router } from "../init";
import { PrismaClient } from "@base/prisma/generated/prisma/client";
import {z} from "zod";

const prisma = new PrismaClient();

export const tagRouter = router({
  // To create tag
  create: procedure
    .input(
      TagCreateInputObjectZodSchema.omit({
        createdAt: true,
        updatedAt: true,
      })
    )
    .mutation(async ({ input }) => {
      try {
        const newTag = await prisma.tag.create({ data: input });
        return {
          message: "Tag created successfully",
          success: true,
          tag: newTag,
        };
      } catch (error) {
        console.error(error);
        return {
          message: "Internal server error in tag.router.ts at tag.create()",
          success: false,
        };
      } finally {
        await prisma.$disconnect();
      }
    }),
  // To get tag by id
  getById: procedure.input(z.string()).query(async ({ input }) => {
    try {
      const tag = await prisma.tag.findUnique({
        where: {
          id: input,
        },
      });
      return {
        message: "Tag fetched successfully",
        success: true,
        tag: tag,
      };
    } catch (error) {
      console.error(error);
      return {
        message: "Internal server error in tag.router.ts at tag.getById()",
        success: false,
      };
    } finally {
      await prisma.$disconnect();
    }
  }),

  // To get all tags
  getAll: procedure.query(async () => {
    try {
      const tags = await prisma.tag.findMany();
      return {
        message: "Tags fetched successfully",
        success: true,
        tags: tags,
      };
    } catch (error) {
      console.error(error);
      return {
        message: "Internal server error in tag.router.ts at tag.getAll()",
        success: false,
      };
    } finally {
      await prisma.$disconnect();
    }
  }), 
});

// export type definition of API
export type TagRouter = typeof tagRouter;