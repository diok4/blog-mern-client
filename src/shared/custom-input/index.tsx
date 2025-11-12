import type { FC } from "react";
import type { ChangeEvent } from "react";

interface IInput {
  type: string;
  value?: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  label: string;
}
export const CustomInput: FC<IInput> = ({
  type,
  value,
  onChange,
  name,
  placeholder,
  label,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-200">
        {label}
      </label>
      <input
        className="h-10 bg-[#1F2937] border border-[#1F2937] rounded-xl px-4 text-white placeholder-[#9CA3AF] focus:outline-none focus:ring-0"
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
