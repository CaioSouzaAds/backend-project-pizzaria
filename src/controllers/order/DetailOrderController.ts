import { Request, Response } from 'express';
import { DetailOrderService } from '../../services/order/DetailOrderService';

class DetailOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    if (!order_id) {
      return res.status(400).json({ error: 'O parâmetro order_id é obrigatório.' });
    }

    const detailOrderService = new DetailOrderService();

    const orders = await detailOrderService.execute({
      order_id,
    });

    return res.json(orders);
  }
}
export { DetailOrderController };
