import type { Todo } from "./ITodo";

export interface TodoListType {
    id: number;
    title: string;
    items: Todo[];
}