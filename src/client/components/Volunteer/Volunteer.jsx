import { Title } from "../../Styles/Styles";
import volunteer2 from "../../assets/volunteer.jpg";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import useVolunteerData from "../../hooks/useVolunteerData";

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
const Volunteer = () => {
  const [volunteer] = useVolunteerData();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  return (
    <div className="bg-[#f3f4f7] py-20">
      <Container>
        <div className="py-20">
          <Title title="Our best volunteers" />
          <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {volunteer.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="relative">
                <div className="h-auto min-h-96 w-full grid grid-rows-12 justify-items-center shadow-lg rounded-xl sm:max-w-96 bg-white px-5 sm:px-0">
                  <div
                    className="row-span-8 rounded-lg mt-5"
                    style={{
                      backgroundImage: `url(${volunteer2})`,
                      backgroundPosition: "center",
                      objectFit: "cover",
                      height: "50%",
                      width: "90%",
                    }}
                  >
                    <img
                      src={imageUrl + data?.image}
                      crossOrigin="anonymous"
                      alt="volunteer"
                      className="h-24 w-24 rounded-full object-cover bg-green-500 p-1 relative flex mx-auto top-24"
                    />
                  </div>
                  <div className="row-span-4 grid justify-items-center items-center relative -top-10 space-y-2 shadow-none">
                    <div className="flex items-center gap-2">
                      <h1 className="text-lg font-bold text-black leading-normal">
                        {data?.name}
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="blue"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#4caf50"
                          strokeWidth="2"
                          fill="#4caf50"
                        />
                        <path
                          d="M9 12l2 2 4-4"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="pink"
                      >
                        <path d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                      <p className="text-sm font-light text-secondary">
                        lives in {data?.country}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="purple"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-2.83A19.51 19.51 0 0 1 4.92 12.8 19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72 12.16 12.16 0 0 0 .7 2.71 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.37-1.37a2 2 0 0 1 2.11-.45 12.16 12.16 0 0 0 2.71.7 2 2 0 0 1 1.72 2z" />
                      </svg>

                      <p className="text-sm font-light text-secondary">
                        Phone {data?.phone_number}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                      </svg>

                      <p className="text-sm font-light text-secondary">
                        Email {data?.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-5 flex justify-center"></div>
      </Container>
    </div>
  );
};

export default Volunteer;
