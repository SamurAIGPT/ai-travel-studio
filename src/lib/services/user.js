import { prisma } from "../prisma";

export const UserService = {
  async getUser(userId) {
    return prisma.user.findUnique({ where: { id: userId } });
  },

  async deductCredits(userId, amount) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error("User not found");
    if (user.credits < amount) throw new Error("Insufficient credits");
    return prisma.user.update({
      where: { id: userId },
      data: { credits: { decrement: amount } },
    });
  },

  async addCredits(userId, amount) {
    return prisma.user.update({
      where: { id: userId },
      data: { credits: { increment: amount } },
    });
  },
};
