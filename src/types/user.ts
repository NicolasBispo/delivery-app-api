import { createUserSchema, updateUserSchema } from "@/schema/userSchemas";
import { Request } from "express";
import { z } from "zod";

export type CreateUserPayload = z.infer<typeof createUserSchema>;

export interface CreateUserRequest extends Request {
  body: CreateUserPayload;
}

// Tipagem para atualização de usuário
export type UpdateUserPayload = z.infer<typeof updateUserSchema>;

export interface UpdateUserRequest extends Request {
  params: {
    id: string;
  };
  body: UpdateUserPayload;
}
