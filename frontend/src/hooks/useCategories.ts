import {
    useCallback,
    useState,
  } from "react";
  
  import { getCategories } from "@/api/category.api";
  
  import { UseCategoriesReturn } from "@/types/useCategories.types";
  
  export const useCategories = (): UseCategoriesReturn => {
    const [categories, setCategories] =
      useState<string[]>([]);
  
    const [loading, setLoading] =
      useState(false);
  
    const [error, setError] =
      useState<string | null>(null);
  
    const fetchCategories = useCallback(
      async () => {
        try {
          setLoading(true);
          setError(null);
  
          const data =
            await getCategories();
  
          setCategories(data);
        } catch {
          setError("Failed to load categories");
        } finally {
          setLoading(false);
        }
      },
      [],
    );
  
    return {
      categories,
      loading,
      error,
      fetchCategories,
    };
  };