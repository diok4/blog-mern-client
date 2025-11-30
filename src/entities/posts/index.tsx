import { useState, type FC } from "react";
import { FaUserCircle, FaHeart, FaComment, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "@/features/post/api/postApi";
import type { IPost } from "@/features/post/api/postApi";
import { format } from "date-fns";
import { LoadingOverlay } from "@/shared/loader";

export const GetPosts: FC = () => {
  const [liked, setIsLiked] = useState(false);
  const { data: posts, isLoading } = useGetPostsQuery();

  return (
    <>
      {isLoading && <LoadingOverlay />}
      {posts?.posts?.map((post: IPost) => (
        <div
          key={post._id}
          className="widget w-full bg-[#111827] rounded-xl p-5 border border-[#1F2937]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">
              <Link to={`user/${post?.author?._id}`}>
                <FaUserCircle />
              </Link>
            </div>
            <div>
              <Link to={`user/${post?.author?._id}`}>
                <h2 className="text-[16px] font-semibold">
                  {post?.author?.username}
                </h2>
              </Link>
              <p className="text-[13px] text-gray-400 font-medium">
                {format(new Date(post?.createdAt), "dd.MM.yyyy HH:mm")}
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[18px] font-semibold my-8px leading-[1.3]">
              {post?.title}
            </h1>
          </div>
          <div className="w-full h-auto my-4 hover:brightness-[0.93] transition-[0.2s] cursor-pointer ">
            <Link to={`post/${post?._id}`}>
              <img
                src="https://thumbs.dreamstime.com/b/content-writer-vector-creative-circular-outline-illustration-content-writer-vector-creative-circular-illustration-made-127088791.jpg"
                alt="404"
                width="100%"
                className="rounded-xl object-fit h-[600px]"
              />
            </Link>
          </div>
          <div className="flex items-end">
            <div
              className="text-xl text-gray-400 leading-normal line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.text }}
            />

            <Link
              to={`post/${post?._id}`}
              className="text-[15px] text-[#3b83f6]"
            >
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
                <FaComment className="hover:text-[#3b83f6] transition-[0.1s]" />
                0
              </span>
            </div>

            <span className="flex items-center  cursor-pointer select-none ">
              <FaShare className="hover:text-[#3B82F6] transition-[0.1s]" />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
