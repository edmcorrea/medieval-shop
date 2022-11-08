import { ILogin } from '../interfaces';
import connection from '../models/connection';
import LoginModel from '../models/LoginModel';
import { generateToken } from '../utils/JWT';

export default class UserService {
  constructor(private loginModel = new LoginModel(connection)) {}

  async login(login: ILogin) {
    const [result] = await this.loginModel.login(login);
    
    if (!result) return { type: 'error', message: 'Username or password invalid' };

    const token = generateToken(result.id);
    return { type: null, message: token };
  } 
}