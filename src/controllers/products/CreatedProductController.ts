import { Request, Response } from 'express';
import { CreatedProductService } from '../../services/products/CreatedProductService';

class CreatedProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    const createdProductService = new CreatedProductService();

    if (!req.file) {
      throw new Error('Error UpLoad file');
    } else {
      const { originalname, filename: banner } = req.file;

      const product = await createdProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
      });

      return res.json(product);
    }
  }
}

export { CreatedProductController };
