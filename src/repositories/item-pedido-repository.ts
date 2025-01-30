import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class ItemPedidoRepository {
  async listar(argumentos: Prisma.ItemPedidoFindManyArgs) {
    return await prisma.itemPedido.findMany(argumentos);
  }

  async exibir(argumentos: Prisma.ItemPedidoFindUniqueArgs) {
    return await prisma.itemPedido.findUnique(argumentos);
  }

  async criar(argumentos: Prisma.ItemPedidoCreateArgs) {
    return await prisma.itemPedido.create(argumentos);
  }

  async atualizar(argumentos: Prisma.ItemPedidoUpdateArgs) {
    return await prisma.itemPedido.update(argumentos);
  }

  async deletar(argumentos: Prisma.ItemPedidoDeleteArgs) {
    return await prisma.itemPedido.delete(argumentos);
  }
}
