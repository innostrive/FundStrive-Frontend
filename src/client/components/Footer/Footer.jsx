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
const Footer = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [logo] = useWebsiteLogo();
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
  return (
    <div className="py-20 bg-secondary">
      <Container>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-10 px-5 sm:px-0">
          <div className="space-y-4">
            {logo.map((footerLogo) => (
              <img
                src={imageUrl + footerLogo?.image}
                key={footerLogo?._id}
                crossOrigin="anonymous"
                alt="Footer-Logo"
                className="h-full w-full object-cover"
              />
            ))}
            {/* <h1 className="text-3xl font-bold text-text-primary uppercase">
              Fund<span className="text-primary">strive</span>
            </h1> */}
            <p className="text-sm font-light text-white leading-normal">
              We are here for humanity. We are here for help.
            </p>
          </div>
          <div className="space-y-4 grid">
            <h3 className="text-2xl font-medium text-white">Useful Links</h3>
            <a href="/#home" className="text-sm font-medium text-text-primary">
              Home
            </a>
            <a
              href="/#about-us"
              className="text-sm font-medium text-text-primary"
            >
              About us
            </a>
            <a
              href="/#campaign"
              className="text-sm font-medium text-text-primary"
            >
              Campaign
            </a>
            <a href="/#blog" className="text-sm font-medium text-text-primary">
              Blogs
            </a>
            <a
              href="/contact-us"
              className="text-sm font-medium text-text-primary"
            >
              Contact us
            </a>
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
              <a
                href="https://www.facebook.com/"
                target="__blank"
                className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-text-primary"
              >
                <BiLogoFacebook size={20} />
              </a>
              <a
                href="https://bd.linkedin.com"
                target="__blank"
                className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-text-primary"
              >
                <BiLogoLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="__blank"
                className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-text-primary"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://mail.google.com/"
                target="__blank"
                className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-text-primary"
              >
                <FaGoogle size={20} />
              </a>
            </div>
            <div></div>
          </div>
        </div>
        <div className="py-10 space-y-4">
          <hr />
          <p className="text-sm font-light text-text-primary text-center">
            Copyright 2024 Onobhoti - FUND
            <span className="text-primary">STRIVE</span> Platform All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
