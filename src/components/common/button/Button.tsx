import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, Icon }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 bg-blue h-[52] w-full min-w-[300] md:w-[736] rounded-md font-bold text-white"
    >
      {label} {Icon && <Icon />}
    </button>
  );
};

export default Button;
