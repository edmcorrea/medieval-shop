import { IOrders } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
import ProductsModel from '../models/ProductsModel';
// import { decodedToken } from '../utils/JWT';

export default class OrderService {
  constructor(
    private orderModel = new OrderModel(connection),
    private productsModel = new ProductsModel(connection),
  ) {}

  async getAllOrder(): Promise<IOrders[]> {
    const getAll = await this.orderModel.getAllOrders();
    return getAll;
  }

  async postOrders(prodIds: number[], userId: number): Promise<IOrders> {
    const orderId = await this.orderModel.postOrders(userId);
    const posted = await Promise.all(
      prodIds.map(async (prodId) => {
        await this.productsModel.updateProducts(prodId, orderId);
      }),
    );
    // );
    await Promise.all(posted);    
    return { userId, productsIds: prodIds };
  }
}