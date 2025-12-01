import type { FC } from "react";
import { SearchInput } from "@/shared/search-input";
import { Link, useNavigate } from "react-router-dom";
import { useIsAuthQuery, useLogoutMutation } from "@/features/auth/api/authApi";
import { FaUser } from "react-icons/fa";
import { DropdownMenu } from "@/shared/dropdown-menu";
import { LoadingOverlay } from "@/shared/loader";

export const NavBar: FC = () => {
  const { data } = useIsAuthQuery();
  const isAuth = data?.authenticated;
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-16 bg-[#111827] flex fixed z-10 px-4 sm:px-10 border-b border-b-[#1F2937]">
      {isLoading && <LoadingOverlay />}

      <div className="max-w-[1100px] mx-auto flex items-center justify-between w-full">
        <div className="text-xl sm:text-2xl font-semibold text-blue-500">
          <Link to="/">
            <h1>SENDPOST</h1>
          </Link>
        </div>
        <div className="hidden sm:block sm:max-w-[600px] mx-4 w-full h-10">
          <SearchInput
            radius="8px"
            placeholder="Search by title..."
            rightSectionWidth={42}
          />
        </div>
        {isAuth ? (
          <div className="font-semibold flex items-center gap-1 sm:gap-3">
            <Link to="/">
              <button className="rounded-lg hover:text-blue-600 cursor-pointer h-10 px-2 sm:px-4 transition">
                Home
              </button>
            </Link>

            <Link to="post/create">
              <button className="bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer h-10 px-3 sm:px-4 transition">
                Write
              </button>
            </Link>
            <div className="ml-2">
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
          <div className="font-semibold flex items-center gap-1 sm:gap-3">
            <Link to="auth/login">
              <button className="rounded-lg hover:text-blue-600 cursor-pointer h-10 px-2 sm:px-4 transition">
                Login
              </button>
            </Link>

            <Link to="auth/register">
              <button className="bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer h-10 px-3 sm:px-4 transition">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
