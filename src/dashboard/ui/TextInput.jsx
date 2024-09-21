import { twMerge } from "tailwind-merge";

const TextInput = ({
  type,
  className,
  label,
  value,
  defaultValue,
  disabled = false,
  register,
  name,
  onChange,
  ...rest
}) => {
  return (
    <div className="grid gap-2">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className={twMerge(
          "border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded",
          className
        )}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        {...register(name)}
        {...rest}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
