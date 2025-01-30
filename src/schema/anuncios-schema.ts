import { z } from "zod";

export const criarAnuncioSchema = z.object({
  nome: z.string(),
  descricao: z.string(),
  valorEmCentavos: z.number(),
  categoriaId: z.string(),
});

export const atualizarAnuncioSchema = z.object({
  nome: z.string().optional(),
  descricao: z.string().optional(),
  valorEmCentavos: z.number().optional(),
  categoriaId: z.string().optional(),
});
