import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class UsuarioRepository {
  async listar(argumentos: Prisma.UsuarioFindManyArgs) {
    return await prisma.usuario.findMany(argumentos);
  }

  async exibir(argumentos: Prisma.UsuarioFindUniqueArgs) {
    return await prisma.usuario.findUnique(argumentos);
  }

  async criar(argumentos: Prisma.UsuarioCreateArgs) {
    return await prisma.usuario.create(argumentos);
  }

  async atualizar(argumentos: Prisma.UsuarioUpdateArgs) {
    return await prisma.usuario.update(argumentos);
  }

  async deletar(argumentos: Prisma.UsuarioDeleteArgs) {
    return await prisma.usuario.delete(argumentos);
  }
}
