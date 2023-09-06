import { Request, Response } from "express";
import { CreatedCategoryService } from "../../services/category/CreatedCategoryService";

class CreatedCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createdCategoryService = new CreatedCategoryService();

    const category = await createdCategoryService.execute({ name });

    return res.json(category);
  }
}

export { CreatedCategoryController };
