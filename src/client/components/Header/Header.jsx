import { Swiper, SwiperSlide } from "swiper/react";
import donate1 from "../../assets/donate-1.jpg";
import donate2 from "../../assets/donate-2.jpg";
import donate3 from "../../assets/donate-3.jpg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { Button } from "../../Styles/Styles";

const Header = () => {
  return (
    <section id="home" className="scroll-mt-48">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={donate1}
              alt=""
              className="w-full h-[80vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 animate-fadeUp transform translate-y-[100px]">
              <h1 className="text-5xl font-bold text-white">Sponsor a Child</h1>
              <p className="text-base font-normal text-[#f3f4f7]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, illum.
              </p>
              <Link to="/campaign-list">
                <Button label="Donate" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={donate2}
              alt=""
              className="w-full h-[80vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 animate-fadeUp transform translate-y-[100px]">
              <h1 className="text-5xl font-bold text-white">Sponsor a Child</h1>
              <p className="text-base font-normal text-[#f3f4f7]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, illum.
              </p>
              <Link to="/campaign-list">
                <Button label="Donate" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={donate3}
              alt=""
              className="w-full h-[80vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 animate-fadeUp transform translate-y-[100px]">
              <h1 className="text-5xl font-bold text-white">Sponsor a Child</h1>
              <p className="text-base font-normal text-[#f3f4f7]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, illum.
              </p>
              <Link to="/campaign-list">
                <Button label="Donate" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Header;
