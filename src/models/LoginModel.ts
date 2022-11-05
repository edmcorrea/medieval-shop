import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async login(login:ILogin):Promise<IUser[]> {
    const { username, password } = login;
    const [row] = await this.connection.execute<IUser[] & ResultSetHeader>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    return row;
  }
}