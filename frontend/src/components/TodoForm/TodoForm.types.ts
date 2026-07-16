import { CreateTodoDto } from "@/types/todo";


export interface TodoFormProps {
  onSubmit: (
    data: CreateTodoDto
  ) => Promise<void>;
}