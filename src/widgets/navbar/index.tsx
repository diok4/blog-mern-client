import type { FC } from "react";
import { SearchInput } from "@/shared/search-input";
import { Link } from "react-router-dom";
import { useIsAuthQuery } from "@/features/auth/api/authApi";
import { FaUser } from "react-icons/fa";
import { DropdownMenu } from "@/shared/dropdown-menu";
export const NavBar: FC = () => {
  const { data: isAuth } = useIsAuthQuery();

  return (
    <div className="h-16 bg-[#111827] flex items-center justify-between px-30 border-b border-b-[#1F2937] ">
      <div className="text-2xl font-semibold text-[#3B82F6]">
        <Link to="/">
          <h1>SENDPOST</h1>
        </Link>
      </div>
      <div className="w-[400px] h-10 ">
        <SearchInput
          radius="8px"
          placeholder="Search by title..."
          rightSectionWidth={42}
        />
      </div>
      {isAuth ? (
        <div className="font-semibold">
          <Link to="/">
            <button className="bg-none rounded-lg hover:text-[#3B82F6] cursor-pointer h-10 px-4 transition-[0.1s]">
              Home
            </button>
          </Link>
          <Link to="post/create">
            <button className="bg-[#3B82F6] rounded-lg  hover:bg-[#2563EB] cursor-pointer h-10 px-4 transition-[0.1s]">
              Write
            </button>
          </Link>
          <DropdownMenu
            triggerLabel={<FaUser size={18} />}
            items={[
              { value: "profile", label: "Profile", to: "/profile" },
              { value: "settings", label: "Settings", to: "/settings" },
              {
                value: "logout",
                label: "Logout",
                onClick: () => console.log("Logging out..."),
              },
            ]}
          />
        </div>
      ) : (
        <div className="font-semibold">
          <Link to="auth/login">
            <button className="bg-none rounded-lg hover:text-[#3B82F6] cursor-pointer h-10 px-4 transition-[0.1s]">
              Login
            </button>
          </Link>
          <Link to="auth/register">
            <button className="bg-[#3B82F6] rounded-lg  hover:bg-[#2563EB] cursor-pointer h-10 px-4 transition-[0.1s]">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
