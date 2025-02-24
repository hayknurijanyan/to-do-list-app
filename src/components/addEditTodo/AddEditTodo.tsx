"use client";

import React from "react";
import {
  AddCircleIcon,
  ArrowLeft as BackButton,
  CheckedBoldIcon,
} from "@/assets/icons";
import TodoInput from "./TodoInput";
import ColorPicker from "../common/colorPicker/ColorPicker";
import Button from "../common/button/Button";
import Label from "../common/label/Label";
import { Todo } from "@/types/todo";
import { useAddEditTodo } from "./useAddEditTodo";

interface AddEditTodoProps {
  initialText?: string;
  initialColor?: string;
  todo?: Todo;
}

const AddEditTodo: React.FC<AddEditTodoProps> = ({ todo }) => {
  const {
    taskText,
    setTaskText,
    selectedColor,
    setSelectedColor,
    handleAddTask,
    handleEditTask,
    handleBack,
  } = useAddEditTodo(todo);

  return (
    <div className="w-full md:w-[736] flex flex-col justify-between mt-2 px-4 md:px-0">
      <div className="flex flex-col space-y-3">
        <BackButton onClick={handleBack} className="cursor-pointer mb-10" />
        <Label text="Title" />
        <TodoInput
          value={taskText}
          placeholder="Ex. Brush your teeth"
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Label text="Color" />
        <ColorPicker
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
        <Button
          label={todo ? "Save" : "Create Task"}
          onClick={todo ? handleEditTask : handleAddTask}
          Icon={todo ? CheckedBoldIcon : AddCircleIcon}
        />
      </div>
    </div>
  );
};

export default AddEditTodo;
