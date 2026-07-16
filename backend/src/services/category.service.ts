import {prisma} from '../config/prisma';

export const getCategories = async () => {
  const todos = await prisma.todo.findMany({
    select: {
      category: true,
    },
  });

  return [...new Set(todos.map(({ category }) => category))].sort();
};