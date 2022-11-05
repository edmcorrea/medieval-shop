import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrders } from '../interfaces';

// Trybesmith.Orders
export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAllOrders = async (): Promise<IOrders[]> => {
    const [row] = await this.connection
      .execute<IOrders[] & ResultSetHeader>(
      'SELECT * FROM Trybesmith.Orders;',
    );
    return row as IOrders[];
  };
}