import { GetPosts } from "@/entities/posts";
import { HashTagsWidget } from "@/widgets/hashtags";
import { ProfileWidget } from "@/widgets/profile";
import type { FC } from "react";

export const MainPage: FC = () => {
  return (
    <div className="my-10 mx-5 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
      {/* Profile Widget  */}
      <ProfileWidget />
      {/* entities - getPost */}
      <GetPosts />
      {/* HashTags Widget  */}
      <HashTagsWidget />
    </div>
  );
};
