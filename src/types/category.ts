import {
  createCategorySchema,
  updateCategorySchema,
} from "@/schema/categorySchema";
import { Request } from "express";
import { z } from "zod";
export type CreateCategoryPayload = z.infer<typeof createCategorySchema>;

export interface CreateCategoryRequest extends Request {
  body: CreateCategoryPayload;
}

export type UpdateCategoryPayload = z.infer<typeof updateCategorySchema>;

export interface UpdateCategoryRequest extends Request {
  params: {
    id: string;
  };
  body: UpdateCategoryPayload;
}
