import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import veg from "../assets/images/veg-burg.png"
import shrimp from "../assets/images/shrimp.png"
import french from "../assets/images/french-fries.png"
import pizza from "../assets/images/pizza.png"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// Import required modules
import { Navigation } from "swiper/modules"
import Slide from "./Slide"

const slides = [
  {
    name: "Vegetables Burger",
    image: veg,
    details: "Barbecue Italian cuisine burger",
  },
  {
    name: "Special Pizza",
    image: pizza,
    details: "Barbecue Italian cuisine pizza",
  },
  {
    name: "Special French Fries",
    image: french,
    details: "Barbecue Italian cuisine",
  },
  {
    name: "Cuisine Chicken",
    image: shrimp,
    details: "Japanese Cuisine Chicken",
  },
  {
    name: "Vegetables Burger",
    image: veg,
    details: "Barbecue Italian cuisine burger",
  },
  {
    name: "Special Pizza",
    image: pizza,
    details: "Barbecue Italian cuisine pizza",
  },
]

export default function PopularSlider({ prevRef, nextRef }) {
  return (
    <Swiper
      spaceBetween={30}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
      }}
      breakpoints={{
        0: { slidesPerView: 1 }, // 1 slide on mobile
        768: { slidesPerView: 2 }, // 2 slides on medium screens
        1024: { slidesPerView: 3 }, // 4 slides on large screens
        1440: { slidesPerView: 4 }, // 4 slides on large screens
      }}
      className="mySwiper"
    >
      {slides.map((item) => (
        <SwiperSlide key={item.name}>
          <Slide name={item.name} image={item.image} details={item.details} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
