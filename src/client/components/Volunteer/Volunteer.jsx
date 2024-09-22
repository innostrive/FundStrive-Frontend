import { Title } from "../../Styles/Styles";
import donate from "../../assets/donate-1.jpg";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Volunteer = () => {
  const volunteerData = [
    {
      img: "",
      name: "Robert Richard",
      participatedCampaign: "50",
      country: "United States",
      socialMedia: {
        facebook: "https://facebook.com/robertrichard",
        instagram: "https://instagram.com/robertrichard",
        twitter: "https://twitter.com/robertrichard",
      },
    },
    {
      img: "",
      name: "Emily Watson",
      participatedCampaign: "40",
      country: "Canada",
      socialMedia: {
        facebook: "https://facebook.com/emilywatson",
        instagram: "https://instagram.com/emilywatson",
        twitter: "https://twitter.com/emilywatson",
      },
    },
    {
      img: "",
      name: "James Anderson",
      participatedCampaign: "30",
      country: "United Kingdom",
      socialMedia: {
        facebook: "https://facebook.com/jamesanderson",
        instagram: "https://instagram.com/jamesanderson",
        twitter: "https://twitter.com/jamesanderson",
      },
    },
    {
      img: "",
      name: "Olivia Johnson",
      participatedCampaign: "25",
      country: "Australia",
      socialMedia: {
        facebook: "https://facebook.com/oliviajohnson",
        instagram: "https://instagram.com/oliviajohnson",
        twitter: "https://twitter.com/oliviajohnson",
      },
    },
    {
      img: "",
      name: "Michael Brown",
      participatedCampaign: "35",
      country: "Germany",
      socialMedia: {
        facebook: "https://facebook.com/michaelbrown",
        instagram: "https://instagram.com/michaelbrown",
        twitter: "https://twitter.com/michaelbrown",
      },
    },
    {
      img: "",
      name: "Sophia Davis",
      participatedCampaign: "20",
      country: "France",
      socialMedia: {
        facebook: "https://facebook.com/sophiadavis",
        instagram: "https://instagram.com/sophiadavis",
        twitter: "https://twitter.com/sophiadavis",
      },
    },
  ];

  return (
    <div className="bg-[#f3f4f7] py-20">
      <Container>
        <div className="py-20">
          <Title title="Our best volunteers" />
          <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
        </div>
        <Swiper
          spaceBetween={30}
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
          {volunteerData.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="h-auto w-full max-w-96 rounded-md bg-white">
                <img src={donate} alt="" className="h-52 w-full object-cover" />
                <div className="space-y-4 flex flex-col justify-center items-center p-5">
                  <h1>{data?.name}</h1>
                  <p>Perticipate {data?.participatedCampaign} campaigns</p>
                  <p>From {data?.country}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default Volunteer;
