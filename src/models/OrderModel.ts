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
      `SELECT ord.id, ord.userId, json_arrayagg(product.id) AS productsIds
      FROM Trybesmith.Orders AS ord
      INNER JOIN Trybesmith.Products AS product
      ON product.orderId = ord.id
      GROUP BY ord.id;`,
    );
    return row as IOrders[];
  };

  postOrders = async (userId: number) => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUE (?)',
      [userId],
    );
    return insertId as number;
  };
}
