import prismaClient from '../../prisma';

interface ItemRequest {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: ItemRequest) {
    try {
      // Verifique se o item com item_id existe
      const existingItem = await prismaClient.item.findFirst({
        where: {
          id: item_id,
        },
      });

      if (!existingItem) {
        // Se o item não existe, retorne um erro
        throw new Error('Item not found');
      }

      // Se o item existe, exclua-o
      const order = await prismaClient.item.delete({
        where: {
          id: item_id,
        },
      });

      return order;
    } catch (error) {
      // Lide com erros, por exemplo, retornando um erro apropriado
      return { error: error.message };
    }
  }
}

export { RemoveItemService };
