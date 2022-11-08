import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IToken } from '../interfaces';
// import { ILogin, IUser } from '../interfaces';

dotenv.config();

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'paocomqueijo';

export function generateToken(id: number | undefined) {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(
    { id },
    TOKEN_SECRET_KEY,
    jwtConfig as object,
  );
  return token;
}

export const verifyToken = (token: string) => {
  try {
    const validateToken = jwt.verify(token, TOKEN_SECRET_KEY);
    return { type: null, validateToken };
  } catch (_error) {
    return { type: 'EXPIRED_INVALID', message: 'Invalid token' };
  }
};

export const decodedToken = (token: string): IToken => {
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET_KEY);
    return decoded as IToken;
  } catch (_error) {
    return { type: 'EXPIRED_INVALID', message: 'Expired or invalid token' };
  }
};
