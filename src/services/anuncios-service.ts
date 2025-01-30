import { Prisma } from "@prisma/client";
import AnuncioRepository from "../repositories/anuncios-repository";

export default class AnunciosService {
  
  constructor(private anuncioRepositorio: AnuncioRepository) {}

  async listarAnuncios(args: Prisma.AnuncioFindManyArgs) {
    return await this.anuncioRepositorio.listar(args);
  }

  async exibirAnuncio(args: Prisma.AnuncioFindUniqueArgs) {
    return await this.anuncioRepositorio.exibir(args);
  }

  async criarAnuncio(args: Prisma.AnuncioCreateArgs) {
    return await this.anuncioRepositorio.criar(args);
  }

  async atualizarAnuncio(args: Prisma.AnuncioUpdateArgs) {
    return await this.anuncioRepositorio.atualizar(args);
  }

  async deletarAnuncio(args: Prisma.AnuncioDeleteArgs) {
    return await this.anuncioRepositorio.deletar(args);
  }

  async contar(args: Prisma.AnuncioCountArgs){
    return await this.anuncioRepositorio.contar(args)
  }

}
