import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const TextInput = ({
  type = "text",
  className,
  label,
  value,
  defaultValue,
  disabled = false,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="grid gap-2">
      <label htmlFor="">{label}</label>
      <input
        {...register(name)}
        errorMessage={errors[name] ? errors[name].message : ""}
        type={type}
        className={twMerge(
          "border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded",
          className
        )}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      <span className="text-xs font-medium tracking-normal leading-normal text-red-500">
        {errors[name] ? errors[name].message : ""}
      </span>
    </div>
  );
};

export default TextInput;
