import type { FC } from "react";
import { SearchInput } from "@/shared/search-input";
import { Link, useNavigate } from "react-router-dom";
import { useIsAuthQuery, useLogoutMutation } from "@/features/auth/api/authApi";
import { FaUser } from "react-icons/fa";
import { DropdownMenu } from "@/shared/dropdown-menu";

export const NavBar: FC = () => {
  const { data } = useIsAuthQuery();
  const isAuth = data?.authenticated;
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-16 bg-[#111827] flex fixed z-10  px-10 border-b border-b-[#1F2937]">
      <div className="max-w-[1300px] mx-auto flex items-center justify-around">
        <div className="text-2xl w-[400px]  font-semibold text-blue-500">
          <Link to="/">
            <h1>SENDPOST</h1>
          </Link>
        </div>
        <div className="w-full mx-10  h-10 ">
          <SearchInput
            radius="8px"
            placeholder="Search by title..."
            rightSectionWidth={42}
          />
        </div>
        {isAuth ? (
          <div className="font-semibold w-[400px] flex items-center ">
            <Link to="/">
              <button className="bg-none rounded-lg hover:text-blue-600 cursor-pointer h-10 px-4 transition-[0.1s]">
                Home
              </button>
            </Link>
            <Link to="post/create">
              <button className="bg-blue-500 rounded-lg  hover:bg-blue-600 cursor-pointer h-10 px-4 transition-[0.1s]">
                Write
              </button>
            </Link>
            <div className="mx-3">
              <DropdownMenu
                triggerLabel={<FaUser size={18} />}
                items={[
                  { value: "profile", label: "Profile", to: "/profile" },
                  { value: "settings", label: "Settings", to: "/settings" },
                  {
                    value: "logout",
                    label: "Logout",
                    onClick: handleLogout,
                  },
                ]}
              />
            </div>
          </div>
        ) : (
          <div className="font-semibold w-[400px] flex items-center ">
            <Link to="auth/login">
              <button className="bg-none rounded-lg hover:text-blue-600 cursor-pointer h-10 px-4 transition-[0.1s]">
                Login
              </button>
            </Link>
            <Link to="auth/register">
              <button className="bg-blue-500 rounded-lg  hover:bg-blue-600 cursor-pointer h-10 px-4 transition-[0.1s]">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
