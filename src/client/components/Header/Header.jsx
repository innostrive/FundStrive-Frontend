import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Button } from "../../Styles/Styles";
import { useEffect, useState } from "react";
import useHeaderCarusel from "../../hooks/useHeaderCarusel";
import useCaruselTitle from "../../../dashboard/hooks/useCaruselTitle";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  const [carusel] = useHeaderCarusel();
  const [caruselTitle] = useCaruselTitle();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [animateText, setAnimateText] = useState("visible");

  const handleSlideChange = () => {
    setAnimateText("hidden");
    setTimeout(() => {
      setAnimateText("visible");
    }, 500);
  };

  const [navigateButton, setNavigateButton] = useState(true);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setNavigateButton(false);
    } else {
      setNavigateButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className="scroll-mt-48">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        onSlideChange={handleSlideChange}
      >
        {carusel.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={imageUrl + image?.image}
                alt=""
                className="w-full sm:h-[80vh] h-[60vh] object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4">
                <motion.h1
                  className="sm:text-5xl text-3xl font-bold text-text-primary"
                  variants={textVariants}
                  initial="hidden"
                  animate={animateText}
                  transition={
                    animateText === "visible"
                      ? { duration: 0.8 }
                      : { duration: 0 }
                  }
                >
                  {caruselTitle[index]?.key}
                </motion.h1>

                <motion.p
                  className="sm:text-base text-sm text-center font-normal text-text-primary"
                  variants={textVariants}
                  initial="hidden"
                  animate={animateText}
                  transition={
                    animateText === "visible"
                      ? { duration: 0.8, delay: 0.2 }
                      : { duration: 0, delay: 0 }
                  }
                >
                  {caruselTitle[index]?.value}
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
                    <Button
                      label="Donate"
                      className="bg-primary hover:bg-gray-200 hover:text-primary duration-200 ease-in text-text-primary rounded-none uppercase"
                    />
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
