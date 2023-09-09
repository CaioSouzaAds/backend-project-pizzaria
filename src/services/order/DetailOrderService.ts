import prismaClient from '../../prisma';

interface DetailRequest {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: DetailRequest) {
    const orders = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
        order: true,
      },
    });
    if (orders.length === 0) {
      throw new Error(`Pedido com order_id ${order_id} não encontrado.`);
    }

    return orders;
  }
}

export { DetailOrderService };
