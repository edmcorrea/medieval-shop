import { NextFunction, Request, Response } from 'express';
import { schemaProductIds } from '../services/validation/schema';

function validateOrder(req: Request, res: Response, next: NextFunction) {
  const { error } = schemaProductIds.validate(req.body);
  
  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.details[0].message });
  }
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  const { productsIds } = req.body;

  if (!productsIds.length) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
}

export default validateOrder;