import { AuthFormSegmentControl } from "@/shared/segment-control";
import { useState, type FC } from "react";
import { CustomInput } from "@/shared/custom-input";

export const RegisterForm: FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-[500px] mx-auto mt-[150px] bg-[#111827] rounded-xl p-5 border border-[#1F2937]">
      <form className="">
        <div>
          <h2 className="text-center font-semibold  text-2xl">
            Welcome, sign up to continue...
          </h2>
        </div>
        <div className="mt-9">
          <AuthFormSegmentControl />
        </div>

        <div className="mt-3">
          <div>
            <CustomInput
              name="username"
              label="username"
              type="text"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              // error={usernameError}
            />
          </div>
          <div className="mt-3">
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
          <div className="mt-3">
            <CustomInput
              name="confirmPassword"
              label="confirm password"
              type="password"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              // error={usernameError}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
