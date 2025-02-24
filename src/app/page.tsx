import axios from "axios";
import Header from "@/components/common/header/Header";
import TodoApp from "@/components/todo/Todo";
import { API_URL } from "@/constants/url";
import { Todo } from "@/types/todo";

const Home = async () => {
  const { data: todos } = await axios.get<Todo[]>(`${API_URL}/tasks`);
  return (
    <main className="h-screen flex flex-col gap-8 items-center bg-gray-700">
      <Header />
      <TodoApp todos={todos} />
    </main>
  );
};

export default Home;
