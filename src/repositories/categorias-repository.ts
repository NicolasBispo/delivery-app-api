import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class CategoriaRepository {
  async listar(argumentos: Prisma.CategoriaFindManyArgs) {
    return await prisma.categoria.findMany(argumentos);
  }

  async exibir(argumentos: Prisma.CategoriaFindUniqueArgs) {
    return await prisma.categoria.findUnique(argumentos);
  }

  async criar(argumentos: Prisma.CategoriaCreateArgs) {
    return await prisma.categoria.create(argumentos);
  }

  async atualizar(argumentos: Prisma.CategoriaUpdateArgs) {
    return await prisma.categoria.update(argumentos);
  }

  async deletar(argumentos: Prisma.CategoriaDeleteArgs) {
    return await prisma.categoria.delete(argumentos);
  }
}
