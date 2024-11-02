import Container from "../Container/Container";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import useWebsiteLogo from "../../hooks/useWebsiteLogo";
import useNavMenus from "../../hooks/useNavMenus";
import useFooterData from "../../../dashboard/hooks/useFooterData";
import useSocialMediaData from "../../../dashboard/hooks/useSocialMediaData";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const footerData = useFooterData();
  const [socialMediaLink] = useSocialMediaData();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [logo] = useWebsiteLogo();
  const navmenus = useNavMenus();
  const activeMenus = navmenus.filter(
    (item) => item.status === "Active" && item.slug === "NAVMENU"
  );
  const [isLoading, setIsLoading] = useState();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    axios.post(`${URL}/subscribers`, data).then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        toast.success(res.data.message);
        reset();
      } else {
        toast.warning("Something wrong!!!");
      }
    });
  };
  const socialIcons = [
    { name: "LinkedIn", icon: <BiLogoLinkedin className="size-5" /> },
    { name: "Google", icon: <FaXTwitter className="size-5" /> },
    { name: "Instagram", icon: <FaInstagram className="size-5" /> },
    { name: "Facebook", icon: <BiLogoFacebook className="size-5" /> },
  ];

  return (
    <div className="py-20 bg-secondary">
      <Container>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-10 px-5 sm:px-0">
          <div className="space-y-4">
            {/* {logo.map((footerLogo) => (
              <img
                src={imageUrl + footerLogo?.image}
                key={footerLogo?._id}
                crossOrigin="anonymous"
                alt="Footer-Logo"
                className="h-full w-full object-cover"
              />
            ))} */}
            <h1 className="text-3xl font-bold text-text-primary uppercase">
              Fund<span className="text-primary">strive</span>
            </h1>
            <p className="text-sm font-light text-white leading-normal">
              We are here for humanity. We are here for help.
            </p>
          </div>
          <div className="space-y-4 grid">
            <h3 className="text-2xl font-medium text-white">Useful Links</h3>
            {activeMenus.map((menu) => (
              <a
                href={menu?.value}
                key={menu?._id}
                className="text-sm font-medium text-text-primary"
              >
                {menu?.key}
              </a>
            ))}
          </div>
          <div className="space-y-4 grid">
            <h3 className="text-2xl font-medium text-white">Causes</h3>
            <a href="" className="text-sm font-medium text-text-primary">
              Save Nature
            </a>
            <a href="" className="text-sm font-medium text-text-primary">
              Adoption
            </a>
            <a href="" className="text-sm font-medium text-text-primary">
              Homeless Child
            </a>
            <a href="" className="text-sm font-medium text-text-primary">
              Save Baby
            </a>
            <a href="" className="text-sm font-medium text-text-primary">
              Healthy Food
            </a>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-medium tracking-wide text-text-primary">
              Subscribe
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-12">
                {" "}
                <input
                  type="text"
                  className="focus:outline-none h-10 p-1 col-span-8"
                  {...register("email", { required: "Email is required" })}
                />
                <button
                  type="submit"
                  className="uppercase text-base text-text-primary tracking-normal font-normal bg-primary hover:bg-white hover:text-primary duration-150 ease-in h-10 w-auto px-2 col-span-4"
                  disabled={isLoading && true}
                >
                  {isLoading ? (
                    <div className="flex justify-center items-center gap-2">
                      <Spinner /> Sending...
                    </div>
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </form>
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
            <div className="flex gap-4">
              {socialMediaLink.map((link, index) => (
                <a
                  key={index}
                  href={link?.value}
                  target="__blank"
                  className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-text-primary hover:bg-white hover:text-primary duration-300 delay-75 ease-in-out cursor-pointer"
                >
                  {socialIcons[index]?.icon}
                </a>
              ))}
            </div>
            <div></div>
          </div>
        </div>
        <div className="py-10 space-y-4">
          <hr />
          {footerData.map((data) => (
            <p
              className="text-sm font-light text-text-primary text-center"
              key={data?._id}
            >
              {data?.value}
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
