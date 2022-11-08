import { Router } from 'express';
import LoginController from './controllers/LoginController';
import OrderController from './controllers/OrderController';
import ProductsController from './controllers/ProductsController';
import UserController from './controllers/UserController';
import validateLogin from './middleware/validateLogin';
import validateOrder from './middleware/validateOrder';
import validateProducts from './middleware/validateProducts';
import validateToken from './middleware/validateToken';

import validateUser from './middleware/validateUser';

const routers = Router();

const productsController = new ProductsController();
const userController = new UserController();
const orderController = new OrderController();
const loginController = new LoginController();

routers.post('/products', validateProducts, productsController.createProducts);
routers.get('/products', productsController.getAllProducts);

routers.post('/users', validateUser, userController.createUser);
routers.get('/orders', orderController.getAllOrders);
routers.post('/orders', validateToken, validateOrder, orderController.postOrders);

routers.post('/orders', orderController.getAllOrders);
routers.post('/login', validateLogin, loginController.verifyLogin);

export default routers;