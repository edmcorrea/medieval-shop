import { NextFunction, Request, Response } from 'express';
import { schemaLogin } from '../services/validation/schema';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { error } = schemaLogin.validate(req.body);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message,
    });
  }
  next();
}
