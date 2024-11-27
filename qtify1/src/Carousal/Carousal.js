import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import styles from "./Carousal.module.css";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarouselLeftNavigation from "./CarousalLeftNavigation/CarousalLeftNavigation";
import CarouselRightNavigation from "./CarousalRightNavigation/CarousalRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>;
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <div>
          <CarouselLeftNavigation />
          <CarouselRightNavigation />
        </div>
        {data.map((ele) => (
  <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
))}
      </Swiper>
    </div>
  );
}

export default Carousel;