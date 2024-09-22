import donate from "../../assets/donate-1.jpg";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
const TeamMemberSlider = () => {
  const teamMember = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "https://example.com/images/johndoe.jpg",
      socialMedia: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      image: "https://example.com/images/janesmith.jpg",
      socialMedia: {
        facebook: "https://facebook.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "CFO",
      image: "https://example.com/images/michaelbrown.jpg",
      socialMedia: {
        facebook: "https://facebook.com/michaelbrown",
        instagram: "https://instagram.com/michaelbrown",
        linkedin: "https://linkedin.com/in/michaelbrown",
        twitter: "https://twitter.com/michaelbrown",
      },
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "CMO",
      image: "https://example.com/images/emilydavis.jpg",
      socialMedia: {
        facebook: "https://facebook.com/emilydavis",
        instagram: "https://instagram.com/emilydavis",
        linkedin: "https://linkedin.com/in/emilydavis",
        twitter: "https://twitter.com/emilydavis",
      },
    },
    {
      id: 5,
      name: "Chris Johnson",
      position: "COO",
      image: "https://example.com/images/chrisjohnson.jpg",
      socialMedia: {
        facebook: "https://facebook.com/chrisjohnson",
        instagram: "https://instagram.com/chrisjohnson",
        linkedin: "https://linkedin.com/in/chrisjohnson",
        twitter: "https://twitter.com/chrisjohnson",
      },
    },
    {
      id: 6,
      name: "Sophia Martinez",
      position: "Head of HR",
      image: "https://example.com/images/sophiamartinez.jpg",
      socialMedia: {
        facebook: "https://facebook.com/sophiamartinez",
        instagram: "https://instagram.com/sophiamartinez",
        linkedin: "https://linkedin.com/in/sophiamartinez",
        twitter: "https://twitter.com/sophiamartinez",
      },
    },
  ];

  return (
    <div className="py-20">
      <Container>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {teamMember.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="h-auto w-full max-w-80 rounded-md bg-white border border-gray-200 group">
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-80 w-full">
                    <img
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                      src={donate}
                      alt=""
                    />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-20">
                    {/* <h1 class="text-xl font-medium text-white">Social</h1> */}
                    <div class="flex gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
                  </div>
                </div>
                <div className="py-5 space-y-5 text-center">
                  <h1 className="text-base font-medium text-[#2B2A27]">
                    {data?.name}
                  </h1>
                  <span>{data?.position}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default TeamMemberSlider;
