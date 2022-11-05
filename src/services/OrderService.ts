import { IOrders } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  constructor(private orderModel = new OrderModel(connection)) {}

  async getAllOrder(): Promise<IOrders[]> {
    const getAll = await this.orderModel.getAllOrders();
    // const getAllReduce = getAll.reduce((acc, curr) => {
    //   const accFilter = acc.filter(({ id }) => id === curr.id);
    //   const newProductsId = accFilter.productsIds.push(curr.productsIds) || [curr.productsIds];
    //   return acc.push({id: curr.id, userId: curr.userId, productsIds: newProductsId}); 
    // }, []);
    return getAll;
  }
}