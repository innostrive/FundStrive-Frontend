import Container from "../Container/Container";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="py-20 bg-[#2B2A27]">
      <Container>
        <div className="grid grid-cols-4 gap-10">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-[#f47721] uppercase">
              Onobhoti
            </h1>
            <p className="text-sm font-light text-white leading-normal">
              We are here for humanity. We are here for help.
            </p>
          </div>
          <div className="space-y-4 grid">
            <h3 className="text-2xl font-medium text-white">Useful Links</h3>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              Home
            </a>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              About us
            </a>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              Campaign
            </a>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              Blogs
            </a>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              Contact us
            </a>
          </div>
          <div className="space-y-4 grid">
            <h3 className="text-2xl font-medium text-white">Causes</h3>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              Save Nature
            </a>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              Adoption
            </a>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              Homeless Child
            </a>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              Save Baby
            </a>
            <a href="" className="text-sm font-medium text-[#f3f4f7]">
              Healthy Food
            </a>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-medium tracking-wide text-[#f3f4f7]">
              Subscribe
            </h1>
            <div className="grid grid-cols-12">
              {" "}
              <input
                type="text"
                className="focus:outline-none h-10 p-1 col-span-8"
              />
              <button className="uppercase text-base text-[#f3f4f7] tracking-normal font-normal bg-[#f47721] h-10 w-auto px-2 col-span-4">
                Send
              </button>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#f47721] text-[#f3f4f7]">
                <BiLogoFacebook size={20} />
              </div>
              <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#f47721] text-[#f3f4f7]">
                <BiLogoLinkedin size={20} />
              </div>
              <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#f47721] text-[#f3f4f7]">
                <FaInstagram size={20} />
              </div>
              <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#f47721] text-[#f3f4f7]">
                <FaGoogle size={20} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="py-10 space-y-4">
          <hr />
          <p className="text-sm font-light text-[#f3f4f7] text-center">
            Copyright 2024 Onobhoti - CrowdFundig Platform All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
