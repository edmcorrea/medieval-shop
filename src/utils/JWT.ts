import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces';

dotenv.config();

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'paocomqueijo';

export default function generateToken(payload: IUser) {
  // const jwtConfig = {
  //   expiresIn: '7d',
  //   algorithm: 'HS256',
  // };
  // console.log('PAYLOAD', payload);
  const token = jwt.sign(
    payload,
    TOKEN_SECRET_KEY,
    {
      expiresIn: '7d',
      algorithm: 'HS256',
    },
  );
  return token;
}
