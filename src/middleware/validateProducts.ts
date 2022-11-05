import { NextFunction, Request, Response } from 'express';
import { schemaProducts } from '../services/validation/schema';

function validateProducts(req: Request, res: Response, next: NextFunction) {
  const { error } = schemaProducts.validate(req.body);
  console.log(error);
  
  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.details[0].message });
  }
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
}

export default validateProducts;