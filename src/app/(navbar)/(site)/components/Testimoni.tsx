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

const dataTestimoni = [
  {
    name: "David",
    role: "Investor",
    testimonial:
      "Saya sangat senang telah bermitra dengan tim ini. Mereka tidak hanya memiliki visi yang jelas, tetapi juga memiliki kemampuan untuk mengubah visi itu menjadi kenyataan.",
    imageURL: "/landing/testimoni/investor1.jpg",
  },
  {
    name: "Jeremy",
    role: "Investor",
    testimonial:
      "Saya telah berinvestasi dalam banyak startup sepanjang karir saya, tetapi pengalaman saya dengan perusahaan ini benar-benar istimewa.",
    imageURL: "/landing/testimoni/investor2.jpg",
  },
  {
    name: "Viktor",
    role: "CEO of TechnoInc",
    testimonial:
      "Kami sangat senang mendapatkan dukungan dari investor disini. Investasi mereka telah memungkinkan kami untuk memperluas bisnis kami dan mewujudkan visi kami.",
    imageURL: "/landing/testimoni/boss1.jpg",
  },
  {
    name: "Peter",
    role: "CEO of HealthTech",
    testimonial:
      "Investor kami adalah mitra yang luar biasa. Mereka tidak hanya memberikan dana, tetapi juga pengetahuan dan jaringan yang sangat berharga. Bersama-sama, kami telah mencapai pencapaian luar biasa.",
    imageURL: "/landing/testimoni/boss2.jpg",
  },
];

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
            {dataTestimoni.map((testimoni) => (
              <SwiperSlide key={testimoni.name}>
                <TestimoniCard
                  name={testimoni.name}
                  role={testimoni.role}
                  testimonial={testimoni.testimonial}
                  imageURL={testimoni.imageURL}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-center lg:text-right flex flex-col gap-3 order-1 lg:order-2">
          <h1 className="font-neuro text-4xl md:text-6xl">Testimonials</h1>
          <p className="text-base md:text-xl font-montserrat">
            This is what our users have to say about their extraordinary
            experiences partnering with us and how we&apos;ve assisted them in
            achieving their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
