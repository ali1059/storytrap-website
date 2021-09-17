import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

import Slide1 from "../../../public/assets/slide1.png";
import Slide2 from "../../../public/assets/slide2.png";
import Slide3 from "../../../public/assets/slide3.png";
import Slide4 from "../../../public/assets/slide4.png";
import Slide5 from "../../../public/assets/slide5.png";
import { transform } from "dom7";

// install Swiper modules
SwiperCore.use([Pagination]);

// React.useEffect(() => {
//   console.log("In USEEFFECT");
//   Swiper.autoplay.start();
// }, []);

const Slides = [
  { name: "", src: Slide1 },
  { name: "", src: Slide2 },
  { name: "", src: Slide3 },
  { name: "", src: Slide4 },
  { name: "", src: Slide5 },
];

const NewStoriesSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={false}
        loop={true}
        autoplay={{ delay: 1, disableOnInteraction: true }}
        freeMode={true}
        speed={5000}
        breakpoints={{
          300: { slidesPerView: 1.5, spaceBetween: 20 },

          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 40,
          },
        }}
        className="my-swiper"
      >
        {Slides.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <Image
                className={"activeSlide "}
                src={item.src}
                width={380}
                height={530}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NewStoriesSlider;
