import { Response } from "express";
import { ShowByIdRequest, ListRequest } from "../types/requests";
import { getPagination } from "../utils/get-pagination";
import { PrismaClient } from "@prisma/client";
import { CreateAdRequest, UpdateAdRequest } from "@/types/ad";

export default class AdController {
  prisma = new PrismaClient();
  async index(req: ListRequest, res: Response) {
    const { page, perPage } = getPagination(req);
    const skip = (page - 1) * perPage;
    const totalItems = await this.prisma.ad.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const results = await this.prisma.ad.findMany({
      skip: skip,
      take: perPage,
    });
    return res.status(200).json({
      totalItems,
      page,
      perPage,
      totalPages,
      results,
    });
  }
  async show(req: ShowByIdRequest, res: Response) {
    const id = req.params.id;
    const ad = await this.prisma.ad.findUnique({ where: { id } });
    res.status(200).json(ad);
  }

  async create(req: CreateAdRequest, res: Response) {
    const ad = await this.prisma.ad.create({
      data: req.body,
    });

    return res.status(200).json(ad);
  }

  async update(req: UpdateAdRequest, res: Response) {
    const { id } = req.params;
    const updatedAd = await this.prisma.ad.update({
      where: {
        id,
      },
      data: req.body,
    });
    return res.status(200).json(updatedAd);
  }

  async destroy(req: ShowByIdRequest, res: Response) {
    const { id } = req.params;

    await this.prisma.ad.delete({
      where: {
        id,
      },
    });

    return res.status(200).end();
  }
}
