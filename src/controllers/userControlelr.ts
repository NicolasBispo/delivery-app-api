import { ListRequest, ShowByIdRequest } from "@/types/requests";
import { CreateUserRequest, UpdateUserRequest } from "@/types/user";
import { getPagination } from "@/utils/get-pagination";
import { PrismaClient } from "@prisma/client";
import { Response } from "express";

export default class UserController {
  prisma = new PrismaClient();

  async index(req: ListRequest, res: Response) {
    const { page, perPage } = getPagination(req);
    const skip = (page - 1) * perPage;
    const totalItems = await this.prisma.user.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const results = await this.prisma.user.findMany({ skip, take: perPage });

    return res.status(200).json({ totalItems, page, perPage, totalPages, results });
  }

  async show(req: ShowByIdRequest, res: Response) {
    const { id } = req.params;
    const user = await this.prisma.user.findUnique({ where: { id } });
    return res.status(200).json(user);
  }

  async create(req: CreateUserRequest, res: Response) {
    const user = await this.prisma.user.create({ data: req.body });
    return res.status(200).json(user);
  }

  async update(req: UpdateUserRequest, res: Response) {
    const { id } = req.params;
    const updatedUser = await this.prisma.user.update({ where: { id }, data: req.body });
    return res.status(200).json(updatedUser);
  }

  async destroy(req: ShowByIdRequest, res: Response) {
    await this.prisma.user.delete({ where: { id: req.params.id } });
    return res.status(200).end();
  }
}