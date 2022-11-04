import { Router } from 'express';
import ProductsController from './controllers/ProductsController';

const routers = Router();

const productsController = new ProductsController();

// routers.use(authMiddleware.validateToken);

routers.post('/products', productsController.createProducts);
routers.get('/products', productsController.getAllProducts);

// routers.use('/user', userRouter);
// routers.use('/categories', categoriesRouter);
// routers.use('/post', postRouter);

export default routers;