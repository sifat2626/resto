import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// Import required modules
import { Navigation } from "swiper/modules"
import Slide from "./Slide"

export default function PopularSlider({ prevRef, nextRef }) {
  return (
    <Swiper
      slidesPerView={4}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      spaceBetween={30}
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
      }}
      className="mySwiper"
    >
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <SwiperSlide key={index}>
          <Slide index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
