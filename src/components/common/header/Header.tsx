"use client";
import React from "react";
import { RocketIcon } from "@/assets/icons";

const Header = () => {
  return (
    <div className="flex gap-2 justify-center items-center w-full h-[200px] bg-black">
      <RocketIcon />
      <h1 className="text-primary font-heavy text-5xl">Todo</h1>
      <h1 className="text-secondary font-heavy text-5xl">App</h1>
    </div>
  );
};

export default Header;
