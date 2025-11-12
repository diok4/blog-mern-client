import type { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export const AuthLayout: FC = () => {
  return (
    <div>
      <Link
        to="/"
        className="ml-[350px] absolute border border-[#1F2937] px-5 p-1 rounded-2xl"
      >
        <div className="flex items-center font-bold">
          <FaArrowLeft />
          Home
        </div>
      </Link>
      <Outlet />
    </div>
  );
};
