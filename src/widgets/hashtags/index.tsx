import type { FC } from "react";

export const HashTagsWidget: FC = () => {
  return (
    <div className="widget w-full  xl:w-1/5 h-full bg-[#111827] rounded-xl p-5 border border-[#1F2937] text-center">
      <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
        #AI news
      </span>{" "}
      <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
        #Tech news
      </span>{" "}
      <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
        #Med news
      </span>{" "}
      <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
        #AI news
      </span>{" "}
      <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
        #AI news
      </span>{" "}
      <span className="text-[13px] text-gray-500 bg-gray-400 rounded-2xl py-1 px-4 cursor-pointer">
        #AI news
      </span>
    </div>
  );
};
