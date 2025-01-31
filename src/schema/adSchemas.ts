import { z } from "zod";

export const createAdSchema = z.object({
  name: z.string(),
  description: z.string(),
  priceInCents: z.number(),
  categoryId: z.string(),
});

export const updateAdSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  priceInCents: z.number().optional(),
  categoryId: z.string().optional(),
});
