import { GetPosts } from "@/entities/posts";
import { HashTagsWidget } from "@/widgets/hashtags";
import { ProfileWidget } from "@/widgets/profile";
import type { FC } from "react";

export const MainPage: FC = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-9 flex gap-5">
      <div className="hidden max-w-[300px] md:flex flex-col gap-5 sticky top-21 self-start">
        <ProfileWidget />
        <HashTagsWidget />
      </div>

      <div className="flex flex-col  w-full ml-auto gap-6">
        <GetPosts />
      </div>
    </div>
  );
};
