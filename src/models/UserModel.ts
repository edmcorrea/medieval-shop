import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUE (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: insertId, username, classe, level } as IUser;
  }
}