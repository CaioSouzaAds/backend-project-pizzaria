import prismaClient from '../../prisma';

interface OrderRequest {
  order_id: string;
}

class RemoveOrderService {
  async execute({ order_id }: OrderRequest) {
    // Primeiro, verifique se o registro existe.
    const existingOrder = await prismaClient.order.findUnique({
      where: {
        id: order_id,
      },
    });

    if (!existingOrder) {
      throw new Error('Pedido não encontrado');
    }

    // Se o registro existe, tente excluí-lo.
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  }
}

export { RemoveOrderService };
