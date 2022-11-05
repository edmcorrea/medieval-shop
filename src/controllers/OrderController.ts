import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  getAllOrders = async (_req: Request, res:Response) => {
    const getAll = await this.orderService.getAllOrder();
    res.status(200).json(getAll);
  };
}