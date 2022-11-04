import { IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import generateToken from '../utils/JWT';

export default class UserService {
  constructor(private userModel = new UserModel(connection)) {}

  async createUser(user: IUser) {
    const createdUser = await this.userModel.createUser(user);
    const token = generateToken(createdUser);
    return token;
  }
}