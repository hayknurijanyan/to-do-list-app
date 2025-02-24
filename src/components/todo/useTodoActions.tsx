import { useState } from "react";
import axios from "axios";
import { API_URL } from "@/constants/url";
import { useRouter } from "next/navigation";

export const useTodoActions = (
  todosInitial: {
    id: number;
    text: string;
    color: string;
    completed: boolean;
  }[]
) => {
  const router = useRouter();
  const [todos, setTodos] = useState(todosInitial);
  const [todoIdToDelete, setTodoIdToDelete] = useState<number | null>(null);

  const openDeleteModal = (id: number) => {
    setTodoIdToDelete(id);
  };

  const closeDeleteModal = () => {
    setTodoIdToDelete(null);
  };

  const toggleTodo = async (id: number) => {
    const previousTodos = [...todos];
    try {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return;
      const updatedTodo = { ...todo, completed: !todo.completed };
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === id ? updatedTodo : t))
      );
      await axios.put(`${API_URL}/tasks/${id}`, updatedTodo);
    } catch (error) {
      console.error("Error updating todo:", error);
      setTodos(previousTodos);
    }
  };

  const handleDeleteConfirm = async (id: number) => {
    const previousTodos = [...todos];
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
      setTodoIdToDelete(null);
    } catch (error) {
      console.error("Error deleting todo:", error);
      setTodos(previousTodos);
    }
  };

  const handleCreate = () => router.push("create");

  return {
    todoIdToDelete,
    setTodoIdToDelete,
    todos,
    toggleTodo,
    openDeleteModal,
    closeDeleteModal,
    handleDeleteConfirm,
    handleCreate,
  };
};
