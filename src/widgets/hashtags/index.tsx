import type { FC } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

export const HashTagsWidget: FC = () => {
  return (
    <div className="widget w-full  xl:w-1/5 h-full bg-[#111827] rounded-xl p-5 border border-[#1F2937] text-center">
      <div className="mb-3">
        <h2 className="flex items-center justify-center gap-2 text-[18px] font-semibold">
          <FaArrowTrendUp className="text-[#2563EB]" /> Popular
        </h2>
      </div>
      <div>
        <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
          #AI news
        </span>
        <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
          #Tech news
        </span>
        <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
          #Med news
        </span>
        <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
          #AI news
        </span>
        <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
          #AI news
        </span>
        <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
          #AI news
        </span>
      </div>
    </div>
  );
};
