import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class AnuncioRepository {
  async listar(argumentos: Prisma.AnuncioFindManyArgs) {
    return await prisma.anuncio.findMany(argumentos);
  }

  async exibir(argumentos: Prisma.AnuncioFindUniqueArgs) {
    return await prisma.anuncio.findUnique(argumentos);
  }

  async criar(argumentos: Prisma.AnuncioCreateArgs) {
    return await prisma.anuncio.create(argumentos);
  }

  async atualizar(argumentos: Prisma.AnuncioUpdateArgs) {
    return await prisma.anuncio.update(argumentos);
  }

  async deletar(argumentos: Prisma.AnuncioDeleteArgs) {
    return await prisma.anuncio.delete(argumentos);
  }

  async contar(argumentos: Prisma.AnuncioCountArgs){
    return await prisma.anuncio.count(argumentos)
  }
}
