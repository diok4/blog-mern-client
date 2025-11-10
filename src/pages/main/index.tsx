import { ProfileWidget } from "@/widgets/profile";
import type { FC } from "react";
import { FaUserCircle } from "react-icons/fa";

export const MainPage: FC = () => {
  return (
    <div className="m-10 flex">
      <ProfileWidget />
      {/* entities - getPost */}
      <div className="widget mx-8 bg-[#111827] rounded-xl p-5 border border-[#1F2937]">
        <div className="">
          <div>
            <FaUserCircle />
          </div>
          <div>
            <h2>Diyorbek Anarbayev</h2>
          </div>
        </div>
        <div className="">
          <h1>First Post!!!</h1>
        </div>
        <div className="">
          <img
            src="https://thumbs.dreamstime.com/b/ai-generated-picture-future-city-skyscrapers-cyberpunk-dystopian-style-284000785.jpg"
            width="100px"
            alt="404"
          />
        </div>
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            odit consectetur quasi, ut, vitae ducimus aspernatur facilis
            eligendi debitis atque porro. Adipisci, alias ipsum. Illo distinctio
            eum voluptates impedit quidem.
          </p>
        </div>
        <div className="">Like</div>
      </div>
      <div className="widget min-w-[280px] h-96 bg-[#111827] rounded-xl p-5 border border-[#1F2937]">
        dewdew
      </div>
    </div>
  );
};
