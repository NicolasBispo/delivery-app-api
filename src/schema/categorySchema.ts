import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string(),
});

// Schema para atualização de uma categoria
export const updateCategorySchema = z.object({
  name: z.string().optional(),
});