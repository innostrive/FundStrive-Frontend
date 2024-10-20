import { Title } from "../../Styles/Styles";
import donate from "../../assets/donate-1.jpg";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import useVolunteerData from "../../hooks/useVolunteerData";
const Volunteer = () => {
  const [volunteer] = useVolunteerData();

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
            el: ".custom-pagination", // Adding a custom class for pagination
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {volunteer.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="h-auto w-full sm:max-w-96 rounded-md bg-white px-5 sm:px-0">
                <img src={donate} alt="" className="h-52 w-full object-cover" />
                <div className="space-y-4 flex flex-col justify-center items-center p-5">
                  <h1>{data?.name}</h1>
                  <p>Perticipate 40 campaigns</p>
                  <p>From {data?.country}</p>
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
