"use client";
import TodoList from "./TodoList";
import TodoSummary from "./TodoSummary";
import EmptyList from "../common/emptyList/EmptyList";
import Button from "../common/button/Button";
import { AddCircleIcon } from "@/assets/icons";
import { useTodoActions } from "./useTodoActions";
import DeleteModal from "../common/modals/DeleteModal";

interface TodoProps {
  todos: { id: number; text: string; color: string; completed: boolean }[];
}

const Todo = ({ todos: todosInitial }: TodoProps) => {
  const {
    todoIdToDelete,
    setTodoIdToDelete,
    todos,
    toggleTodo,
    handleDeleteConfirm,
    handleCreate,
  } = useTodoActions(todosInitial);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center px-4 md:px-0">
        <div className="absolute top-[175]">
          <Button
            label="Create Task"
            onClick={handleCreate}
            Icon={AddCircleIcon}
          />
        </div>
        <div className="w-full md:w-[736]">
          <TodoSummary todos={todos} />
          {!todos.length ? (
            <EmptyList />
          ) : (
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={setTodoIdToDelete}
            />
          )}
        </div>
      </div>
      {todoIdToDelete && (
        <DeleteModal
          isOpen
          onClose={() => setTodoIdToDelete(null)}
          onConfirm={() => handleDeleteConfirm(todoIdToDelete)}
          text={`Are you sure you want to delete the task with ID: ${todoIdToDelete}`}
        />
      )}
    </>
  );
};

export default Todo;
