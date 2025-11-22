import type { FC } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

export const HashTagsWidget: FC = () => {
  const hashTags = [
    "#AI",
    "#MachineLearning",
    "#TechNews",
    "#Blockchain",
    "#Web3",
    "#Startups",
    "#DataScience",
    "#HealthTech",
    "#MedNews",
    "#Innovation",
    "#Programming",
    "#JavaScript",
    "#Python",
    "#ReactJS",
    "#OpenAI",
    "#Crypto",
    "#NFT",
  ];

  return (
    <div className="widget w-full h-full bg-[#111827] rounded-xl p-5 border border-[#1F2937] text-center ">
      <div className="mb-3">
        <h2 className="flex items-center justify-center gap-2 text-[18px] font-semibold">
          <FaArrowTrendUp className="text-[#2563EB]" /> Popular
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {hashTags.map((tag, i) => (
          <span
            key={i}
            className="text-sm md:text-base text-gray-700 bg-gray-400 rounded-2xl py-1 px-4 leading-5 cursor-pointer hover:bg-gray-300 transition"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
