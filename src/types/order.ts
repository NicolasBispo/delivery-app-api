import { createOrderSchema, updateOrderSchema } from "@/schema/orderSchemas";
import { Request } from "express";
import { z } from "zod";

export type CreateOrderPayload = z.infer<typeof createOrderSchema>;

export interface CreateOrderRequest extends Request {
  body: CreateOrderPayload;
}

export type UpdateOrderPayload = z.infer<typeof updateOrderSchema>;

export interface UpdateOrderRequest extends Request {
  params: {
    id: string;
  };
  body: UpdateOrderPayload;
}
