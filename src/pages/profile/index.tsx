import { useMeQuery } from "@/features/auth/api/authApi";
import type { FC } from "react";
import { FaUserCircle } from "react-icons/fa";

export const ProfilePage: FC = () => {
  const { data } = useMeQuery();
  const user = data?.user;
  return (
    <div className="py-3 h-screen max-w-[720px] px-10 mx-auto">
      <div className="widget mx-auto w-full  bg-[#111827] rounded-xl p-5 border border-[#1F2937] text-center">
        <div className="text-9xl text-[#1F2937] my-4 flex justify-center">
          <FaUserCircle />
        </div>
        <div className="my-4">
          <h2 className="font-bold text-2xl">{user?.username}</h2>
          <p className="text-gray-300 leading-[1.4] text-[15px]">
            Software Engineer
          </p>
          <p className="text-gray-500">
            🚀 Tech enthusiast | AI & Web3 | Coffee lover ☕ | Sharing ideas &
            learning every day | #Innovation #Coding
          </p>
        </div>
        <div className="font-semibold text-[16px]">
          <button className="bg-[#3B82F6] hover:bg-[#2563EB]  transition-[0.1s] py-1.5 w-full rounded-lg ">
            Edit details
          </button>
        </div>
      </div>
    </div>
  );
};
