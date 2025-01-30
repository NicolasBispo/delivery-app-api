import { RequisicaoListagem } from "../types/requests";

export function getPagination(request: RequisicaoListagem) {
  const { pagina = 1, porPagina = 12 } = request.query;

  return {
    pagina: Number(pagina),
    porPagina: Number(porPagina),
  };
}
