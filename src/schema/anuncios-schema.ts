import { z } from "zod";

export const criarAnuncioSchema = z.object({
  nome: z.string(),
  descricao: z.string(),
  valorEmCentavos: z.number(),
  categoriaId: z.string()
});


