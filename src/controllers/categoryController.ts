import { CreateCategoryRequest, UpdateCategoryRequest } from "@/types/category";
import { ListRequest, ShowByIdRequest } from "@/types/requests";
import { getPagination } from "@/utils/get-pagination";
import { PrismaClient } from "@prisma/client";
import { Response } from "express";

export default class CategoryController {
  prisma = new PrismaClient();

  async index(req: ListRequest, res: Response) {
    const { page, perPage } = getPagination(req);
    const skip = (page - 1) * perPage;
    const totalItems = await this.prisma.category.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const results = await this.prisma.category.findMany({
      skip,
      take: perPage,
    });

    return res
      .status(200)
      .json({ totalItems, page, perPage, totalPages, results });
  }

  async show(req: ShowByIdRequest, res: Response) {
    const { id } = req.params;
    const category = await this.prisma.category.findUnique({ where: { id } });
    return res.status(200).json(category);
  }

  async create(req: CreateCategoryRequest, res: Response) {
    const category = await this.prisma.category.create({ data: req.body });
    return res.status(200).json(category);
  }

  async update(req: UpdateCategoryRequest, res: Response) {
    const { id } = req.params;
    const updatedCategory = await this.prisma.category.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedCategory);
  }

  async destroy(req: ShowByIdRequest, res: Response) {
    await this.prisma.category.delete({ where: { id: req.params.id } });
    return res.status(200).end();
  }
}
