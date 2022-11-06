import { NextFunction, Request, Response } from 'express';
import { schemaUser } from '../services/validation/schema';

function validateUser(req: Request, res: Response, next: NextFunction) {
  const { error } = schemaUser.validate(req.body);
  
  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.details[0].message });
  }
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
}

export default validateUser;