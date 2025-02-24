import { CheckedIcon, BlueCircle, TrashIcon } from "@/assets/icons";
import { useRouter } from "next/navigation";

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-between p-4 mb-3 rounded-lg border border-gray-600 bg-gray-750">
      {todo.completed ? (
        <CheckedIcon
          className="cursor-pointer"
          onClick={() => toggleTodo(todo.id)}
        />
      ) : (
        <BlueCircle
          className="cursor-pointer"
          onClick={() => toggleTodo(todo.id)}
        />
      )}

      <span
        className={`flex-1 text-sm ml-3 cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : "text-gray-100"
        }`}
        onClick={() => router.push(`edit/${todo.id}`)}
      >
        {todo.text}
      </span>

      <TrashIcon
        onClick={() => deleteTodo(todo.id)}
        className="cursor-pointer hover:bg-gray-600 rounded-md"
      />
    </div>
  );
};

export default TodoItem;
