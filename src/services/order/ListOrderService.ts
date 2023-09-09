import prismaClient from '../../prisma';

class ListOrderService {
  async execute() {
    const order = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return order;
  }
}
export { ListOrderService };
