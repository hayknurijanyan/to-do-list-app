import axios from "axios";
import EditTodo from "@/components/addEditTodo/AddEditTodo";
import Header from "@/components/common/header/Header";
import { API_URL } from "@/constants/url";
import { Params } from "next/dist/server/request/params";
import { Todo } from "@/types/todo";

const EditPage = async ({ params }: { params: Params }) => {
  const { id } = params;
  const { data } = await axios.get<Todo>(`${API_URL}/tasks/${id}`);

  return (
    <main className="h-screen flex flex-col gap-8 items-center bg-gray-700">
      <Header />
      <EditTodo todo={data} />
    </main>
  );
};

export default EditPage;
