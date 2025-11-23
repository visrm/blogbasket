import { CategoryCreateInputObjectZodSchema } from "@base/prisma/zod_prisma_schema/schemas";
import { procedure, router } from "../init";
import { PrismaClient } from "@base/prisma/generated/prisma/client";
import { z }from "zod";

const prisma = new PrismaClient();

export const categoryRouter = router({
  // To create category
  create: procedure
    .input(
      CategoryCreateInputObjectZodSchema.omit({
        createdAt: true,
        updatedAt: true,
      })
    )
    .mutation(async ({ input }) => {
      try {
        const newCategory = await prisma.category.create({ data: input });
        return {
          message: "Category created successfully",
          success: true,
          category: newCategory,
        };
      } catch (error) {
        console.error(error);
        return {
          message:
            "Internal server error in category.router.ts at category.create()",
          success: false,
        };
      } finally {
        await prisma.$disconnect();
      }
    }),
  // To get category by id
  getById: procedure.input(z.string()).query(async ({ input }) => {
    try {
      const category = await prisma.category.findUnique({
        where: {
          id: input,
        },
      });
      return {
        message: "Category fetched successfully",
        success: true,
        category: category,
      };
    } catch (error) {
      console.error(error);
      return {
        message:
          "Internal server error in category.router.ts at category.getById()",
        success: false,
      };
    } finally {
      await prisma.$disconnect();
    }
  }),

  // To get all categories
  getAll: procedure.query(async () => {
    try {
      const categories = await prisma.category.findMany();
      return {
        message: "Categories fetched successfully",
        success: true,
        categories: categories,
      };
    } catch (error) {
      console.error(error);
      return {
        message:
          "Internal server error in category.router.ts at category.getAll()",
        success: false,
      };
    } finally {
      await prisma.$disconnect();
    }
  }),
});

// export type definition of API
export type CategoryRouter = typeof categoryRouter;
