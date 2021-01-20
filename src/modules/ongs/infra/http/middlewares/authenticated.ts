import { NextFunction, Request, Response } from 'express';
import { decode, verify } from 'jsonwebtoken';
import authConfig from '../../../../../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function authenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT Token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.keySecret);

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new Error('Invalid JWT Token');
  }
}
