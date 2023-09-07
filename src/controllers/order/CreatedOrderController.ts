import { Request, Response } from 'express';

import { CreateOrderService } from '../../services/order/CreateOrderService';

class CreatedOrderController {
  async handle(req: Request, res: Response) {
    const { table, name_client } = req.body;

    const createdOrderController = new CreateOrderService();

    const order = await createdOrderController.execute({ table, name_client });

    return res.json(order);
  }
}

export { CreatedOrderController };
