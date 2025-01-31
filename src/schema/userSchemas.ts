import { z } from "zod";

export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6), // Definindo um mínimo para segurança
});

// Schema para atualização de um usuário (todos os campos opcionais)
export const updateUserSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
});
