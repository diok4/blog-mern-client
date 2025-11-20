import { GetPosts } from "@/entities/posts";
import { HashTagsWidget } from "@/widgets/hashtags";
import { ProfileWidget } from "@/widgets/profile";
import type { FC } from "react";

export const MainPage: FC = () => {
  return (
    <div className="my-10 mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3">
        <ProfileWidget />
      </div>

      <div className="lg:col-span-6 flex flex-col gap-6">
        <GetPosts />
      </div>

      <div className="lg:col-span-3">
        <HashTagsWidget />
      </div>
    </div>
  );
};
