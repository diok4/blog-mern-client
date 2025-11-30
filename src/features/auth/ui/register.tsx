import { AuthFormSegmentControl } from "@/shared/segment-control";
import { useState, type FC } from "react";
import { CustomInput } from "@/shared/custom-input";
import { useRegisterMutation } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay } from "@/shared/loader";

export const RegisterForm: FC = () => {
  const [formData, setFormData] = useState({
    avatar: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(formData).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen pt-[150px]">
      {isLoading && <LoadingOverlay />}
      <div className="w-[500px] mx-auto  bg-[#111827] rounded-xl p-5 border border-[#1F2937]">
        <form onSubmit={handleSubmit}>
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
          <div>
            <button
              type="submit"
              className="mt-5 bg-[#3B82F6] hover:bg-[#2563EB]  transition-[0.1s] py-1.5 w-full rounded-xl"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
