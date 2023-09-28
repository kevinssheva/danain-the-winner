"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./../styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useMemo, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";

const categoryData = [
  {
    name: "Energy",
    image: "/explore/Vector.svg",
    isBig: true,
  },
  {
    name: "Games",
    image: "/explore/Vector-1.svg",
    isBig: true,
  },
  {
    name: "AR & VR",
    image: "/explore/Vector-2.svg",
    isBig: true,
  },
  {
    name: "Food & Beverage",
    image: "/explore/Vector-3.svg",
    isBig: false,
  },
  {
    name: "Climate Change",
    image: "/explore/Vector-4.svg",
    isBig: false,
  },
  {
    name: "Education",
    image: "/explore/Vector-5.svg",
    isBig: false,
  },
  {
    name: "Travel & Tourism",
    image: "/explore/Vector-6.svg",
    isBig: false,
  },
  {
    name: "Fintech & Finance",
    image: "/explore/Vector-7.svg",
    isBig: false,
  },
  {
    name: "Technology",
    image: "/explore/Vector-8.svg",
    isBig: false,
  },
  {
    name: "Health & Fitness",
    image: "/explore/Vector-9.svg",
    isBig: false,
  },
  {
    name: "Agriculture",
    image: "/explore/Vector-10.svg",
    isBig: false,
  },
  {
    name: "Sport",
    image: "/explore/Vector-11.svg",
    isBig: false,
  },
  {
    name: "AI",
    image: "/explore/Vector-12.svg",
    isBig: false,
  },
  {
    name: "Sustainability",
    image: "/explore/Vector-13.svg",
    isBig: false,
  },
];

const Filter = ({
  showSort,
  toogleOpen,
  toogleClose,
}: {
  showSort: boolean;
  toogleOpen: () => void;
  toogleClose: () => void;
}) => {
  const swiperRef = useRef<SwiperType>();
  const [activeCategory, setActiveCategory] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    if (activeCategory.includes(category)) {
      setActiveCategory(activeCategory.filter((item) => item !== category));
    } else {
      setActiveCategory([...activeCategory, category]);
    }
  };

  const isCategoryActive = useMemo(() => {
    return (category: string) => activeCategory.includes(category);
  }, [activeCategory]);

  const toogleShow = () => {
    if (showSort) {
      toogleClose();
    } else {
      toogleOpen();
    }
  };
  return (
    <div className="flex items-center w-full gap-5">
      <div className="flex-1 flex items-center gap-3 overflow-hidden">
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className={`text-2xl`}
        >
          <FaArrowCircleLeft />
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          modules={[Navigation]}
          className="flex-1 w-full h-full"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {categoryData.map((category) => (
            <SwiperSlide key={category.name}>
              <div
                className={`relative flex flex-col items-center justify-start gap-2 h-full cursor-pointer ${
                  isCategoryActive(category.name)
                    ? "shadow-lg shadow-white/70"
                    : "hover:scale-[105%]"
                } transition pb-2 px-1`}
                onClick={() => toggleCategory(category.name)}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={100}
                  className={`h-[40%] aspect-[4/3] ${
                    category.isBig ? "p-[0.3rem]" : "p-[0.1rem]"
                  }`}
                />
                <div className="flex-1 flex items-center">
                  <p className="text-xs font-montserrat">{category.name}</p>
                </div>
                <div
                  className={`${
                    isCategoryActive(category.name) ? "block" : "hidden"
                  } absolute w-full h-1 bottom-0 rounded-md bg-white`}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className="text-2xl"
        >
          <FaArrowCircleRight />
        </div>
      </div>
      <div
        className="px-4 bg-white rounded-md py-3 flex items-center justify-between gap-3"
        onClick={toogleShow}
      >
        <p className="text-black text-sm font-bold font-montserrat">Filters</p>
        <FaChevronDown
          color="black"
          fill="black"
          className={`${showSort ? "rotate-180" : "rotate-0"} transition duration-300`}
        />
      </div>
    </div>
  );
};

export default Filter;
