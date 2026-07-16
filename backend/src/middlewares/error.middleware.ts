import { Request, Response, NextFunction } from 'express';

import { AppError } from '../errors/app-error';
import { ERROR_MESSAGES } from '../constants/messages';

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  console.error(error);

  return res.status(500).json({
    message: ERROR_MESSAGES.INTERNAL_ERROR,
  });
};