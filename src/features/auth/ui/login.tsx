import { AuthFormSegmentControl } from "@/shared/segment-control";
import { useState, type FC } from "react";
import { CustomInput } from "@/shared/custom-input";

export const LoginForm: FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-[500px] mx-auto mt-[150px] bg-[#111827] rounded-xl p-5 border border-[#1F2937]">
      <form className="">
        <div>
          <h2 className="text-center font-semibold  text-2xl">
            Welcome back, sign in to continue...
          </h2>
        </div>
        <div className="mt-9">
          <AuthFormSegmentControl />
        </div>
        <div className="mt-3">
          <div>
            <CustomInput
              name="email"
              label="email"
              type="email"
              placeholder="Enter email@example.com"
              value={formData.email}
              onChange={handleChange}
              // error={usernameError}
            />
          </div>
          <div className="mt-3">
            <CustomInput
              name="password"
              label="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              // error={usernameError}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
