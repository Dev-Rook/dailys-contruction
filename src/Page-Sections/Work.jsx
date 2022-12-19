import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Work.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import WorkData from "../Assets/Data/Work.json";
import TextField from "@mui/material/TextField";


const Work = () => {
  const [data, setData] = useState(WorkData);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Small_Text}>Architecture / Construction</p>
        <p className={Styles.Large_Text}>We Are Expert Builders</p>

        <button className={Styles.Project_Button}>Our Projects</button>
      </div>

      <div className={Styles.Slider_Container}>
        <Swiper
          slidesPerView={4}
          speed={2000}
          spaceBetween={0}
          modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop
          pagination={{
            dynamicBullets: true,
          }}
          mousewheel={true}
          className={Styles.Swiper}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            996: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 4,
            },
          }}
        >
          {data &&
            data.map((value) => {
              return (
                <SwiperSlide key={value?.id}>
                  <Link to={""}>
                    <div className={Styles.Project_Card}>
                      <div className={Styles.Text_Container}>
                        <p className={Styles.Title}>{value.Title}</p>
                        <p className={Styles.Creator}>{value.Creator}</p>
                      </div>
                      <div className={Styles.Diffuser}></div>
                      <div className={Styles.Image_Container}>
                      <img src={value.Image} alt="" className={Styles.Image} />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Work;
