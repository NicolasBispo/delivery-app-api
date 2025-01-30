import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export function validarBody(schema: z.ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next(); // Continua para o próximo middleware
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          mensagem: "Erro de validação",
          erros: error.errors,
        });
      } else {
        res.status(500).json({ mensagem: "Erro interno no servidor" });
      }
    }
  };
}
