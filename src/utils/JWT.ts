import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ILogin, IUser } from '../interfaces';

dotenv.config();

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'paocomqueijo';

export default function generateToken(payload: IUser | ILogin) {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(
    payload,
    TOKEN_SECRET_KEY,
    jwtConfig as object,
  );
  return token;
}
