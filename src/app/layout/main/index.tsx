import { NavBar } from "@/widgets/navbar";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
  return (
    <>
      <NavBar />
      <div className="pt-21">
        <Outlet />
      </div>
    </>
  );
};
