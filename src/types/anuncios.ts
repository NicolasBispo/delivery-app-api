import { Request } from "express";
import { z } from "zod";
import { criarAnuncioSchema } from "../schema/anuncios-schema";

export type CriarAnuncioSchema = z.infer<typeof criarAnuncioSchema>;

export interface RequisicaoCriarAnuncio extends Request {
  body: CriarAnuncioSchema;
}
