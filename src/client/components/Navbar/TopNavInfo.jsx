import { Link } from "react-router-dom";
import { Email, Phone } from "../../../dashboard/assets/icons/icons";
import useWebsiteLogo from "../../hooks/useWebsiteLogo";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const TopNavInfo = ({ info }) => {
  const [logo] = useWebsiteLogo();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center w-full h-56 sm:h-32 sm:py-0 py-5 gap-5">
      <div className="flex gap-2 items-center">
        <Link to="/">
          {" "}
          {logo.map((image) => (
            <img
              src={imageUrl + image?.image}
              key={image?._id}
              alt="logo"
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
          ))}
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
      <LanguageSelector></LanguageSelector>
    </div>
  );
};

export default TopNavInfo;
