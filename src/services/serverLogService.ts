import { PrismaClient } from "@prisma/client";

export default class ServerLogService {
  private static prisma = new PrismaClient();

  static registerAction(action: string, message: string) {
    this.prisma.serverLog.create({
      data: {
        action,
        message,
      },
    });
  }
}
