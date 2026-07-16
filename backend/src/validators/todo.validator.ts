import { AppError } from '../errors/app-error';
import { ERROR_MESSAGES } from '../constants/messages';

export const validateTodo = (
  text: string,
  category: string,
) => {
  if (typeof text !== 'string' || !text.trim()) {
    throw new AppError(
      ERROR_MESSAGES.TEXT_REQUIRED,
      400,
    );
  }

  if (typeof category !== 'string' || !category.trim()) {
    throw new AppError(
      ERROR_MESSAGES.CATEGORY_REQUIRED,
      400,
    );
  }

  if (text.length > 100) {
    throw new AppError(
      'Task must be shorter than 100 characters',
      400,
    );
  }
};