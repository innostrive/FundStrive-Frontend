import { Input, Textarea } from "@material-tailwind/react";
import { Controller, useFormContext } from "react-hook-form";
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
      {type === "textarea" ? (
        <div>
          <label htmlFor="">{label}</label>
          <Controller
            name={name}
            render={({ field }) => (
              <textarea
                {...field}
                errorMessage={errors[name] ? errors[name].message : ""}
                type={type}
                className={twMerge(
                  "border border-gray-300 px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded min-h-32 h-auto",
                  className
                )}
                value={value}
                disabled={disabled}
                size="lg"
              />
            )}
          />
          <span className="text-xs font-medium tracking-normal leading-normal text-red-500">
            {errors[name] ? errors[name].message : ""}
          </span>
        </div>
      ) : (
        <>
          <label htmlFor="">{label}</label>
          <Controller
            name={name}
            render={({ field }) => (
              <input
                {...field}
                errorMessage={errors[name] ? errors[name].message : ""}
                type={type}
                className={twMerge(
                  "border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded",
                  className
                )}
                value={value}
                disabled={disabled}
                size="lg"
                defaultValue={defaultValue}
              />
            )}
          />
          <span className="text-xs font-medium tracking-normal leading-normal text-red-500">
            {errors[name] ? errors[name].message : ""}
          </span>
        </>
      )}
    </div>
  );
};

export default TextInput;
