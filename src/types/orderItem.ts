import {
  createOrderItemSchema,
  updateOrderItemSchema,
} from "@/schema/orderItemsSchema";
import { Request } from "express";
import { z } from "zod";
export type CreateOrderItemPayload = z.infer<typeof createOrderItemSchema>;

export interface CreateOrderItemRequest extends Request {
  body: CreateOrderItemPayload;
}

// Tipagem para atualização de item de pedido
export type UpdateOrderItemPayload = z.infer<typeof updateOrderItemSchema>;

export interface UpdateOrderItemRequest extends Request {
  params: {
    id: string;
  };
  body: UpdateOrderItemPayload;
}
