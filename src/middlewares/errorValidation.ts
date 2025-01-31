import ImageManagerService from "@/services/imageManagerService";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

function getFiles(req: Request) {
  const files: Express.Multer.File[] = [];
  req.files;
  if (req.file) {
    files.push(req.file);
  }
  if (req.files) {
    if (Array.isArray(req.files)) {
      files.push(...req.files); // Se for um array direto, espalha os arquivos
    } else {
      // Se for um objeto, iteramos pelos arrays de arquivos em cada chave
      Object.values(req.files).forEach((fileArray) => {
        files.push(...fileArray);
      });
    }
  }
  return files;
}

export function validateBody(schema: z.ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const files = getFiles(req);
        const imageService = new ImageManagerService();
        //deletar imagens processadas caso ocorra algum erro de validacao na criacao da entidade
        for (const file of files) {
          await imageService.deleteImageByPath(file.path);
        }
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
