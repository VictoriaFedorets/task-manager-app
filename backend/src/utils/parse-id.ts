import { AppError } from '../errors/app-error';
import { ERROR_MESSAGES } from '../constants/messages';

export const parseId = (id: string): number => {
  const parsedId = Number(id);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    throw new AppError(ERROR_MESSAGES.INVALID_ID, 400);
  }

  return parsedId;
};