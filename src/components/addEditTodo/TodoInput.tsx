import React from "react";

interface TodoInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const TodoInput: React.FC<TodoInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-4 bg-gray-600 text-gray-100 rounded-md outline-none"
    />
  );
};

export default TodoInput;
