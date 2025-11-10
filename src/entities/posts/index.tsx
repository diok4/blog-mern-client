import { useState, type FC } from "react";
import { FaUserCircle, FaHeart, FaComment, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

export const GetPosts: FC = () => {
  const [liked, setIsLiked] = useState(false);
  return (
    <div className="widget w-full  xl:w-1/2 bg-[#111827] rounded-xl p-5 border border-[#1F2937]">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl">
          <Link to="/profile">
            <FaUserCircle />
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <h2 className="text-[16px] font-semibold">Diyorbek Anarbayev</h2>
          </Link>
          <p className="text-[13px] text-gray-400 font-medium">
            19 november 2025y
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-[18px] font-semibold my-8px leading-[1.3]">
          First Post!!!
        </h1>
      </div>
      <div className="w-full h-auto my-4 hover:brightness-[0.93] transition-[0.2s] cursor-pointer ">
        <Link to="/">
          <img
            src="https://thumbs.dreamstime.com/b/ai-generated-picture-future-city-skyscrapers-cyberpunk-dystopian-style-284000785.jpg"
            alt="404"
            className="rounded-xl object-cover "
          />
        </Link>
      </div>
      <div className="flex items-end">
        <p className="text-[15px] text-gray-400 leading-normal line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit
          consectetur quasi, ut, vitae ducimus aspernatur facilis eligendi
          debitis atque porro. Adipisci, alias ipsum. Illo distinctio eum
          voluptates impedit quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente odit consectetur quasi, ut, vitae ducimus
          aspernatur facilis eligendi debitis atque porro. Adipisci, alias
          ipsum. Illo distinctio eum voluptates impedit quidem.
        </p>
        <Link to="/" className="text-[15px] text-[#3b83f6]">
          read
        </Link>
      </div>
      <div className="flex items-center justify-between  text-[18px] mt-8">
        <div className="flex items-center gap-4">
          <span
            onClick={() => setIsLiked(!liked)}
            className="flex items-center gap-1  cursor-pointer select-none"
          >
            {liked ? <FaHeart className="text-red-500" /> : <FaHeart />} 0
          </span>
          <span className="flex items-center gap-1  cursor-pointer select-none">
            <FaComment className="hover:text-[#3b83f6] transition-[0.1s]" />0
          </span>
        </div>

        <span className="flex items-center  cursor-pointer select-none ">
          <FaShare className="hover:text-[#3B82F6] transition-[0.1s]" />
        </span>
      </div>
    </div>
  );
};
