import { Link } from "react-router-dom";
import { Email, Phone } from "../../../dashboard/assets/icons/icons";

const TopNavInfo = ({ info }) => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center w-full h-56 sm:h-32 sm:py-0 py-5 gap-5">
      <div className="flex gap-2 items-center">
        <Link to="/">
          {" "}
          <h1 className="text-3xl font-bold uppercase text-secondary">
            Fund<span className="text-primary">strive</span>
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Email />
        <div>
          <h1 className="text-xl font-semibold">Email</h1>
          <span className="text-sm font-normal">{info?.key}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Phone />
        <div>
          <h1 className="text-xl font-semibold">Phone</h1>
          <span className="text-sm font-normal">{info?.value}</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavInfo;
