import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class PedidoRepository {
  async listar(argumentos: Prisma.PedidoFindManyArgs) {
    return await prisma.pedido.findMany(argumentos);
  }

  async exibir(argumentos: Prisma.PedidoFindUniqueArgs) {
    return await prisma.pedido.findUnique(argumentos);
  }

  async criar(argumentos: Prisma.PedidoCreateArgs) {
    return await prisma.pedido.create(argumentos);
  }

  async atualizar(argumentos: Prisma.PedidoUpdateArgs) {
    return await prisma.pedido.update(argumentos);
  }

  async deletar(argumentos: Prisma.PedidoDeleteArgs) {
    return await prisma.pedido.delete(argumentos);
  }
}
