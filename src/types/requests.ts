import { Request } from "express";

export interface RequisicaoListagem extends Request {
  query: {
    pagina: string
    porPagina: string
  }
}
export interface RequisicaoExibirPorId extends Request {
  params: {
    id: string
  }
}