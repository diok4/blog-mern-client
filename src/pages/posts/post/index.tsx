import { useState, type FC } from "react";
import {
  FaUserCircle,
  FaHeart,
  FaComment,
  FaShare,
  FaArrowLeft,
} from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "@/features/post/api/postApi";
import { LoadingOverlay } from "@/shared/loader";
import { format } from "date-fns";

export const PostPage: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(id as string);
  const [liked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (!data?.post) return <LoadingOverlay />;

  const post = data.post;

  const handleBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}

      <button
        onClick={handleBack}
        className="
          absolute left-2 top-5 z-20
          hidden items-center gap-1
          rounded-2xl border border-slate-800
          px-3 py-1 text-sm font-bold
          sm:left-5 sm:inline-flex sm:px-5 sm:text-base
        "
      >
        <FaArrowLeft />
        <span>Home</span>
      </button>

      <div
        key={post._id}
        className="
          mx-auto mt-16 w-full max-w-6xl
          rounded-xl border border-slate-800
          bg-slate-900 px-4 py-4
          sm:mt-20 sm:px-5 sm:py-5
        "
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="text-3xl sm:text-4xl">
            <Link to={`/user/${post.author?._id}`}>
              <FaUserCircle />
            </Link>
          </div>
          <div>
            <Link to={`/user/${post.author?._id}`}>
              <h2 className="text-[14px] sm:text-[16px] font-semibold">
                {post.author?.username}
              </h2>
            </Link>
            <p className="text-[11px] sm:text-[13px] font-medium text-slate-400">
              {format(new Date(post.createdAt), "dd.MM.yyyy HH:mm")}
            </p>
          </div>
        </div>

        <h1 className="my-2 text-[16px] font-semibold leading-[1.3] sm:my-3 sm:text-[18px]">
          {post.title}
        </h1>

        <div className="my-3 sm:my-4">
          <img
            src="https://thumbs.dreamstime.com/b/content-writer-vector-creative-circular-outline-illustration-content-writer-vector-creative-circular-illustration-made-127088791.jpg"
            alt="404"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex items-start">
          <div
            className="text-[14px] leading-relaxed text-slate-100 sm:text-[16px]"
            dangerouslySetInnerHTML={{ __html: post.text }}
          />
        </div>

        <div className="mt-6 flex items-center justify-between text-[16px] sm:mt-8 sm:text-[18px]">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsLiked(!liked)}
              className="
                flex items-center gap-1
                cursor-pointer select-none
                transition-colors duration-150
                hover:text-red-500
              "
            >
              {liked ? <FaHeart className="text-red-500" /> : <FaHeart />}
              <span>0</span>
            </button>

            <button
              type="button"
              className="
                flex items-center gap-1
                cursor-pointer select-none
                transition-colors duration-150
                hover:text-blue-500
              "
            >
              <FaComment />
              <span>0</span>
            </button>
          </div>

          <button
            type="button"
            className="
              flex cursor-pointer select-none
              transition-colors duration-150
              hover:text-blue-500
            "
          >
            <FaShare />
          </button>
        </div>
      </div>
    </>
  );
};
