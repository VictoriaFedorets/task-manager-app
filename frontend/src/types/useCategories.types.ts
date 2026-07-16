export interface UseCategoriesReturn {
    categories: string[];
  
    loading: boolean;
  
    error: string | null;
  
    fetchCategories: () => Promise<void>;
  }