import { Request, Response } from 'express';
import { FinishOrderService } from '../../services/order/FinishOrderService';

class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body; // Acesse o campo "order_id" no corpo da requisição

    if (!order_id) {
      return res.status(400).json({ error: 'O parâmetro order_id é obrigatório.' });
    }

    const finishOrderService = new FinishOrderService();
    const updatedOrder = await finishOrderService.execute({ order_id });
    return res.json(updatedOrder);
  }
}

export { FinishOrderController };
