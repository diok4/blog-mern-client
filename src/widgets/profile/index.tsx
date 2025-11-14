import { useIsAuthQuery } from "@/features/auth/api/authApi";
import type { FC } from "react";
import { FaUserCircle } from "react-icons/fa";

export const ProfileWidget: FC = () => {
  const { data } = useIsAuthQuery();
  return (
    <>
      {data ? (
        <div className="widget w-full sm:w-1 xl:w-1/6 h-full bg-[#111827] rounded-xl p-5 border border-[#1F2937] text-center">
          <div className="text-7xl text-[#1F2937] my-4 flex justify-center">
            <FaUserCircle />
          </div>
          <div className="my-4">
            <h2 className="font-bold text-[16px]">{data.username}</h2>
            <p className="text-[#9CA3AF] leading-[1.4] text-[15px]">
              Has no occupation
            </p>
          </div>
          <div className="font-semibold text-[16px]">
            <button className="bg-[#3B82F6] hover:bg-[#2563EB]  transition-[0.1s] py-1.5 w-full rounded-lg ">
              View Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="widget w-full sm:w-1 xl:w-1/6 h-full bg-[#111827] rounded-xl p-5 border border-[#1F2937] text-center">
          <div className="text-7xl text-[#1F2937] my-4 flex justify-center">
            <FaUserCircle />
          </div>
          <div className="my-4">
            <h2 className="font-bold text-[16px]">Welcome!</h2>
            <p className="text-[#9CA3AF] leading-[1.4] text-[15px]">
              Log in to create posts and engage with the community.
            </p>
          </div>
          <div className="font-semibold text-[16px]">
            <button className="bg-[#3B82F6] hover:bg-[#2563EB]  transition-[0.1s] py-1.5 w-full rounded-lg ">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};
