import { twMerge } from "tailwind-merge";

export const Title = ({ className, title }) => {
  return (
    <h1 className={twMerge("text-center text-4xl font-medium", className)}>
      {title}
    </h1>
  );
};

export const Button = ({ className, label }) => {
  return (
    <button
      className={twMerge(
        "h-10 w-auto px-4 py-2 rounded-md bg-[#f47721] text-white",
        className
      )}
    >
      {label}
    </button>
  );
};
