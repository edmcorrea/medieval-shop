import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  constructor(private userService = new UserService()) {}

  createUser = async (req: Request, res: Response) => {
    const token = await this.userService.createUser(req.body);
    res.status(201).json({ token });
  };
}
