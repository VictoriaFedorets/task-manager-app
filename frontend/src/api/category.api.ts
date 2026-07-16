import { api } from "./axios";

const CATEGORIES_ENDPOINT = "/categories";

export const getCategories = async (): Promise<string[]> => {
  const { data } = await api.get<string[]>(
    CATEGORIES_ENDPOINT,
  );

  return data;
};