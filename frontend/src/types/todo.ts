export interface Todo {
    id: number;
    text: string;
    category: string;
    completed: boolean;
    createdAt: string;
  }
  
  export interface CreateTodoDto {
    text: string;
    category: string;
  }
  
  export interface UpdateTodoDto {
    completed: boolean;
  }