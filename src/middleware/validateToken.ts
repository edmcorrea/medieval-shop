import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/JWT';

require('dotenv/config');

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const user = verifyToken(authorization);

  if (user.type === 'EXPIRED_INVALID') {
    return res.status(401).json({ message: user.message });
  }

  next();
};

export default validateToken;