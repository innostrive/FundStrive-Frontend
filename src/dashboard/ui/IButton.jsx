import { Button } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";

const IButton = ({
  children,
  type = "submit",
  color,
  className,
  fullWidth,
  disabled,
  onClick,
}) => {
  return (
    <Button
      color={color}
      type={type}
      className={twMerge("bg-secondary", className)}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default IButton;
