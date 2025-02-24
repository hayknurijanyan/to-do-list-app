import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Todo } from "@/types/todo";
import { API_URL } from "@/constants/url";

export const useAddEditTodo = (todo?: Todo) => {
  const router = useRouter();

  const [taskText, setTaskText] = useState<string>(todo?.text || "");
  const [selectedColor, setSelectedColor] = useState<string>(
    todo?.color || "#FF3B30"
  );
  const redirectToHome = () => router.push("/");

  const handleBack = redirectToHome;

  const handleAddTask = async () => {
    try {
      await axios.post(`${API_URL}/tasks`, {
        text: taskText,
        color: selectedColor,
        completed: false,
      });
      redirectToHome();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleEditTask = async () => {
    if (todo) {
      try {
        await axios.put(`${API_URL}/tasks/${todo.id}`, {
          text: taskText,
          color: selectedColor,
          completed: todo.completed,
        });
        redirectToHome();
      } catch (error) {
        console.error("Error editing task:", error);
      }
    }
  };

  return {
    taskText,
    setTaskText,
    selectedColor,
    setSelectedColor,
    handleAddTask,
    handleEditTask,
    handleBack,
  };
};
