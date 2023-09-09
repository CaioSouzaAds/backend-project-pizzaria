import prismaClient from '../../prisma';

interface FinishOrderRequest {
  order_id: string;
}

class FinishOrderService {
  async execute({ order_id }: FinishOrderRequest) {
    const existingOrder = await prismaClient.order.findUnique({
      where: {
        id: order_id,
      },
    });

    if (!existingOrder) {
      // Se o pedido não for encontrado, lança uma exceção indicando que não foi encontrado.
      throw new Error(`Pedido com order_id ${order_id} não encontrado.`);
    }

    try {
      const updatedOrder = await prismaClient.order.update({
        where: {
          id: order_id,
        },
        data: {
          status: true,
        },
      });

      return updatedOrder;
    } catch (error) {
      // Trata erros aqui, por exemplo, registre o erro ou lance uma exceção personalizada.
      throw new Error(`Erro ao concluir o pedido: ${error.message}`);
    }
  }
}

export { FinishOrderService };
