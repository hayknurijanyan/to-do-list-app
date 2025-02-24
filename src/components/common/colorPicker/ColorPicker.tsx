import React from "react";
import { COLOR_OPTIONS } from "@/constants/colors";

interface ColorPickerProps {
  colors?: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors = COLOR_OPTIONS,
  selectedColor,
  onColorSelect,
}) => {
  return (
    <div className="flex gap-4 pb-6">
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => onColorSelect(color)}
          className={`w-[24] h-[24]  md:w-[52] md:h-[52]  rounded-full cursor-pointer
            ${selectedColor === color ? "border-2 border-white" : ""}`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
