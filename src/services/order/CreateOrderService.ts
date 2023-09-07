import prismaClient from '../../prisma';

interface OrderRequest {
  table: number;
  name_client: string;
}

class CreateOrderService {
  async execute({ table, name_client }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name_client: name_client,
      },
    });

    return order;
  }
}
export { CreateOrderService };
