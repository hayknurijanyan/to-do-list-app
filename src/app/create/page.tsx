import CreateTodo from "@/components/addEditTodo/AddEditTodo";
import Header from "@/components/common/header/Header";

export default function CreatePage() {
  return (
    <main className="h-screen flex flex-col gap-8 items-center bg-gray-700">
      <Header />
      <CreateTodo />
    </main>
  );
}
