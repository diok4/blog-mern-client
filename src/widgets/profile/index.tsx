import { useState, type FC } from "react";
import { FaUserCircle } from "react-icons/fa";

export const ProfileWidget: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      {isAuth ? (
        <div className="widget min-w-[280px] h-96 bg-[#111827] rounded-xl p-5 border border-[#1F2937] text-center">
          <div className="text-8xl text-[#1F2937] my-4 flex justify-center">
            <FaUserCircle />
          </div>
          <div className="my-4">
            <h2 className="font-bold">Diyorbek Anarbayev</h2>
            <p className="text-[#9CA3AF] leading-[1.4]">Software Engineer</p>
          </div>
          <div className="font-semibold">
            <button className="bg-[#3B82F6] hover:bg-[#2563EB] cursor-pointer transition-[0.1s] py-1.5 w-full rounded-lg ">
              View Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="widget min-w-[280px] h-[320px] bg-[#111827] rounded-xl p-5 border border-[#1F2937] text-center">
          <div className="text-8xl text-[#1F2937] my-4 flex justify-center">
            <FaUserCircle />
          </div>
          <div className="my-4">
            <h2 className="font-bold">Welcome!</h2>
            <p className="text-[#9CA3AF] leading-[1.4]">
              Log in to create posts and engage with the community.
            </p>
          </div>
          <div className="font-semibold">
            <button className="bg-[#3B82F6] hover:bg-[#2563EB] cursor-pointer transition-[0.1s] py-1.5 w-full rounded-lg ">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};
