import { Link } from "react-router-dom";
import { Email, Phone } from "../../../dashboard/assets/icons/icons";
import useWebsiteLogo from "../../hooks/useWebsiteLogo";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const TopNavInfo = ({ info }) => {
  const [logo] = useWebsiteLogo();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center w-full h-60 sm:h-32 sm:py-0 py-5 gap-5">
      <div className="flex gap-2 items-center">
        <Link to="/">
          {/* {" "}
          {logo.map((image) => (
            <img
              src={imageUrl + image?.image}
              key={image?._id}
              alt="logo"
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
          ))} */}
          <h1 className="text-3xl font-bold text-secondary uppercase">
            Fund<span className="text-primary">strive</span>
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-3 sm:ml-0 ml-[97px]">
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
      <div>
        <LanguageSelector></LanguageSelector>
      </div>
    </div>
  );
};

export default TopNavInfo;
