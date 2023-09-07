import { Request, Response } from 'express';
import { ListProductByCategoryService } from '../../services/products/ListProductByCategoryService';

class ListProductByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const listProductByCategoryService = new ListProductByCategoryService();

    const productsByCategory_id = await listProductByCategoryService.execute({ category_id });

    return res.json(productsByCategory_id);
  }
}

export { ListProductByCategoryController };
