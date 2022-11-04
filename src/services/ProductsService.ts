import { IProducts } from '../interfaces';
import ProductsModel from '../models/ProductsModel';
import connection from '../models/connection';

export default class ProductsService {
  constructor(private productsModel = new ProductsModel(connection)) {}

  createProducts = async (products: IProducts) => {
    const createdProducts = await this.productsModel.createProducts(products);
    // console.log('CONSOLELOG', createdProducts);
    return createdProducts;
  };

  getAllProducts = async () => {
    const allProducts = await this.productsModel.getAll();
    // console.log('CONSOLELOG', createdProducts);
    return allProducts;
  };
}