import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  verifyLogin = async (req: Request, res:Response) => {
    const { type, message } = await this.loginService.login(req.body);
    if (type) return res.status(401).json({ message });
    res.status(200).json({ token: message });
  };
}