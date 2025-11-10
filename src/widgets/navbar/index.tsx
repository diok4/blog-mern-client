import type { FC } from "react";
import { InputWithButton } from "@/shared/input/InputWithButton";

export const NavBar: FC = () => {
  return (
    <div className="h-16 bg-[#111827] flex items-center justify-between px-30 border-b border-b-[#1F2937] ">
      <div className="text-2xl font-semibold text-[#3B82F6]">
        <h1>SENDPOST</h1>
      </div>
      <div className="w-[400px] h-10 ">
        <InputWithButton
          radius="8px"
          placeholder="Search by title..."
          rightSectionWidth={42}
        />
      </div>
      <div className="font-semibold">
        <button className="bg-none rounded-lg hover:text-[#3B82F6] cursor-pointer h-10 px-4 transition-[0.1s]">
          Login
        </button>
        <button className="bg-[#3B82F6] rounded-lg  hover:bg-[#2563EB] cursor-pointer h-10 px-4 transition-[0.1s]">
          Register
        </button>
      </div>
    </div>
  );
};
