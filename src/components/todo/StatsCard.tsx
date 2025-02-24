import React from "react";
import Label from "../common/label/Label";

interface StatsCardProps {
  label: string;
  count: number | string;
  textColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, count, textColor }) => {
  return (
    <div>
      <Label text={label} textColor={textColor} />
      <span className="ml-2 px-2 py-[0.5] text-sm text-center font-bold rounded-full bg-gray-600 text-gray-200">
        {count}
      </span>
    </div>
  );
};

export default StatsCard;
