import React from "react";
import StatsCard from "./StatsCard";
import { Todo } from "@/types/todo";

interface TodoSummaryProps {
  todos: Todo[];
}

const TodoSummary: React.FC<TodoSummaryProps> = ({ todos = [] }) => {
  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  return (
    <div className="flex justify-between w-full pt-12 pb-6">
      <StatsCard label="Tasks" count={totalTasks} />
      <StatsCard
        textColor="secondary"
        label="Completed"
        count={`${completedTasks} of ${totalTasks}`}
      />
    </div>
  );
};

export default TodoSummary;
