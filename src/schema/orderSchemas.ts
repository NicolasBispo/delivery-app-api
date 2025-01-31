import { z } from "zod";

export const createOrderSchema = z.object({
  deliveryAddress: z.string(),
  userId: z.string(),
});

export const updateOrderSchema = z.object({
  deliveryAddress: z.string(),
});
