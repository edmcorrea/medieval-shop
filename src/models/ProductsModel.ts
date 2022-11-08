import { Pool, ResultSetHeader } from 'mysql2/promise';
// , RowDataPacket
import { IProducts } from '../interfaces';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createProducts(products: IProducts): Promise<IProducts> {
    // console.log('CONSOLELOG', products);
    const { name, amount } = products;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUE (?,?)',
      [name, amount],
    );
    return { id: insertId, ...products } as IProducts;
  }

  async getAll(): Promise<IProducts[]> {
    // console.log('CONSOLELOG', products);
    const [row] = await this.connection.execute<IProducts[] & ResultSetHeader>(
      'SELECT * FROM Trybesmith.Products;',
    );
    return row as IProducts[];
  }

  async updateProducts(id: number, orderId: number): Promise<void> {
    await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
      [orderId, id],
    );
  }
}