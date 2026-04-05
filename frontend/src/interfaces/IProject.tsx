import type { TodoListType } from "./ITodoList";

export interface Project {
    id: number;
    title: string;
    description: string;

    lists: TodoListType[];
}