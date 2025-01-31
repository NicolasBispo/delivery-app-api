import {
  CreateOrderItemRequest,
  UpdateOrderItemRequest,
} from "@/types/orderItem";
import { ListRequest, ShowByIdRequest } from "@/types/requests";
import { getPagination } from "@/utils/get-pagination";
import { PrismaClient } from "@prisma/client";
import { Response } from "express";

export default class OrderItemController {
  prisma = new PrismaClient();

  async index(req: ListRequest, res: Response) {
    const { page, perPage } = getPagination(req);
    const skip = (page - 1) * perPage;
    const totalItems = await this.prisma.orderItem.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const results = await this.prisma.orderItem.findMany({
      skip,
      take: perPage,
    });

    return res
      .status(200)
      .json({ totalItems, page, perPage, totalPages, results });
  }

  async show(req: ShowByIdRequest, res: Response) {
    const { id } = req.params;
    const orderItem = await this.prisma.orderItem.findUnique({ where: { id } });
    return res.status(200).json(orderItem);
  }

  async create(req: CreateOrderItemRequest, res: Response) {
    const orderItem = await this.prisma.orderItem.create({ data: req.body });
    return res.status(200).json(orderItem);
  }

  async update(req: UpdateOrderItemRequest, res: Response) {
    const { id } = req.params;
    const updatedOrderItem = await this.prisma.orderItem.update({
      where: { id },
      data: req.body,
    });
    return res.status(200).json(updatedOrderItem);
  }

  async destroy(req: ShowByIdRequest, res: Response) {
    await this.prisma.orderItem.delete({ where: { id: req.params.id } });
    return res.status(200).end();
  }
}
