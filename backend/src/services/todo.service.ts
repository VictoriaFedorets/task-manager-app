import { prisma } from '../config/prisma';
import { AppError } from '../errors/app-error';
import { ERROR_MESSAGES } from '../constants/messages';
import { validateTodo } from '../validators/todo.validator';

export interface CreateTodoDto {
  text: string;
  category: string;
}

export interface UpdateTodoDto {
  completed: boolean;
}

export const getTodos = async (category?: string) => {
  return prisma.todo.findMany({
    where: category ? { category } : undefined,
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createTodo = async ({
  text,
  category,
}: CreateTodoDto) => {
  validateTodo(text, category);

  const trimmedCategory = category.trim();

  const count = await prisma.todo.count({
    where: {
      category: trimmedCategory,
    },
  });

  if (count >= 5) {
    throw new AppError(
      ERROR_MESSAGES.CATEGORY_LIMIT,
      400,
    );
  }

  return prisma.todo.create({
    data: {
      text: text.trim(),
      category: category.trim(),
    },
  });
};

export const updateTodo = async (
  id: number,
  { completed }: UpdateTodoDto,
) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  if (!todo) {
    throw new AppError(
      ERROR_MESSAGES.TODO_NOT_FOUND,
      404,
    );
  }

  return prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed,
    },
  });
};

export const deleteTodo = async (id: number) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  if (!todo) {
    throw new AppError(
      ERROR_MESSAGES.TODO_NOT_FOUND,
      404,
    );
  }

  await prisma.todo.delete({
    where: {
      id,
    },
  });
};