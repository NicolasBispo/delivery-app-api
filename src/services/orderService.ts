import PedidoRepository from "@/repositories/pedidos-repository";

export default class PedidosService {
  constructor(private pedidoRepository: PedidoRepository) {}

  async listarPedidos() {
    return await this.pedidoRepository.listar();
  }
}
