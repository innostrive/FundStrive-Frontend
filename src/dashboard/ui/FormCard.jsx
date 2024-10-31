import { twMerge } from "tailwind-merge";
import { Add } from "../assets/icons/icons";
import { Link } from "react-router-dom";

const FormCard = ({ children, className, title, icon, path, iconTitle }) => {
  return (
    <div
      className={twMerge(
        "border  border-gray-200 rounded-md p-5 w-auto grid mx-auto bg-white",
        className
      )}
    >
      <div className="flex justify-between items-center my-5">
        <div>
          <span
            className={twMerge(
              "text-3xl font-medium tracking-normal text-center leading-normal text-secondary",
              className
            )}
          >
            {title}
          </span>
        </div>
        <div>
          <Link to={path}>
            <div className="gap-2 flex items-center">
              <span className="text-base font-medium text-secondary">
                {iconTitle}
              </span>
              {icon}
            </div>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default FormCard;
