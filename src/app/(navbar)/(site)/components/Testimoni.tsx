"use client";

import TestimoniCard from "./TestimoniCard";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";

const Testimoni = () => {
  return (
    <div className="min-h-screen relative container mx-auto py-20 text-center z-20">
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="w-full flex flex-wrap gap-10 justify-center my-10 text-left order-2 lg:order-1">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <TestimoniCard
                name="Kevin Lie"
                role="Investor"
                testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            maiores nobis qui illum nam eaque aliquid cum accusamus pariatur
            itaque!"
                imageURL="/profile.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimoniCard
                name="Kevin Lie"
                role="Investor"
                testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            maiores nobis qui illum nam eaque aliquid cum accusamus pariatur
            itaque!"
                imageURL="/profile.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimoniCard
                name="Kevin Lie"
                role="Investor"
                testimonial="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            maiores nobis qui illum nam eaque aliquid cum accusamus pariatur
            itaque!"
                imageURL="/profile.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-center lg:text-right flex flex-col gap-3 order-1 lg:order-2">
          <h1 className="font-neuro text-4xl md:text-6xl">Testimonials</h1>
          <p className="text-base md:text-xl font-montserrat">
            This is what our investors have to say about their extraordinary
            experiences partnering with us and how we've assisted them in
            achieving their investment goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
