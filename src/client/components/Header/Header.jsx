import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
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
import { useState } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  const [animateText, setAnimateText] = useState("visible");

  const handleSlideChange = () => {
    setAnimateText("hidden");
    setTimeout(() => {
      setAnimateText("visible");
    }, 500);
  };

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
        onSlideChange={handleSlideChange}
      >
        {[donate1, donate2, donate3].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={image}
                alt=""
                className="w-full h-[80vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4">
                <motion.h1
                  className="text-5xl font-bold text-white"
                  variants={textVariants}
                  initial="hidden"
                  animate={animateText}
                  transition={
                    animateText === "visible"
                      ? { duration: 0.8 }
                      : { duration: 0 }
                  }
                >
                  Sponsor a Child
                </motion.h1>

                <motion.p
                  className="text-base font-normal text-[#f3f4f7]"
                  variants={textVariants}
                  initial="hidden"
                  animate={animateText}
                  transition={
                    animateText === "visible"
                      ? { duration: 0.8, delay: 0.2 }
                      : { duration: 0, delay: 0 }
                  }
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eligendi, illum.
                </motion.p>

                <Link to="/campaign-list">
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate={animateText}
                    transition={
                      animateText === "visible"
                        ? { duration: 0.8, delay: 0.4 }
                        : { duration: 0, delay: 0 }
                    }
                  >
                    <Button label="Donate" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Header;
