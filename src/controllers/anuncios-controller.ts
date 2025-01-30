import { Response } from "express";
import { RequisicaoExibirPorId, RequisicaoListagem } from "../types/requests";
import { getPagination } from "../utils/get-pagination";
import AnunciosService from "../services/anuncios-service";
import {
  RequisicaoCriarAnuncio,
  RequisicaoEditarAnuncio,
} from "../types/anuncios";

export default class AnunciosController {
  constructor(private anuncioService: AnunciosService) {}
  async listarAnuncios(req: RequisicaoListagem, res: Response) {
    const { pagina, porPagina } = getPagination(req);
    const pular = (pagina - 1) * porPagina;
    const itemsNoTotal = await this.anuncioService.contar({});
    const paginasNoTotal = Math.ceil(itemsNoTotal / porPagina);
    const resultados = await this.anuncioService.listarAnuncios({
      skip: pular,
      take: porPagina,
    });
    return res.status(200).json({
      itemsNoTotal,
      pagina,
      porPagina,
      paginasNoTotal,
      resultados,
    });
  }
  async exibirAnuncio(req: RequisicaoExibirPorId, res: Response) {
    const id = req.params.id;
    const anuncio = await this.anuncioService.exibirAnuncio({ where: { id } });
    res.status(200).json(anuncio);
  }

  async criarAnuncio(req: RequisicaoCriarAnuncio, res: Response) {
    const { descricao, nome, valorEmCentavos, categoriaId } = req.body;

    //criando anuncio com categoria atrelada
    //qualquer anuncio pertence a uma categoria obrigatoriamente
    //exemplo: Xtudo pertence a lanches
    const anuncio = await this.anuncioService.criarAnuncio({
      data: {
        descricao,
        nome,
        valorEmCentavos,
        categoria: {
          connect: {
            id: categoriaId,
          },
        },
      },
    });

    return res.status(200).json(anuncio);
  }

  //todo criar controller de atualizar e de apagar para anuncios

  async atualizarAnuncio(req: RequisicaoEditarAnuncio, res: Response) {
    const { categoriaId, descricao, nome, valorEmCentavos } = req.body;
    const { id } = req.params;

    const categoriaAtualizada = await this.anuncioService.atualizarAnuncio({
      where: {
        id,
      },
      data: {
        nome,
        valorEmCentavos,
        descricao,
        ...(categoriaId && {
          categoria: {
            connect: {
              id: categoriaId,
            },
          },
        }),
      },
    });

    return res.status(200).json(categoriaAtualizada);
  }

  async deletarAnuncio(req: RequisicaoExibirPorId, res: Response) {
    const { id } = req.params;

    const anuncioDeletado = await this.anuncioService.deletarAnuncio({
      where: {
        id,
      },
    });

    return res.status(200).json(anuncioDeletado);
  }
}
