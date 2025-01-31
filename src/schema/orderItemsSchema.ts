import { z } from "zod";

export const createOrderItemSchema = z.object({
  priceInCents: z.number(),
  orderId: z.string(),
});

export const updateOrderItemSchema = z.object({
  priceInCents: z.number().optional(),
  orderId: z.string().optional(),
});
