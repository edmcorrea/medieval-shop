import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  createProducts = async (req: Request, res: Response) => {
    const createdProducts = await this.productsService.createProducts(req.body);
    res.status(201).json(createdProducts);
  };

  getAllProducts = async (_req: Request, res: Response) => {
    const allProducts = await this.productsService.getAllProducts();
    res.status(200).json(allProducts);
  };
}