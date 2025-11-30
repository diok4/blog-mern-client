import type { FC } from "react";
import meme from "@/app/assets/img/meme.png";

export const SettingsPage: FC = () => {
  return (
    <div className="flex items-start justify-center mx-auto my-auto">
      <img src={meme} width="100%" alt="404" />
    </div>
  );
};
