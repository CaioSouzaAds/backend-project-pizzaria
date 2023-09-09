import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

import { CreatedCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoriesController } from './controllers/category/ListCategoriesController';

import { CreatedProductController } from './controllers/products/CreatedProductController';
import { ListProductByCategoryController } from './controllers/products/ListProductByCategoryController';

import { CreatedOrderController } from './controllers/order/CreatedOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';

import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderService';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// ROTAS USER -- //
router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/myuser', isAuthenticated, new DetailUserController().handle);

// Routes Category --//
router.post('/category', isAuthenticated, new CreatedCategoryController().handle);

router.get('/categories', new ListCategoriesController().handle);

// Routes Products --//

router.post('/products', upload.single('file'), new CreatedProductController().handle);

// List products by category
router.get('/category/product', new ListProductByCategoryController().handle);

// ROUTES ORDER --//

router.post('/order', new CreatedOrderController().handle);

router.delete('/order', new RemoveOrderController().handle);

router.post('/order/add', new AddItemController().handle);

router.delete('/order/remove', new RemoveItemController().handle);

router.put('/order/send', new SendOrderController().handle);

router.get('/orders', new ListOrderController().handle);

router.get('/order/detail', new DetailOrderController().handle);

router.put('/order/finish', new FinishOrderController().handle);

export { router };
