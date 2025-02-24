import { EmptyListIcon } from "@/assets/icons";

const EmptyList = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center text-center text-gray-400 border-t border-gray-800">
      <EmptyListIcon />
      <p className="my-5 text-base font-semibold text-gray-500">
        You don&apos;t have any tasks registered yet.
      </p>
      <p className="text-sm text-gray-500">
        Create tasks and organize your to-do items.
      </p>
    </div>
  );
};

export default EmptyList;
