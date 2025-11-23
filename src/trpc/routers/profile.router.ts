import { procedure, router } from "@/trpc/init";
import { z } from "zod";
import { PrismaClient } from "@base/prisma/generated/prisma/client";
import { ProfileCreateInputObjectZodSchema } from "@base/prisma/zod_prisma_schema/schemas";

const prisma = new PrismaClient();

export const profileRouter = router({
  //  To create profile
  create: procedure
    .input(ProfileCreateInputObjectZodSchema)
    .mutation(async ({ input }) => {
      try {
        const newProfile = await prisma.profile.create({ data: input });
        return {
          message: "profile created successfully",
          success: true,
          profile: newProfile,
        };
      } catch (error) {
        console.error(error);
        return {
          message:
            "Internal server error in profile.router.ts at profile.create()",
          success: false,
        };
      } finally {
        await prisma.$disconnect();
      }
    }),

  // To get profile by id
  getByUserId: procedure.input(z.string()).query(async ({ input }) => {
    try {
      const profile = await prisma.profile.findUnique({
        where: {
          userId: input,
        },
      });
      return {
        message: "profile fetched successfully",
        success: true,
        profile: profile,
      };
    } catch (error) {
      console.error(error);
      return {
        message:
          "Internal server error in profile.router.ts at profile.getById()",
        success: false,
      };
    } finally {
      await prisma.$disconnect();
    }
  }),
});

// export type definition of API
export type ProfileRouter = typeof profileRouter;