import { Request, Response } from 'express';
import OrderService from '../services/OrderService';
import { decodedToken } from '../utils/JWT';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  getAllOrders = async (_req: Request, res:Response) => {
    const getAll = await this.orderService.getAllOrder();
    res.status(200).json(getAll);
  };

  postOrders = async (req: Request, res:Response) => {
    const { authorization } = req.headers;
    const { productsIds } = req.body;

    const { id } = decodedToken(authorization as string);
    
    const posted = await this.orderService.postOrders(productsIds, id as number);
    res.status(201).json(posted);
  };
}