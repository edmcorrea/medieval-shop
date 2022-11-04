import { Router } from 'express';
import ProductsController from './controllers/ProductsController';
import UserController from './controllers/UserController';

const routers = Router();

const productsController = new ProductsController();
const userController = new UserController();

// routers.use(authMiddleware.validateToken);

routers.post('/products', productsController.createProducts);
routers.get('/products', productsController.getAllProducts);

routers.post('/users', userController.createUser);
// routers.use('/user', userRouter);
// routers.use('/categories', categoriesRouter);
// routers.use('/post', postRouter);

export default routers;