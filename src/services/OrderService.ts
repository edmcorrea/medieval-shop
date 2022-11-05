import { IOrders } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  constructor(private orderModel = new OrderModel(connection)) {}

  async getAllOrder(): Promise<IOrders[]> {
    const getAll = await this.orderModel.getAllOrders();
    return getAll;
  }
}