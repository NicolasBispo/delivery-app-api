import { Request } from "express";
import { z } from "zod";
import { createAdSchema, updateAdSchema } from "../schema/adSchemas";

export type CreateAdSchema = z.infer<typeof createAdSchema>;

export interface CreateAdRequest extends Request {
  body: CreateAdSchema;
}

export type UpdateAdSchema = z.infer<typeof updateAdSchema>;
export interface UpdateAdRequest extends Request {
  params: {
    id: string;
  };
  body: UpdateAdSchema;
}
