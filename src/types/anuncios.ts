import { Request } from "express";
import { z } from "zod";
import {
  atualizarAnuncioSchema,
  criarAnuncioSchema,
} from "../schema/anuncios-schema";

export type CriarAnuncioSchema = z.infer<typeof criarAnuncioSchema>;

export interface RequisicaoCriarAnuncio extends Request {
  body: CriarAnuncioSchema;
}

export type AtualizarAnuncioSchema = z.infer<typeof atualizarAnuncioSchema>;
export interface RequisicaoEditarAnuncio extends Request {
  params: {
    id: string
  }
  body: AtualizarAnuncioSchema;
}
