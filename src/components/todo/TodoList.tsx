import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "@/types/todo";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
  return (
    <div className="w-full flex flex-col-reverse">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
