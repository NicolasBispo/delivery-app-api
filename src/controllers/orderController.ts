import { CreateOrderRequest, UpdateOrderRequest } from "@/types/order";
import { ListRequest, ShowByIdRequest } from "@/types/requests";
import { getPagination } from "@/utils/get-pagination";
import { PrismaClient } from "@prisma/client";
import { Response } from "express";

export default class OrderController {
  prisma = new PrismaClient();

  async index(req: ListRequest, res: Response) {
    const { page, perPage } = getPagination(req);
    const skip = (page - 1) * perPage;
    const totalItems = await this.prisma.ad.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const results = await this.prisma.order.findMany({
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
    const order = await this.prisma.order.findUnique({ where: { id } });
    res.status(200).json(order);
  }

  async create(req: CreateOrderRequest, res: Response) {
    const order = await this.prisma.order.create({
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(order);
  }

  async update(req: UpdateOrderRequest, res: Response) {
    const { id } = req.params;

    const updatedOrder = await this.prisma.order.update({
      where: {
        id,
      },
      data: req.body,
    });

    return res.status(200).json(updatedOrder);
  }

  async destroy(req: ShowByIdRequest, res: Response) {
    const { id } = req.params;

    const deletedOrder = await this.prisma.order.delete({
      where: {
        id,
      },
    });
    return res.status(200).end();
  }
}
